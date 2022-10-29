import fs from 'fs/promises';
import matter from 'gray-matter';
import Link from 'next/link';


const getBlogPosts = async () => {
  let blogPosts: { title: string, fileName: string; }[] = [];
  const allBlogFiles = await fs.readdir("posts/");

  const promises = allBlogFiles.map(async (file) => {
    const rawFileData = await fs.readFile("posts/" + file, "utf8");
    const { data } = matter(rawFileData);

    blogPosts.push({
      title: data.title,
      fileName: file.replace(".mdx", "")
    });
  });

  await Promise.all(promises);

  return blogPosts;
};



const Blog = async () => {
  const blogPosts = await getBlogPosts();


  return (
    <>
      <pre>
        {JSON.stringify(blogPosts, null, 4)}
      </pre>
      <h1>blog</h1>
      <ul>
        {blogPosts.map(blog => (
          <li>
            <Link href={`/blog/${blog.fileName}`}>
              <p className="f-size-p2 f-weight-r">
                {blog.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;