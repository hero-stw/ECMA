import axios from 'axios';
const DetailNews = {
   async render(id) {
       const { data } = await axios.get(`https://61e7a8b3e32cd90017acbbe6.mockapi.io/posts/${id}`);
       return `
          <h1>${data.title}</h1>
          <img src="${data.img}" alt=""/>
          <p>${data.desc}</p>
       `
        // return fetch(`https://61e7a8b3e32cd90017acbbe6.mockapi.io/posts/${id}`)
        //     .then((response) => response.json())
        //     .then((data) => `
        //         <h1>${data.title}</h1>
        //         <img src="${data.img}" alt=""/>
        //         <p>${data.desc}</p>
        //     `)
        //     .catch((error) => {
        //         console.log("Lỗi kết nối: "+ error);
        //     })
        //     ;
    },
}
export default DetailNews;