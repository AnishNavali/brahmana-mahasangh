import Link from 'next/link';

export default function MembershipPage() {
  return (
    <section className="container" aria-label="membership">
      <h1>Membership</h1>
      <p>Explore membership options and benefits.</p>
      <Link href="/registrationForm">Register Now</Link>
    </section>
  );
}
