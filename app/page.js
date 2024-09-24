import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black text-white">
      <div className="px-48 py-20">
        <h1 className="text-4xl font-bold pb-8">CPRG 306: Web Development 2 - Assignments</h1>
        <Link href="/week-2" className="hover:text-green-500 hover:underline">Week 2 Assignments</Link>
      </div>
    </div>
  );
}
