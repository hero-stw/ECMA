const DetailNews = {
    render(id) {
        return fetch(`https://61e7a8b3e32cd90017acbbe6.mockapi.io/posts/${id}`)
            .then((response) => response.json())
            .then((data) => `
                <h1>${data.title}</h1>
                <img src="${data.img}" alt=""/>    
                <p>${data.desc}</p>
            `)
            .catch((error) => {
                console.log("Lỗi kết nối: "+ error);
            })
            ;

        // const result = data.find((post) => post.id === id);
    },
}
export default DetailNews;