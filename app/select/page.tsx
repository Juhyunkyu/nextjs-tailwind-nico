export default function Select() {
  return (
    <div>
      <div></div>
      <div>
        <form className="bg-blue-400 m-4 p-3 mx-auto w-3/4 flex flex-col space-y-2 rounded-md focus-within:bg-blue-500">
          <input
            className="p-2 required:text-black invalid:bg-yellow-200 valid:bg-pink-200 "
            type="text"
            required
            placeholder="name"
          ></input>
          <input
            className="p-2 peer"
            type="password"
            required
            placeholder="password"
          ></input>
          <span className="hidden peer-invalid:text-red-300 peer-invalid:block">
            This input is invalid
          </span>
          <span className="hidden peer-valid:text-teal-300 peer-valid:block">
            Awesome username
          </span>
          <span className="hidden peer-hover:text-orange-300 peer-hover:block">
            Hello
          </span>
          <input
            type="submit"
            value="Login"
            className="bg-blue-700 p-2 text-white"
          ></input>
        </form>
      </div>
      <details className="open:bg-blue-100 p-1">
        <summary className="px-6 font-medium cursor-pointer">
          Details : invalid, valid, required, placeholder-shown, peer
        </summary>
        <ul className="m-4 p-3 px-6 list-disc marker:text-xl bg-blue-200 rounded-lg">
          <li> invalid: 필드가 유효하지 않은 데이터를 포함하고 있을 때. </li>
          <li> valid: 필드가 데이터를 포함되어 있을 때. </li>
          <li>
            required: input 속성에 required 가 있고 required에 값이 들어가면
            실행. input속성에 required가 없음 적용안됨
          </li>
          <li> placeholder-shown: placeholder에 값이 있을때</li>
          <li>
            peer 형제 상태를 기반으로 한 스타일 지정<br></br> &lt;input
            class="peer" /&gt; <br></br>&lt;p
            className="peer-valid:text-teal-300"&gt; Pizza &lt;/p&gt;<br></br>
            여기서 input창에 valid가 되면 pizza 글씨색이 바뀜
          </li>
        </ul>
      </details>
      <div className=" bg-slate-300 py-20 px-10 grid gap-10 min-h-screen">
        {/* 첫번째 */}
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <span className=" font-semibold text-2xl">Select Item</span>
          <ul>
            {/* map을 돌려서 첫번째랑 마지막 div 색바꾸기 */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex justify-between my-2 p-2 rounded-md first-of-type:bg-red-200 last:bg-emerald-800 odd:bg-orange-300 even:bg-blue-200"
              >
                {/* first:는 첫번째 child 이고 odd는 홀수 even 짝수 */}
                <span className="text-gray-500 ">Grey Chair</span>
                <span className="font-semibold">$18</span>
              </div>
            ))}
          </ul>
          <ul>
            {["a", "b", "c", ""].map((c, i) => (
              // 값이 없는 자식들을(<li></li>) 안보이게 할수있다 empty:hidden
              <li
                key={i}
                className="even:bg-red-300 py-4 flex justify-center items-center rounded-md empty:hidden"
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <span className="text-gray-500 ">Tooly Table</span>
            <span className="font-semibold">$8.2</span>
          </div>
          <div className=" mt-2 pt-2 border-t-2 border-dashed flex justify-between flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">$10</span>
          </div>
          <button className=" mx-auto  flex justify-center bg-blue-600 text-white text-center py-3 mt-4 rounded-xl w-3/5 hover:bg-orange-500 hover:text-slate-700 focus:bg-red-400 active:bg-green-800 active:text-white">
            Checkout
          </button>
        </div>

        {/* 두번째 */}
        <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
          {/* overflow-hidden 요소의 내용이 그 경계를 넘어서는 경우, 그 넘치는 부분을 숨기는 스타일을 적용합니다. 즉, 요소의 넘치는 내용이 보이지 않도록 합니다. */}
          <div className="bg-blue-500 -mb-3 p-3 pb-16">
            <span className="text-white text-xl">profile</span>
          </div>
          <div className="rounded-2xl relative -top-3 bg-white">
            <div className="flex justify-between p-4 items-end relative -top-5">
              <div className="flex flex-col items-center">
                <span className="text-gray-400 text-sm">Orders</span>
                <span className="font-semibold text-black">340</span>
              </div>
              <div className="h-25 w-25 relative -top-5">
                <img
                  className="border-2 rounded-full group-hover:rounded-md"
                  src="/sekang-sm.svg"
                />
              </div>
              <div className="flex flex-col items-center ">
                <span className="text-gray-400 text-sm">Spent</span>
                <span className="font-semibold text-black">$3,432</span>
              </div>
            </div>
            <div className=" flex flex-col -mt-8 items-center relative">
              <span className="text-black font-semibold">Tony Molloy</span>
              <span className="text-gray-500 text-sm">New York, USA</span>
            </div>
          </div>
        </div>

        {/* 세번째 */}
        <div className="bg-white p-5 rounded-2xl shadow-xl ">
          <div className="flex justify-between items-center">
            <span className="font-normal text-3xl opacity-50">←</span>
            <div className="space-x-3 opacity-80">
              <span>⭐ 4.9</span>
              <span className="shadow-xl p-1 rounded-md">💖</span>
            </div>
          </div>
          <div>
            <img
              className="h-48 rounded-lg p-5 border-4 "
              src="/sekang-sm.svg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">Swoon Lounge</span>
            <span className="text-gray-500 text-sm">chair</span>
            <div className="flex justify-between items-center mt-2">
              <div className="space-x-2">
                <button className="w-5 h-5 rounded-full bg-yellow-400 focus:ring-2 ring-yellow-400 ring-offset-2 transition"></button>
                <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-indigo-500 ring-offset-2 transition"></button>
                <button className="w-5 h-5 rounded-full bg-green-700 focus:ring-2 ring-green-700 ring-offset-2 transition"></button>
              </div>
              <div className="flex items-center space-x-3">
                {/* aspect-square 정사각형 모양의 요소를 만들기 위해 사용됩니다. 
            이 클래스를 적용하면 요소의 가로 너비와 세로 높이가 동일하게 설정
            즉, 가로와 세로의 비율이 1:1이 되어 정사각형 형태로 요소를 표현 */}
                <button className="bg-blue-100 rounded-md aspect-square w-8 text-xl text-gray-400 flex justify-center items-center ">
                  -
                </button>
                <button>1</button>
                <button className="bg-blue-100 rounded-md aspect-square w-8 text-xl text-gray-400 flex justify-center items-center ">
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold text-2xl">$450</span>
              <button className="bg-blue-500 text-white text-sm rounded-lg py-2 px-8 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
