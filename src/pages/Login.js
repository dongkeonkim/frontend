import { useEffect } from "react";
import { useState } from "react";

export default function Login() {
  const width = "w-full";

  return (
    <div class="w-screen h-screen flex justify-center items-center bg-gray-50">
      <div class="flex flex-col justify-center items-center w-1/3 h-1/2 ">
        <input
          type="text"
          class={`border ${width} h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5`}
          placeholder="아이디"
        />
        <input
          type="password"
          class={`border ${width} h-10 my-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5`}
          placeholder="비밀번호"
        />
        <div class={`my-1 ${width} flex justify-start`}>
          <input type="checkbox" class="mr-2" />
          <label class="text-sm">자동 로그인</label>
        </div>
        <div class={`my-1 ${width} h-10 bg-pink-100`}>
          <button class="text-white bg-blue-700 font-medium text-lg w-full h-full rounded-lg">
            로그인
          </button>
        </div>
        <div class={`flex justify-between ${width} my-1`}>
          <div class="text-sm">
            <label>아이디</label>
            <label>/</label>
            <label>비밀번호 찾기</label>
          </div>
          <div class="text-sm">
            <label>회원가입</label>
          </div>
        </div>
      </div>
    </div>
  );
}
