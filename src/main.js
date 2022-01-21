import Navigo from "navigo";
import SignIn from "./component/auth/signin";
import DetailNews from "./pages/detail";
import HomePage from "./pages/home";
import SignUp from "./component/auth/signup";
import DashboardPage from "./admin/dashboard";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/recruit": () => {
        print("Tuyen Sinh");
    },
    "/course": () => {
        print("Chuong trinh dao tao");
    },
    "/student": () => {
        print("Goc sinh vien");
    },
    "/job": () => {
        print("Tuyen dung");
    },
    "/news/:id": (value) => {
        print(DetailNews,value.data.id);
    },
    "/signin": () => {
        print(SignIn);
    },
    "/signup": () => {
        print(SignUp);
    },
    "/admin": () => {
        print(DashboardPage);
    },

});
router.resolve();