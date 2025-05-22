document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
});

cookieMassage = () => {
    setTimeout(() => {
        document.querySelector("#cookies").style.display = "block";
    }, 0);
};

window.addEventListener("load", cookieMassage);