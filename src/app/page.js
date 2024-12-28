import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="p-2 font-semibold italic text-4xl">Gridbox Manager</h1>
      <Link href="/about">About</Link>
    </>
  );
}
