import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams?.query || "";
  
  // Fetch posts from Sanity
  let posts = [];
  // const posts=[{
  //   _createdAt:new Date(),
  //   views:55,
  //   author:{_id:1,name:"John Doe"},
  //   _id:1,
  //   description:'This is a description',
  //   image:"https://pbs.twimg.com/profile_images/1834328195904282624/_CAUqMol_400x400.jpg",
  //   category:"marvel",
  //   title:"We Robots",
  // }]
  try {
    posts = await client.fetch(STARTUPS_QUERY);
  } catch (error) {
    console.error("Error fetching startups:", error);
  }

  return (
    <>
      {/* Main Landing Page */}
      <section className="purple_container">
        <h1 className="heading">
          Pitch Your Startup,<br />Connect with <br />Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      {/* Second Section - Display Startups */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
