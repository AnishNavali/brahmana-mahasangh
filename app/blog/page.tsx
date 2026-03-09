import Link from 'next/link';

export default function BlogPage() {
  return (
    <section className="container" aria-label="blog">
      <h1>Blog</h1>
      <ul>
        <li><a href="#">Post 1</a></li>
        <li><a href="#">Post 2</a></li>
      </ul>
      <Link href="/">Back Home</Link>
    </section>
  );
}
