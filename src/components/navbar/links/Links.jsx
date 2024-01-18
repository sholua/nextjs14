import Link from 'next/link';
import React from 'react';

const links = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
  { title: 'Blog', path: '/blog' },
  { title: 'Admin', path: '/admin' },
  { title: 'Login', path: '/login' },
];

const Links = () => {
  return (
    <div>
      {links.map((link) => (
        <Link key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
