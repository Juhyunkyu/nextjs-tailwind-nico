export default function Modifiers() {
  return (
    <div className="grid lg:grid-cols-2  xl:grid-cols-3 gap-10 bg-slate-300 p-10 min-h-screen dark:bg-black">
      {/* 다섯번째 */}
      <div className=" portrait:bg-amber-300 landscape:bg-lime-500">
        <details className="open:bg-blue-100 rounded-lg py-4 px-7 dark:bg-black ">
          <summary className="p-2 rounded-xl select-none font-medium cursor-pointer dark:bg-black">
            Details(summary) : select-none, list-disc, marker:, file:,
            cursor-pointer, landscape, portrait, dark:
          </summary>
          <ul className="px-7 py-3 mt-2 list-disc marker:text-xl bg-blue-200 rounded-lg dark:bg-black">
            <input
              type="file"
              className=" p-2 file:hover:bg-white file:hover:text-blue-700 file:border-0 file:rounded-md file:bg-blue-700 file:text-white file:p-1"
            ></input>
            <li>select-none을 쓰면 드레그하면 잡히질 않는다</li>
            <li>
              details을 쓰면 숨기고 보이는 테그가 보여짐 summary는 제목이고
              다음엔 div라던가 span 등 여러 태그를 쓰면됨 select-none 하면
              summary를 누르면 글씨가 잡히는데 안잡히게 하고 드레그 했을때
              텍스트가 잡히질 않음 summary에 씀
            </li>
            <li>
              {" "}
              list-disc 하면 리스트 테그앞에 . 표시 marker:text-xl 하면 .표시를
              크게한다 list-decimal 하면 앞에 숫자로 나옴
            </li>
            <li> cursor-pointer 테그위에 마우스가 가면 손가락 표시 </li>
            <li className="first-letter:text-7xl first-letter:hover:text-violet-500">
              {" "}
              first-latter:text-7xl 하면 첫번째 글자에 7xl 크기로 나타냄{" "}
            </li>
            <li>landscape 가로모드, portrait 세로모드 (모바일일때 적용)</li>
            <li>
              dark: dark 모드가 활성화되어 있을 때 사이트 스타일을 다르게 지정.
              <br />
              darkMode를 수동으로 설정을 하려면 tailwind.config.ts 파일에
              들어가서 darkMode: "class", 추가 입력하고 부모 div 같은데서
              classname에 dark라고 넣어 줘야함 ("media" 를 쓰면 기본값 -
              사용자가 라이트모드 다크모드로 했을때 적용)
              <br /> 전체적으로 적용을 해봤고 3번째 예제에 다크모드 적용 해봄
            </li>
          </ul>
        </details>
      </div>
      {/* 네번째 */}
      <div className="flex flex-col justify-start items-center  ">
        <form className="bg-blue-400 m-4 p-6 w-full flex flex-col space-y-2 rounded-md focus-within:bg-blue-500 ">
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
        <details className="open:bg-blue-100 rounded-lg py-4 px-7">
          <summary className=" select-none font-medium cursor-pointer dark:bg-black p-2 rounded-lg">
            Details(summary) : invalid, valid, required, placeholder-shown, peer
          </summary>
          <ul className="px-7 mt-2 py-3 list-disc marker:text-xl bg-blue-200 rounded-lg dark:bg-black">
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
              className="peer-valid:text-teal-300"&gt; Pizza &lt;/p&gt;
              <br></br>
              여기서 input창에 valid가 되면 pizza 글씨색이 바뀜
            </li>
          </ul>
        </details>
      </div>

      {/* 세번째 */}
      <div>
        <div className="bg-white dark:bg-black dark:border p-10 rounded-2xl shadow-xl">
          <span className=" font-semibold text-2xl">Select Item</span>
          <ul>
            {/* map을 돌려서 첫번째랑 마지막 div 색바꾸기 */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex justify-between my-2 p-2 rounded-md first-of-type:bg-red-200 dark:first-of-type:bg-gray-400 last:bg-emerald-800 dark:last:bg-slate-500 odd:bg-orange-300 dark:odd:bg-slate-600 even:bg-blue-200 dark:even:bg-slate-700 "
              >
                {/* first:는 첫번째 child 이고 odd는 홀수 even 짝수 */}
                <span className="text-gray-500 dark:text-white font-medium">
                  Grey Chair
                </span>
                <span className="font-semibold ">$18</span>
              </div>
            ))}
          </ul>
          <ul>
            {["a", "b", "c", ""].map((c, i) => (
              // 값이 없는 자식들을(<li></li>) 안보이게 할수있다 empty:hidden
              <li
                key={i}
                className="even:bg-red-300 dark:even:bg-slate-600 py-2 my-2 flex justify-center items-center rounded-md empty:hidden dark:odd:bg-black dark:border dark:text-white "
              >
                {c}
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <span className="text-gray-500 dark:text-slate-200">
              Tooly Table
            </span>
            <span className="font-semibold">$8.2</span>
          </div>
          <div className=" mt-2 pt-2 border-t-2 border-dashed flex justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">$10</span>
          </div>
          <button className=" mx-auto  flex justify-center bg-blue-600 text-white text-center py-3 mt-4 rounded-xl w-3/5 hover:bg-orange-500 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white dark:bg-black dark:border focus:bg-red-400 dark:focus:bg-slate-800 active:bg-green-800 active:text-white dark:active:bg-slate-500">
            Checkout
          </button>
        </div>
        <details className="open:bg-blue-100 mt-4 p-2 rounded-xl">
          <summary className="px-6 mx-4  font-medium cursor-pointer dark:bg-black p-1 rounded-lg">
            first-of-type, last, odd, even, hover, focus, active
          </summary>
          <ul className="m-4 p-3 px-6 list-disc marker:text-xl bg-blue-200 rounded-lg dark:bg-black">
            <li> first-of-type:첫번째 child </li>
            <li> last: 마지막 child </li>
            <li> odd:홀수, even: 짝수</li>
            <li> empty:hidden 값이 없는 child는 안보이게 함 </li>
            <li>
              horver: 마우스가 올려져 있을때.
              <br /> focus: 커서가 들어가있을때.
              <br /> active: 마우스를 클릭하고 있을때.
            </li>
          </ul>
        </details>
      </div>

      {/* 두번째 */}
      <div>
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
        <details className="open:bg-blue-100 py-2 mt-4 rounded-xl">
          <summary className="px-6 m-4 rounded-xl py-2 font-medium cursor-pointer dark:bg-black ">
            overflow-hidden, group, group-hover:rounded-md, relative
          </summary>
          <ul className="m-4 p-3 px-6 list-disc marker:text-xl bg-blue-200 rounded-lg dark:bg-black ">
            <li>
              {" "}
              overflow-hidden 요소의 내용이 그 경계를 넘어서는 경우, 그 넘치는
              부분을 숨기는 스타일을 적용{" "}
            </li>
            <li>
              {" "}
              div에 group을 선언하고 group-hover:rounded-md 이렇게 사용하면
              div에 마우스가 올라가면 모서리둥글게 스타일
            </li>
            <li> relative 하면 레이어가 제일 높아짐</li>
          </ul>
        </details>
      </div>

      {/* 첫번째 */}
      <div className="lg:col-span-2 xl:col-span-1">
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
        <details className="open:bg-blue-100 py-2 mt-4 rounded-xl dark:bg-black">
          <summary className="px-6 mx-4 rounded-lg font-medium cursor-pointer dark:bg-black">
            aspect-square, ring, ring-offset, transition, col-span-2
          </summary>
          <ul className="m-4 p-3 px-6 list-disc marker:text-xl bg-blue-200 rounded-lg dark:bg-black">
            <li>
              ring, ring-offset : focus:ring-2 ring-green-700 ring-offset-2
              transition 이렇게 되면 포커스가 되었을때 offset으로 2만큼 공간을
              주고 주위에 2만큼의 두께의 녹색선을 그어주고 transition으로 점점
              스타일링(chair의 색버튼)
            </li>
            <li>
              aspect-square 정사각형 모양의 요소를 만들기 위해 사용됩니다. 이
              클래스를 적용하면 요소의 가로 너비와 세로 높이가 동일하게 설정 즉,
              가로와 세로의 비율이 1:1이 되어 정사각형 형태로 요소를
              표현(갯수버튼)
            </li>
            <li>
              col-span-2(grid의 속성) 이렇게 하면 grid의 요소 2개가 합쳐진다
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
