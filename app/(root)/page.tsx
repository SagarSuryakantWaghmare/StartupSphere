import SearchForm from "@/components/SearchForm";
import StartupCard,{StartupTypeCard} from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams?.query || "";
  
  // Fetch posts from Sanity
  let posts = [];

  try {
    // Correct fetch syntax using client.fetch or sanityFetch
    const response = await sanityFetch({ query: STARTUPS_QUERY });
    posts = response?.data || [];
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
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups found</p>
          )}
        </ul>
      </section>
      <SanityLive />

    </>
  );
}
