import Link from "next/link";

export default function Community() {
  return (
    <div className="py-16 px-4 space-y-6">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <Link key={i} href={`community/${i}`}>
          <div className="mt-3">
            <span className="bg-gray-200 px-2 py-1 rounded-full text-gray-700 text-sm font-medium">
              동네질문
            </span>
            <div className="text-gray-700 mt-2">
              <span className="text-orange-500 font-semibol mr-0.5">Q.</span>{" "}
              What is the best mandu restaurant?
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-gray-500 text-sm font-medium">니꼬</span>
              <span className="text-gray-500 text-sm font-medium">
                18시간 전
              </span>
            </div>
            <div className="flex items-center border-t border-b-[1.5px] py-3 mt-2 space-x-3">
              <span className="flex items-center text-gray-600 space-x-1 text-sm font-medium">
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
              <span className="flex items-center text-gray-600 space-x-1 text-sm font-medium">
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
        </Link>
      ))}
      <Link href={"community/write"}>
        <button className="fixed bottom-16 right-6 cursor-pointer hover:bg-orange-500 bg-orange-400 rounded-full p-4 text-white shadow-md transition-colors">
          {/* frontpage의 메인 page에서 fixed버튼을 복붙함 */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}
