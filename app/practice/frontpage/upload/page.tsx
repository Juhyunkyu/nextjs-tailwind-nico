export default function Upload() {
  return (
    <div className="px-4 py-16">
      <div>
        <div>
          <label className="flex rounded-lg cursor-pointer h-44 hover:text-orange-500 hover:border-orange-500 items-center justify-center border-2 border-dashed">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input className="hidden" type="file" />
          </label>
        </div>
      </div>
      <div className="mt-3 mb-5">
        <label
          htmlFor="price"
          className="text-gray-500 block font-medium text-sm"
        >
          Price
        </label>
        <div className="mt-1 flex items-center relative">
          {/* 부모div에 relative를 주고 input안에 span을 넣으려면 span에 absolute를 주면 된다 그러면 맨앞에 있을거고 left right를 주면 된다  */}
          <div className="left-0 pl-2 absolute pointer-events-none ">
            {/* pointer-events-none를 div에 하면 마우스로 글씨를 긁었을때 안잡힌다 */}
            <span className="text-sm ">$</span>
          </div>
          <input
            className="appearance-none pl-5 w-full p-2 border border-gray-600 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500  focus:border-orange-500"
            id="price"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute pointer-events-none right-0 pr-2">
            <span className="text-sm">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-gray-500 block font-medium text-sm">
          Description
        </label>
        <div>
          <textarea
            className="w-full mt-2 rounded-lg border-gray-700 focus:border-orange-400 focus:ring-orange-400"
            rows={4}
          />
        </div>
      </div>
      <button className="w-full py-3 my-2 bg-orange-400 hover:bg-orange-600 border border-transparent shadow-md  rounded-md  text-white font-medium text-sm focus:bg-orange-600 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:outline-none">
        Upload product
      </button>
    </div>
  );
}
