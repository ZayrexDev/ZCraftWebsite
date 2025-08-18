addEventListener("wheel", (ev) => changePage(ev));
addEventListener("resize", updatePage);
addEventListener("touchstart", (e) => touchStart(e));
addEventListener("touchend", (e) => touchEnd(e));

let index = 1;
const TOTAL_PAGES = 4;
let flag = false;
let startY = '';
let endY = '';

function changePage(e) {
    console.log("swapping", index, e.deltaY, document.body.clientHeight);
    if (flag) {
        return;
    }
    flag = true;
    if (e.deltaY > 0 && index < TOTAL_PAGES) {
        index++;
    } else if (e.deltaY < 0 && index >= 2) {
        index--;
    }
    setTimeout(function () {
        flag = false
    }, 300);
    updatePage();
}

function changePageTo(i) {
    index = i;
    updatePage();
}

function touchStart(e) {
    startY = e.touches[0].screenY;
}

function touchEnd(e) {
    endY = e.changedTouches[0].screenY;
    if (flag) {
        return;
    }
    flag = true;
    if (startY - endY > 0 && index < TOTAL_PAGES) {
        index++;
    } else if (startY - endY < 0 && index >= 2) {
        index--;
    }
    setTimeout(function () {
        flag = false;
    }, 300);
    updatePage();
}

function updatePage() {
    document.querySelector("#navBar").style.top = (index !== 1 ? "0" : "-50px");
    document.querySelector(".container").style.top = -(index - 1) * document.body.clientHeight + 'px';
}