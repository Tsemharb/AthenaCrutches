function paintPopup(){
    document.querySelector("#success-status").classList.remove("hidden");
    document.body.style.backgroundColor = "rgba(0, 255, 0, 0.2)";
    document.body.style.borderColor = "rgba(0, 255, 0, 0.5)";
}

browser.tabs
    .executeScript({ file: "/content_scripts/get_token.js" })
    .then(paintPopup);
