import Link from "next/link";

export default function Front() {
  return (
    <div className="flex flex-col space-y-3 py-10">
      <div className="flex">
        <Link
          href={"frontpage/community"}
          className=" pl-1 ml-5 text-lg text-gray-700 font-semibold cursor-pointer border-b "
        >
          Community
        </Link>
        <Link
          href={"frontpage/chats"}
          className=" pl-1 ml-5 text-lg text-gray-700 font-semibold cursor-pointer border-b "
        >
          Chats
        </Link>
      </div>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <Link key={i} href={`frontpage/${i}`}>
          <div className="flex justify-between cursor-pointer px-4 pb-4 border-b border-gray-700">
            <div className="p-2 flex space-x-2">
              <div className="bg-gray-400 w-20 h-20 rounded-md" />
              <div className="flex flex-col">
                <h3 className="text-sm font-medium text-gray-700">
                  New iPhone 14
                </h3>
                <span className="text-xs text-gray-600">Black</span>
                <span className="text-sm font-semibold mt-1">$95</span>
              </div>
            </div>
            <div className=" flex justify-end items-end space-x-2">
              <div className=" flex text-sm items-center space-x-0.5 text-gray-500">
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </div>
              <div className="flex text-sm items-center space-x-0.5 text-gray-500">
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
                <span>1</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
      <Link href={"frontpage/upload"}>
        <button className="fixed bottom-16 right-6 cursor-pointer hover:bg-orange-500 bg-orange-400 rounded-full p-4 text-white shadow-md transition-colors">
          <svg
            className="h-6 w-6"
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}
