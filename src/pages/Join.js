export default function Join() {
  const width = "w-full";

  return (
    <div class="w-screen h-screen flex justify-center items-center bg-gray-50">
      <div class="flex flex-col justify-center items-center w-1/3 h-1/2">
        <div class={`${width}`}>
          <input
            type="email"
            placeholder="이메일"
            class={`border ${width} h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5`}
          />
        </div>
        <div class={`${width}`}>
          <input
            type="password"
            placeholder="비밀번호"
            class={`border ${width} h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5`}
          />
        </div>
        <div class={`${width}`}>
          <input
            type="password"
            placeholder="비밀번호 확인"
            class={`border ${width} h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5`}
          />
        </div>
        <div class={`${width}`}>
          <input
            type="text"
            placeholder="닉네임"
            class={`border ${width} h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5`}
          />
        </div>
        <div class={`my-1 h-10  ${width}`}>
          <button
            class={`${width} text-white bg-blue-700 font-medium text-lg w-full h-full rounded-lg`}
          >
            회원가입
          </button>
        </div>
        <div class={`my-1 ${width} flex justify-center`}>
          <label class="text-sm mx-1">이미 아이디가 있으신가요?</label>
          <button class="text-sm mx-1">로그인</button>
        </div>
      </div>
    </div>
  );
}
