"use client";
import { useState } from "react";

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  //상태의 값은 "email" 또는 "phone" 두 가지 중 하나만 가능하도록 TypeScript를 이용해 지정.
  // 초기값은 "email"로 설정
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");

  function cls(...classNames: string[]) {
    return classNames.join(" ");
    // join 안에 빈칸을 준다 예 [1,2,3].join("/")  이렇게 하면 "1/2/3" 결과값
  }
  return (
    <div className="flex flex-col mx-auto sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5">
      {/* https://tailwindcss.com/docs/screens */}
      <span className="bg-orange-400 my-1 mx-4 rounded-lg flex justify-center items-center text-white">
        Auth (인증)
      </span>
      <div className="mt-16 p-4">
        <h3 className=" text-3xl font-bold text-center">Enter to Carrot</h3>
        <div>
          <div className="mt-10 flex flex-col items-center">
            <h5 className="text-sm font-medium text-slate-600 text-center">
              Enter using:
            </h5>
            <div className="mt-6 border-b w-full grid grid-cols-2">
              <button
                className={`pb-4 border-b-2 ${
                  method === "email"
                    ? " text-orange-500  border-orange-500"
                    : "border-transparent text-gray-500"
                  //border-transparent는 테두리를 투명하게 만드는 CSS 클래스 즉 여기서 버튼이 사용되지 않으면 사라지게 함 그래서 위에 border-b-2를 써도 됨
                }`} // 밑에 버튼이랑 중복이라 위에 cls 함수를 선언했지만 참고하라고 적음
                onClick={onEmailClick}
              >
                Email
              </button>
              <button
                className={cls(
                  "pb-4 border-b-2",
                  method === "phone"
                    ? " text-orange-500  border-orange-500"
                    : "border-transparent text-gray-500"
                )} //위에 cls라는 함수를 선언하고 빽틱이나 {$} 이런것을 안써도 된다
                onClick={onPhoneClick}
              >
                Phone
              </button>
            </div>
          </div>
          <form className="flex flex-col mt-3">
            <label
              htmlFor="input"
              className="text-gray-500 font-medium text-sm"
            >
              {method === "email" ? "Email address" : null}
              {method === "phone" ? "Phone number" : null}
            </label>
            <div className="mt-1">
              {method === "email" ? (
                <input
                  id="input"
                  type="email"
                  className="appearance-none w-full p-2 border border-gray-700 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500  focus:border-orange-500"
                  required
                />
              ) : //   appearance-none input의 기본 스타일을 리셋
              null}
              {method === "phone" ? (
                <div className=" flex items-center">
                  <span className=" border border-gray-400 text-gray-500 rounded-l-lg p-2">
                    +82
                  </span>
                  <input
                    id="input"
                    className="appearance-none w-full p-2 border border-l-0 border-gray-400 rounded-md rounded-l-none shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500  focus:border-orange-500"
                    type="number"
                    required
                  />
                </div>
              ) : null}
            </div>
            <button className="bg-orange-400 hover:bg-orange-600 border border-transparent shadow-md  px-4 py-3 mt-4 rounded-md  text-white font-medium text-sm focus:bg-orange-600 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:outline-none">
              {method === "email" ? "Get login link" : null}
              {method === "phone" ? "Get one-time password" : null}
            </button>
          </form>
          <div className="mt-7">
            <div className="relative">
              <div className="absolute w-full border-t border-gray-700" />
              <div className="relative -top-3 text-center ">
                <span className="bg-white px-2">Or enter with</span>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button className="p-2 border border-gray-400 shadow-md rounded-md flex justify-center items-center text-gray-600 hover:bg-gray-200 focus:bg-gray-200">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="p-2 border border-gray-400 shadow-md rounded-md flex justify-center items-center text-gray-600 hover:bg-gray-200 focus:bg-gray-200">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
