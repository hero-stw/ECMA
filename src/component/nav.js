const NavigationBar = {
    render() {
        return /*html*/ `
          <div class="flex justify-between align-center">
            <ul class="flex" style="display: flex; justify-content: space-between; align-items: center; list-style-type: none; gap: 1rem; color: #fff; font-weight: 700">
                <li>
                    <a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Trang chủ </a>
                </li>
                <li>
                    <a href="/recruit" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Tuyển sinh</a>
                </li>
                <li>
                    <a href="/course" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Chương trình đào tạo</a>
                </li>
                <li>
                    <a href="/student" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Góc sinh viên</a>
                </li>
                <li>
                    <a href="/job" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Tuyển dụng</a>
                </li>
            </ul>
          </div>
        
        `
    }
}
export default NavigationBar;