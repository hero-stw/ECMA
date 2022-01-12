import data from "../data";
const ArticleList = {
    render() {
        return /*html*/ `
        <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4" style="margin: 1rem">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; grid-wrap: wrap; margin-bottom: 2rem;">
            ${data.map((item) => `
                <div class="border p-4" style="border: 1px solid #ccc; padding-bottom: 1.5rem">
                    <a href="">
                        <img src="${item.img}" alt="" style="width: 100%"/>
                    </a>
                    <h3 class="my-3" style="margin-top: 1rem;" ><a href="" class="font-semibold text-lg text-orange-500" style="color: #BF6B04;">${item.title}</a></h3>                    
                    <p style="font-size: 0.8rem">${item.desc}</p>
                </div>
            `).join("")}
            
        </div>
        <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4" style="margin: 1rem">Hoạt động sinh viên</h2>
        <div class="grid grid-cols-3 gap-8" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.5rem; grid-wrap: wrap; margin-bottom: 2rem;">
            ${data.map((item) => `
                <div class="border p-4" style="border: 1px solid #ccc;padding-bottom: 1.5rem">
                    <a href="">
                        <img src="${item.img}" alt="" style="width: 100%"/>
                    </a>
                    <h3 class="my-3" style="margin-top: 1rem;"><a href="" class="font-semibold text-lg text-orange-500" style="color: #BF6B04;">${item.title}</a></h3>                    
                    <p style="font-size: 0.8rem">${item.desc}</p>
                </div>
            `).join("")}
            
        </div>
        `
    }
}
export default ArticleList;