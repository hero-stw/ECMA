const SearchBar = {
  render() {
    return /*html*/ `
         <div style="display: flex; justify-content: space-between; align-items: center; gap: 10px;">
           <input type="text" placeholder="Tìm kiếm" style="height: 30px; outline: none; border-radius: 5px; border: 1px solid #ccc;padding : 0 1.5rem">
           <button type="button" style="height: 30px; outline: none; border-radius: 5px; border: 1px solid #ccc;">Tìm kiếm</button>
         </div>
        `;
  },
};
export default SearchBar;
