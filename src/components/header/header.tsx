import Link from 'next/link'
import { FC } from 'react';

interface HeaderProps {
  showDashboardLink?: boolean;
}
const Header:FC<HeaderProps> = ({ showDashboardLink = false }) => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Header</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        {showDashboardLink && <Link href="/dashboard">Dashboard</Link>}
      </nav>
    </header>
  );
};

export default Header
