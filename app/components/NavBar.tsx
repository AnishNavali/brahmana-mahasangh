"use client";
import Link from 'next/link';
import React from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/membership', label: 'Membership' },
  { href: '/registrationForm', label: 'RegistrationForm' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function NavBar() {
  return (
    <nav aria-label="Main Navigation" style={{ borderBottom: '1px solid #e5e7eb', padding: '12px 0', background: '#fff' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1100px', margin: '0 auto', padding: '0 16px' }}>
        <div className="logo" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
          <Link href="/">ABBM Clone</Link>
        </div>
        <div className="nav-links" style={{ display: 'flex', gap: '16px' }}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} style={{ textDecoration: 'none', color: '#111', padding: '6px 8px', borderRadius: 6 }}>
                  {l.label}
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}
