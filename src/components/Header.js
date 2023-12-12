import React from "react";

console.log("잔디 테스트");

export default function Header() {
  return (
    <div class="flex justify-between items-center bg-neutral-700 text-white h-10">
      <label class="ml-20 text-xs	font-light">Home</label>
      <label class="mr-20 text-xs	font-light">로그인</label>
    </div>
  );
}
