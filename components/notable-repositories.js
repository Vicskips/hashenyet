import PostPreview from "./post-preview";

export default function NotableRepositories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight">
        Notable repositories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
