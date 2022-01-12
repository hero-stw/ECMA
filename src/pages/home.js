import ArticleList from "../component/article";
import Foot from "../component/footer";
import Heading from "../component/header"
import NavigationBar from "../component/nav"
import SearchBar from "../component/searchbox";

const HomePage = {
    render() {
        return /*html*/`
        <div style ="max-width: 1290px; margin: auto; ">
          ${Heading.render()}
          <div class="navbar flex justify-between align-center bg-amber-500" style="display: flex; justify-content: space-between; align-items: center; background-color: #BF6B04; padding: 0.5rem 1.5rem">
            ${NavigationBar.render()}
            ${SearchBar.render()}
          </div>
          ${ArticleList.render()}
          ${Foot.render()}
        </div>
        
        `
    }
}
export default HomePage;