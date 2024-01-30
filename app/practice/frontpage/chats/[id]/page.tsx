export default function ChatDetail() {
  return (
    <div className="py-10 mb-5 space-y-4">
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="px-4 flex flex-row-reverse gap-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>I want ￦20,000 </p>
        </div>
      </div>
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>미쳤어</p>
        </div>
      </div>
      {/* 여기위에서부터 테스트 복붙 */}
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="px-4 flex flex-row-reverse space-x-2 space-x-reverse ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="px-4 flex flex-row-reverse space-x-2 space-x-reverse ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="px-4 flex flex-row-reverse space-x-2 space-x-reverse ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>I want ￦20,000</p>
        </div>
      </div>
      <div className="px-4 flex items-start space-x-2 ">
        <div className="h-8 w-8 rounded-full bg-slate-300" />
        <div className="p-2 rounded-md w-1/2 border border-gray-400 text-sm text-gray-700 font-semibold">
          <p>미쳤어</p>
        </div>
      </div>

      {/* 인풋창 */}
      <div className="fixed bottom-3 mx-auto max-w-md inset-x-0">
        <div className="flex items-center relative ">
          <input
            className="border-gray-400 shadow-md w-full pr-14 rounded-full hover:ring-1 hover:border-orange-500 hover:ring-orange-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
          />
          <div className="absolute inset-y-0 flex p-1.5 right-0">
            <button className="text-white rounded-full p-2 flex items-center bg-orange-400 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 ">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
