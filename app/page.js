import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="px-48 py-20">
        <h1 className="text-4xl font-bold pb-8">CPRG 306: Web Development 2 - Assignments</h1>
        <ul>
          <li><Link href="/week-2" className="hover:text-green-500 hover:underline">Week 2 Assignments</Link></li>
          <li><Link href="/week-3" className="hover:text-green-500 hover:underline">Week 3 Assignments</Link></li>
          <li><Link href="/week-4" className="hover:text-green-500 hover:underline">Week 4 Assignments</Link></li>
          <li><Link href="/week-5" className="hover:text-green-500 hover:underline">Week 5 Assignments</Link></li>
          <li><Link href="/week-6" className="hover:text-green-500 hover:underline">Week 6 Assignments</Link></li>
        </ul>
      </div>
    </div>
  );
}
