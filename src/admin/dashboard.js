import HeaderAdmin from "./component/header";
import SidebarAdmin from "./component/sidebar";
import Blank from "./component/blank";

const DashboardPage= {
    render() {
        // language=HTML
        return `
         ${HeaderAdmin.render()}
         <div class="h-screen flex flex-row flex-wrap">
             ${SidebarAdmin.render()}
             ${Blank.render()}
         </div>
        `
    }
}
export  default DashboardPage;