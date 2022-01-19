import Navigo from "navigo";
import SignIn from "./component/auth/signin";
import DetailNews from "./pages/detail";
import HomePage from "./pages/home";
import SignUp from "./component/auth/signup";
import DashboardPage from "./admin/dashboard";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("app").innerHTML = content;
};

router.on({
    "/": () => {
        print(HomePage.render());
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
        print(DetailNews.render(value.data.id))
    },
    "/signin": (value) => {
        print(SignIn.render());
    },
    "/signup": (value) => {
        print(SignUp.render());
    },
    "/admin": (value) => {
        print(DashboardPage.render());
    },
});
router.resolve();