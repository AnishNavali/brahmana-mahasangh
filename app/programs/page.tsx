import Link from 'next/link';

export default function ProgramsPage() {
  return (
    <section className="container" aria-label="programs">
      <h1>Programs</h1>
      <p>Overview of programs and services offered.</p>
      <Link href="/">Home</Link>
    </section>
  );
}
