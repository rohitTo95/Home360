const hamberger = document.querySelector(".responsive_nav .hamberger");
const mid_line = document.querySelector(".responsive_nav .hamberger span:nth-last-child(3)");

hamberger.addEventListener("click", () => {
    if (!hamberger.classList.contains("opened")) {
        document.querySelectorAll(".responsive_nav .hamberger span").forEach((e) => {
            e.style.opacity = "1";
            e.style.transform = "rotate(45deg) translate(-3px, -18px)";
            e.style.background = "#232323";
        });

        mid_line.style.opacity = "0";
        mid_line.style.transform = "rotate(0deg) scale(0.2, 0.2)";

        document.querySelector(".responsive_nav .hamberger span:nth-last-child(2)").style.transform = "rotate(-45deg) translate(0, 17px)";

        document.querySelector("#menu").style.left = "calc(158vw - 50vw)";
        hamberger.classList.add("opened");
    } else {
        document.querySelector(".responsive_nav .hamberger span:nth-last-child(2)").style.transform = "rotate(0deg)";
        mid_line.style = "opacity: 100%; transform: rotate(0deg);";
        document.querySelector(".responsive_nav .hamberger span:nth-last-child(1)").style.transform = "rotate(0deg)";
        document.querySelector("#menu").style.left = "-100%";
        hamberger.classList.remove("opened");
        document.querySelector("#menu").style.left = "158vw";
    }
});
