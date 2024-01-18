import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/admin">Admin</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
