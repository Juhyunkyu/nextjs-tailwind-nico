export default function Practice() {
  return (
    <div className="p-4 bg-gray-700">
      <pre className="whitespace-pre-wrap text-yellow-50 font-semibold ">
        {`
<pre>태그를 쓰면 문자열 엔터값 까지 그대로 출력이 된다 그리고 자동 줄바꿈이 되질않아 찾아보니 className=""에 whitespace-pre-wrap를 넣으니 자동 줄바꿈이 된다

※Auth 설명

function cls(...classNames: string[]) {      
return classNames.join(" ");
// join 안에 빈칸을 준다 예 [1,2,3].join("/") 이렇게 하면 "1/2/3" 결과값
}
      className={cls("pb-4 border-b-2",
          method === "phone"
          ? "text-orange-500 border-orange-500"
          : "border-transparent text-gray-500")}

//위에 cls라는 함수를 쓰면 빽틱이나 {$} 이런것을 안써도 된다
//border-transparent 는 border를 투명하게 만든다


 Plugins

재사용 가능한 타사 플러그인으로 Tailwind 플러그인을 사용하면 CSS 대신 JavaScript를 사용하여 사용자의 스타일시트에 삽입할 Tailwind에 대한 새 스타일을 등록할 수 있습니다.
https://tailwindcss.com/docs/plugins
@tailwindcss/forms (form요소에 다양한 기본 스타일을 추가해줍니다.)
form 요소를 유틸리티로 쉽게 재정의할 수 있도록 하는 form 스타일에 대한 기본 reset을 제공하는 플러그인입니다.
 @tailwindcss/forms 플러그인은 유틸리티 클래스를 사용하여 form 요소의 스타일을 쉽게 지정할 수 있도록 하는 독창적인 form reset layer를 추가합니다.
npm install -D @tailwindcss/forms 설치후 tailwind.config.ts 파일에 
 plugins:[require("@tailwindcss/forms")], 이렇게 추가해주면됨

  Screens 크기별 
 <div className="flex flex-col mx-auto sm:w-2/3 md:w-3/5 lg:w-1/2 xl:w-2/5">
  https://tailwindcss.com/docs/screens 

  // appearance-none 기본 스타일을 리셋

  ※ Front page 설명

  map(_,i)에서 _는 무시되는 매개변수를 나타내는데 사용되며, 해당 값이 필요하지 않을 때 사용할 수 있습니다.
  
      <div>
        {[...Array(10)].map((_, i) => (
          <div key={i}>dandy</div>
        ))}
      </div> 
  니코샘의 map을 이렇게도 바꿀수가 있다

  Heroicons 아이콘
  Tailwind CSS로부터 만들어진 손으로 만든 아름다운 SVG 아이콘
  https://heroicons.com/ 여기에 들어가서 클릭만하면 복사가된다 react에서 하려면 jsx복사 하면 될거같다
  (stroke-linejoin 이렇게 되어있으면 react에서는 strokeLinejoin이렇게 고쳐줘야한다) 

  `}
      </pre>
    </div>
  );
}
