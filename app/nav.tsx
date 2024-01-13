import Link from "next/link";

export default function Nav() {
  return (
    <div className="bg-gray-500 text-white p-4 flex justify-around items-center">
      <Link href="/"> Home</Link>
      <Link href="/select"> Select</Link>
      <Link href="/"> test</Link>
    </div>
  );
}
