import { getPosts } from "@/data/posts";

export default async function Home() {
  const { data } = await getPosts();
 
  return (
    <div>
      <main>
        <div className="p-2">
          <h1>Latest Post</h1>
        </div>
        {!data &&
          <h1 className="text-center py-20 font-bold text-3xl">You have no posts</h1>
        }
        {data && 
          <div className="p-2">
            {data.map(post => {
              return (
                <div key={post.id}>
                  <img src={post.imageUrl} alt={post.title} width="600px" />
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              )
          })}
          </div>
        }
      </main>
    </div>
  );
}
