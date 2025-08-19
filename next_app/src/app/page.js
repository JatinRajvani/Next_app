"use client"
import Link from 'next/link';
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
     <h1 className="text-3xl font-bold">Welcome to Next.js with MUI</h1>
     <nav>

      <ul className="flex gap-4">
                <li>
          <Link href="/profile/Jatin" className="text-blue-500 hover:underline">
            Profile
          </Link>
        </li>
                        <li>
          <Link href="/blog/001" className="text-blue-500 hover:underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/mui/card" className="text-blue-500 hover:underline">
            Card
          </Link>
        </li>
        <li>
          <Link href="/mui/button" className="text-blue-500 hover:underline">
            Button
          </Link>
        </li>
        <li>
          <Link href="/mui/dialog" className="text-blue-500 hover:underline">
            Dialog
          </Link>
        </li>
        <li>
          <Link href="/mui/drawer" className="text-blue-500 hover:underline">
            Drawer
          </Link  >
        </li>
        <li>
          <Link href="/mui/navigation" className="text-blue-500 hover:underline">
            Navigation
          </Link>
        </li>
        <li>
          <Link href="/mui/typography" className="text-blue-500 hover:underline">
            Typography
          </Link>
        </li>
                <li>
          <Link href="/mui/dialog" className="text-blue-500 hover:underline">
            Dialog
          </Link>
        </li>
      </ul>
     </nav>
    </div>
  );
}
