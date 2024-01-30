export default function Practice() {
  return (
    <div className="p-4 bg-gray-700">
      <pre className="whitespace-pre-wrap text-yellow-50 font-semibold ">
        {`
<pre>태그를 쓰면 문자열 엔터값 까지 그대로 출력이 된다 그리고 자동 줄바꿈이 되질않아 찾아보니 className=""에 whitespace-pre-wrap를 넣으니 자동 줄바꿈이 된다

※Auth 설명

⏺
function cls(...classNames: string[]) {      
return classNames.join(" ");
// join 안에 빈칸을 준다 예 [1,2,3].join("/") 이렇게 하면 "1/2/3" 결과값
}
      className={cls("pb-4 border-b-2",
          method === "phone"
          ? "text-orange-500 border-orange-500"
          : "border-transparent text-gray-500")}

//위에 cls라는 함수를 쓰면 빽틱이나 {$} 이런것을 안써도 된다 코딩내용에 두개다 적어놨다

⏺ border-transparent 는 border를 투명하게 만든다


⏺ Plugins

재사용 가능한 타사 플러그인으로 Tailwind 플러그인을 사용하면 CSS 대신 JavaScript를 사용하여 사용자의 스타일시트에 삽입할 Tailwind에 대한 새 스타일을 등록할 수 있습니다.
https://tailwindcss.com/docs/plugins
@tailwindcss/forms (form요소에 다양한 기본 스타일을 추가해줍니다.)
form 요소를 유틸리티로 쉽게 재정의할 수 있도록 하는 form 스타일에 대한 기본 reset을 제공하는 플러그인입니다.
 @tailwindcss/forms 플러그인은 유틸리티 클래스를 사용하여 form 요소의 스타일을 쉽게 지정할 수 있도록 하는 독창적인 form reset layer를 추가합니다.
npm install -D @tailwindcss/forms 설치후 tailwind.config.ts 파일에 
 plugins:[require("@tailwindcss/forms")], 이렇게 추가해주면됨

⏺ Screens 크기별 
 <div className="flex flex-col mx-auto sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5">
  https://tailwindcss.com/docs/screens 

⏺ appearance-none 기본 스타일을 리셋

  --------------------------------------------

  ※ Front page 설명

  ⏺
  map(_,i)에서 _는 무시되는 매개변수를 나타내는데 사용되며, 해당 값이 필요하지 않을 때 사용할 수 있습니다.
  
      <div>
        {[...Array(10)].map((_, i) => (
          <div key={i}>dandy</div>
        ))}
      </div> 
  니코샘의 map을 이렇게도 바꿀수가 있다

  ⏺ Heroicons 아이콘
  Tailwind CSS로부터 만들어진 손으로 만든 아름다운 SVG 아이콘
  https://heroicons.com/ 여기에 들어가서 클릭만하면 복사가된다 react에서 하려면 jsx복사 하면 될거같다
  (stroke-linejoin 이렇게 되어있으면 react에서는 strokeLinejoin이렇게 고쳐줘야한다) 

  ⏺ fixed
  오른쪽 밑에 고정된 버튼 fixed를 하면 맨위로 올라간다 그럼 밑에배치하고 싶음 bottom-겂 을 주고 오른쪽에 배치하고 싶음 right-값을 주면 된다

  ⏺ label이나 input에 block을 주는이유
  HTML에서 <label> 요소는 기본적으로 인라인 요소로, 다른 인라인 요소들과 같은 줄에 배치됩니다. 그러나 "block" 클래스를 적용하면 <label> 요소는 블록 수준 요소로 변하게 되어, 이 요소 앞뒤로 새 줄이 생기게 됩니다.
  이 경우에 "block" 클래스를 사용하는 이유는 아마도 "Price"라는 텍스트를 독립된 줄에 배치하고 싶었기 때문일 것입니다. "block" 클래스를 적용하면, <label> 요소는 그 아래에 오는 다른 요소(예를 들어, 입력 필드)를 위해 공간을 만들어 줍니다.
  따라서, 이 코드에서 "block" 클래스는 "Price"라는 텍스트를 위한 독립된 공간을 확보하고, 그 아래에 오는 요소와의 간격을 조절하는 역할을 합니다.
  
  ⏺ relative absolute
  부모div에 relative를 주고 input안에 span을 넣으려면 span에 absolute를 주면 된다 그러면 맨앞에 있을거고 left right를 주면 된다 
  
  ⏺ 
  user-select-none와 pointer-event-none의 공통점
  - 둘 다 텍스트를 선택하는 상호작용을 막는다.
  
  차이점
  user-select-none
  - 선택만 안될 뿐, hover, active 같은 이벤트는 정상적으로 작동한다.
  
  pointer-event-none
  - 선택 뿐만 아니라 hover, active 등의 이벤트도 작동하지 않는다.

  ⏺ textarea의 사이즈를 고정시키고 싶으신 분들은 textarea에 resize-none을 추가해주시면 됩니다.
  row={10} 세로 사이즈 조정

  ⏺ border
  border-b-[1.5px] 내가 원하는 값이 없을때 []이렇게 해서 넣을수 있다

  border-t-값 이것이 화면 처음부터 끝까지 그으려면 px를 준다 mx나 ml mr 주면 안된다

  divide
  컴포넌트를 구분하려고 밑에 border를 줬는데 마지막 컴포넌트는 밑줄을 안주려고 last:border-none 이나 last:border-b-0을 쓰면 되지만
  여기에 유용한 utility class인 divide가 있다 어떤요소의 옆에 형제 요소가 있으면 border를 넣어주고 없음 실행하지 않는다
  divide-x 나 y-굵기(divide-y-[1px] y축으로 1픽셀 선을 그어준다 제일 작은값이 굵어서 []를 씀) 
  chats의 페이지에 참고를 하면 되고 map안에 div에 border-b-1를 주고 last:border-b-0 줬지만 다지우고 부모 div에 divide-y-[1px]를 줬다 

  ⏺ onClick으로 간단하게 주소이동과 뒤로가기 

  onClick={() => window.location.href="frontpage/chats"} 이 코드는 사용자가 버튼을 클릭했을 때 발생하는 이벤트를 정의하는 것입니다.

  onClick은 이벤트 핸들러로, 버튼이 클릭 되었을 때 호출되는 함수를 지정합니다. 여기서는 화살표 함수(() => ...)를 이용해 짧은 함수를 정의하고 있습니다.
  
  window.location.href는 웹 브라우저의 현재 URL을 가져오거나 변경하는 JavaScript의 내장 객체와 속성입니다. 이 속성에 새 URL을 할당하면, 브라우저는 해당 URL로 이동합니다. 여기서는 "frontpage/chats"라는 URL을 할당하므로, 버튼을 클릭하면 해당 페이지로 이동하게 됩니다.
  
  window.location.href 대신 사용할 수 있는 것들은 여러 가지가 있습니다. 
  예를 들면,  
  window.location.pathname: 현재 페이지의 경로 부분만 가져오거나 변경합니다.
  window.location.reload(): 현재 페이지를 다시 불러옵니다.
  window.history.back(): 브라우저의 '뒤로 가기' 버튼을 누른 것과 같은 효과를 줍니다.

  참고 practice/frontpage/[id]의 페이지에 fixed를 이용해 back 버튼을 만들어 봄

  ⏺ Top / Right / Bottom / Left

  positioned된 요소의 배치를 제어하기 위한 유틸리티입니다.

  inset-x-0 => left: 0px; right: 0px;
  inset-x-2 => left: 0.5rem; /* 8px */ right: 0.5rem; /* 8px */

  inset-y-0 => top: 0px; bottom: 0px;
  inset-y-2 => top: 0.5rem; /* 8px */ bottom: 0.5rem; /* 8px */

  참고로 chats/id에 있음
  https://tailwindcss.com/docs/top-right-bottom-left

  ⏺ chats/id 페이지에 대화창에서 flex-row-reverse space-x-2 space-x-reverse 
    이렇게 reverse를 쓸수있음(참고로 gap-2를 2번째 div에 줬는데 잘됨)
  `}
      </pre>
    </div>
  );
}
