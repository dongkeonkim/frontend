export default function Login() {
  return (
    <div class="w-screen h-screen flex justify-center items-center bg-gray-50">
      <div class="flex flex-col justify-center items-center w-1/3 h-1/2 ">
        <input
          type="text"
          class="border w-1/2 h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          placeholder="아이디"
        />
        <input
          type="password"
          class="border w-1/2 h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5"
          placeholder="비밀번호"
        />
        <div class="my-1 w-1/2 flex justify-start">
          <input type="checkbox" class="mr-2" />
          <label>자동 로그인</label>
        </div>
        <div class="my-1 w-1/2 h-10 bg-pink-100">
          <button class="text-white bg-blue-700 font-medium text-lg w-full h-full rounded-lg">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
