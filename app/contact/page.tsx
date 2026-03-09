import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className="container" aria-label="contact">
      <h1>Contact</h1>
      <p>Reach us at example@example.com</p>
      <Link href="/">Home</Link>
    </section>
  );
}
