import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
export default function Home({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams?.query || "";
  const posts=[{
    _createdAt:new Date(),
    views:55,
    author:{_id:1,name:"John Doe"},
    _id:1,
    description:'This is a description',
    image:"https://pbs.twimg.com/profile_images/1834328195904282624/_CAUqMol_400x400.jpg",
    category:"marvel",
    title:"We Robots",
  }]
  return (
    <>
      {/* Main Landing page */}
      <section className="purple_container">
        <h1 className="heading">
          Pitch Your Startup,<br />Connect with <br />Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      {/* Second container */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length>0?(
            posts.map((post:StartupCardType,index:number)=>(
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">No Startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
