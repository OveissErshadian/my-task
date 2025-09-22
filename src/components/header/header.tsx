import Link from 'next/link'
import { FC } from 'react';
import { LogOut } from '../logOut/logOut';
import { cookies } from 'next/headers';

interface HeaderProps {
  showDashboardLink?: boolean;
}
const Header:FC<HeaderProps> = ({ showDashboardLink = false }) => {

  const cookieStore = cookies();
  const token = cookieStore.get('my-token')?.value; 
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">My Header</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        {showDashboardLink && <Link href="/dashboard">Dashboard</Link>}
        {token ? <LogOut /> : <Link href="/login">Log In</Link>}
      </nav>
    </header>
  );
};

export default Header
