import HeaderAdmin from "../component/header";
import SidebarAdmin from "../component/sidebar";
import Blank from "../component/blank";


const AddNewsPage = {
    render() {
        // language=HTML
        return `
         ${HeaderAdmin.render()}
         <div class="h-screen flex flex-row flex-wrap">
             ${SidebarAdmin.render()}
             ${Blank.render()}
             <form action="" id="post-add-form">
                 <div class="input-box">
                     <label for="post-title" class="" >Post title</label>
                     <input type="text" id="post-title" class="border border-black border-[1px]" placeholder="">
                 </div>
                 <div class="input-box">
                     <label for="post-img" class="" >Post Img</label>
                     <input type="text" id="post-img" class="border border-black border-[1px]" placeholder="">
                 </div>
                 <div class="input-box">
                     <label for="post-desc" class="" >Post description</label>
                     <textarea name="" id="post-desc" cols="30" rows="10"></textarea>
                 </div>
                 <button type="submit">Add post</button>
             </form>
         </div>
        `
    },
    afterRender() {
        const formAdd = document.querySelector('#post-add-form');
        const imgPost = document.querySelector("#img-post");

        imgPost.addEventListener("change", (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "ml_default");

            axios({
                url: "https://res.cloudinary.com/ecma-assignment/image/upload",
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-formendcoded",
                },
                data: formData,
            }).then((res) => {
                formAdd.addEventListener("submit", (e) => {
                    e.preventDefault();
                    add({
                        title: document.querySelector("#post-title").value,
                        img: res.data.secure_url,
                        desc: document.querySelector("#post-desc").value,
                    })
                        .then((result) => console.log(result.data))
                        .catch((error) => console.log(error));
                });
            });
        });
    },
}
export default AddNewsPage;