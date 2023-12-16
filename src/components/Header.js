import React from "react";

export default function Header() {
  return (
    <div class="flex justify-between items-center bg-neutral-700 text-white h-10">
      <div className="flex justify-center">
        <label class="ml-20 text-xs	font-light">내 숙제</label>
        <label class="ml-20 text-xs	font-light">남의 숙제</label>
      </div>
      <div className="flex justify-center">
        <label class="mr-20 text-xs	font-light">로그인</label>
      </div>
    </div>
  );
}
