import Navigo from "navigo";
import HomePage from "./pages/home";

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
});
router.resolve();