import Link from "next/link";

export default function CommuniyDetail() {
  return (
    <div>
      <div className="mx-4 mt-4 mb-2">
        <span className="bg-gray-200 px-2 py-1 rounded-full text-sm font-medium">
          동네질문
        </span>
      </div>
      <div className="flex px-4 mb-2 items-center space-x-2 py-2">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <Link href={"/practice/frontpage/profile"}>
          <div>
            <p className="text-sm font-medium text-slate-800">Steve Jebs</p>
            <p className="text-xs font-medium text-slate-800">
              View profile &rarr;
            </p>
          </div>
        </Link>
      </div>
      <div>
        <div className="text-gray-700 ml-4 mt-2 mb-6">
          <span className="text-orange-500 font-semibol mr-0.5">Q.</span> What
          is the best mandu restaurant?
        </div>
        <div className="mb-5 px-4 border-t-4 flex justify-start items-center space-x-4 text-sm font-semibold">
          {/* border-t-값 이것이 화면에 첨부터 끝까지 그으려면 px를 준다 mx나 ml mr 주면 안된다 */}
          <span className="mt-3 flex items-center space-x-1 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>궁금해요 1</span>
          </span>
          <span className="mt-3 flex items-center space-x-1 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            <span>답변 1</span>
          </span>
        </div>
      </div>
      {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
        <div key={i}>
          <div className="px-4 mb-5 flex justify-start space-x-2">
            <div className="h-8 w-8 rounded-full bg-slate-300" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-slate-80">
                Steve Jebs
              </span>
              <span className="text-xs font-medium text-slate-80">
                2시간 전
              </span>
              <p className="mt-2 text-slate-80">
                The best mandu restaurant is the one next to my house.
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="px-4 mb-4">
        <textarea
          className="w-full rounded-lg border-gray-700 focus:border-orange-400 focus:ring-orange-400"
          rows={2}
          placeholder="Answer this question!"
        />
        <button className="w-full py-3 my-2 bg-orange-400 hover:bg-orange-600 border border-transparent shadow-md  rounded-md  text-white font-medium text-sm focus:bg-orange-600 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:outline-none">
          Reply
        </button>
      </div>
    </div>
  );
}
