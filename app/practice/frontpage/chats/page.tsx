"use client";

import Link from "next/link";

export default function Chats() {
  return (
    <div className="pb-10 pt-4">
      <button
        onClick={() => window.history.back()}
        className="px-4 py-1.5 mx-4 mb-3 font-medium bg-gray-400 hover:bg-gray-500 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md focus:ring-gray-500 "
      >
        ◀ back
      </button>
      <div className="divide-y">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
          <Link key={i} href={`chats/${i}`}>
            <div className="flex px-4 py-3 items-center cursor-pointer space-x-2">
              {/* 컴포넌트를 구분하려고 밑에 border를 줬는데 마지막 컴포넌트는 밑줄을
          안주려고 last:border-none 이나 last:border-b-0을 쓰면 되지만
          테일윈드에서 divide가 있는데 어떤요소의 옆에 형제 요소가 있으면
          border를 넣어주고 없음 실행하지 않는다 */}
              <div className="h-8 w-8 rounded-full bg-slate-300" />
              <div>
                <p className=" text-slate-800">Steve Jebs</p>
                <p className=" text-xs text-slate-800">
                  내일 오후 2시에 만나요 See you tomorrow in the corner at 2pm.
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
