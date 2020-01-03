window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#burgerknap").addEventListener("click", clickMenu);
}


function clickMenu() {
    console.log("clickMenu");
    document.querySelector("#burgermenu").classList.toggle("hidden");

    if (document.querySelector("#burgerknap").classList.contains("open")) {
        document.querySelector("#burgerknap").classList = "closed";
    } else {
        document.querySelector("#burgerknap").classList = "open";
    }
}
