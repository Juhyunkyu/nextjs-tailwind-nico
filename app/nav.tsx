import Link from "next/link";

export default function Nav() {
  return (
    <div className="bg-gray-500 text-white p-4 flex justify-around items-center">
      <Link className="border-2 p-1 rounded-lg " href="/">
        {" "}
        Home
      </Link>
      <Link className="border-2 p-1 rounded-lg" href="/modifiers">
        {" "}
        MODIFIERS
      </Link>
      <div className="flex justify-center items-center">
        <Link
          href="/practice"
          className="relative -top-2 bg-gray-600 rounded-md p-1 text-sm"
        >
          PRACTICE
        </Link>
        <Link href="/practice/auth" className="mx-1 p-1 border-2 rounded-lg ">
          Auth(인증)
        </Link>
        <Link
          href="/practice/frontpage"
          className="mx-1 p-1 border-2 rounded-lg "
        >
          Front page
        </Link>
      </div>
    </div>
  );
}
