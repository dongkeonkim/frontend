export default function Home() {
  // TODO:
  // 1. 테이블 길이 조절
  // 2. Auto 풀고 화면비에 맞춰서 제한

  return (
    <div class="m-3 h-screen">
      <div class="flex justify-center">
        <div class="relative overflow-x-auto">
          <div class="flex flex-row-reverse my-1">
            <button
              type="button"
              class="text-white bg-blue-700 font-medium text-sm px-4 py-1 ml-1"
            >
              글쓰기
            </button>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm">
              <option selected>20개</option>
              <option value="US">50개</option>
              <option value="CA">100개</option>
              <option value="FR">500개</option>
            </select>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-200">
              <tr>
                <th scope="col" class="px-10 py-3">
                  번호
                </th>
                <th scope="col" class="px-10 py-3">
                  제목
                </th>
                <th scope="col" class="px-10 py-3">
                  작성자
                </th>
                <th scope="col" class="px-10 py-3">
                  등록일
                </th>
                <th scope="col" class="px-10 py-3">
                  조회수
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>

                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>

                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
              <tr class="bg-white border-b">
                <td class="px-10 py-4">1</td>
                <td class="px-10 py-4">제목 예시</td>
                <td class="px-10 py-4">작성자 예시</td>
                <td class="px-10 py-4">등록일 예시</td>
                <td class="px-10 py-4">1000000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
