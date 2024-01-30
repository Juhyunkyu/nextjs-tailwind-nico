"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ItemDetail() {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="px-4">
      <button
        onClick={() => window.history.back()}
        className="fixed font-medium bg-gray-400 hover:bg-gray-500 p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md focus:ring-gray-500 "
      >
        ◀ back
      </button>
      <div className="py-10">
        <div>
          <div className="h-96 bg-slate-400" />
          <div className="">
            <Link
              className="flex border-t border-b items-center space-x-2 py-2"
              href={`profile/${id}`}
            >
              <div className="h-14 w-14 rounded-full bg-slate-300" />
              <div>
                <p className="text-sm font-medium text-slate-800">Steve Jebs</p>
                <p className="text-xs font-medium text-slate-800">
                  View profile &rarr;
                </p>
              </div>
            </Link>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-semibold text-gray-900">Galaxy S50</h1>
            <span className="text-3xl block font-medium text-gray-900">
              $140
            </span>
            <p className="text-base my-5 text-gray-900">
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </p>
            <div className="py-3 flex justify-between items-center space-x-1">
              <button
                onClick={() => (window.location.href = `chats/${id}`)}
                className="w-full font-medium bg-orange-500 hover:bg-orange-600 p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md focus:ring-orange-500 "
              >
                {/* flex-1을 사용하면 다른형제 요소 보다 flex가 강해진다 그럼 옆에 ♥ 버튼이 줄어드는걸 방지 할수있다 */}
                Talk to seller
              </button>
              <button className="hover:bg-gray-200 hover:text-gray-600 p-2 rounded-lg text-gray-400">
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-medium text-gray-600 m-3">
            Similar items
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
              <div key={i}>
                <div className="h-56 w-full bg-gray-400 " />
                <h3 className="  text-gray-700 -mb-1">Galaxy S60</h3>
                <span className="text-sm font-medium text-gray-700">$6</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
