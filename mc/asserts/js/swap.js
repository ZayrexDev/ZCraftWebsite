window.addEventListener("scroll", onScroll);

function onScroll() {
    const element = document.querySelector(".nav");
    if (scrollY >= window.innerHeight - 50) {
        element.setAttribute('style', 'background: #139ED6;');
    } else {
        element.setAttribute('style', 'background: transparent;');
    }
}

swapInterval = setInterval("swapImg()", 8000);
imgIndex = 0;
elIndex = 1;
pics = [
    {
        "url": "asserts/img/screenshots/img1.png", "author": "Zayre_X"
    },
    {
        "url": "asserts/img/screenshots/img2.png", "author": "Zayre_X"
    },
    {
        "url": "asserts/img/screenshots/img3.png", "author": "Zayre_X"
    },
    {
        "url": "asserts/img/screenshots/img4.png", "author": "Zayre_X"
    },
    {
        "url": "asserts/img/screenshots/img5.png", "author": "Zhzjy"
    },
    {
        "url": "asserts/img/screenshots/img6.png", "author": "Zhzjy"
    },
    {
        "url": "asserts/img/screenshots/img7.jpg", "author": "Zhzjy"
    },
    {
        "url": "asserts/img/screenshots/img8.jpg", "author": "Zhzjy"
    },
    {
        "url": "asserts/img/screenshots/img9.jpg", "author": "Zhzjy"
    },
    {
        "url": "asserts/img/screenshots/img10.jpg", "author": "Zhzjy"
    },
    {
        "url": "asserts/img/screenshots/img11.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img12.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img13.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img14.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img15.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img16.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img17.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img18.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img19.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img20.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img21.png", "author": "MeantCake504042"
    },
    {
        "url": "asserts/img/screenshots/img22.png", "author": "MeantCake504042"
    }
];

function swapImg() {
    clearInterval(window.swapInterval);
    let img1 = document.querySelector('#img' + window.elIndex);
    let pe1 = document.querySelector('#pe' + window.elIndex);
    if (window.elIndex > 1) window.elIndex = 1; else window.elIndex = window.elIndex + 1;
    let img2 = document.querySelector('#img' + window.elIndex);
    let pe2 = document.querySelector('#pe' + window.elIndex);
    img1.setAttribute('style', "z-index: 1; opacity: 1; background-image: url('" + window.pics[window.imgIndex].url + "');");
    pe1.setAttribute('style', "z-index: 666; opacity: 0; animation-name: fadeOut;");
    let temp;
    do {
        temp = Math.floor((Math.random() * window.pics.length));
    } while (temp === window.imgIndex);
    window.imgIndex = temp;
    pe2.innerHTML = window.pics[window.imgIndex].author;
    img2.setAttribute('style', "z-index: 4; animation-name: fadeIn; opacity: 1; background-image: url('" + window.pics[window.imgIndex].url + "');");
    pe2.setAttribute('style', "z-index: 666; opacity: 1; animation-name: fadeIn;");
    replayCountdown();
    window.swapInterval = setInterval("swapImg()", 8000);
}

function replayCountdown() {
    document.querySelector(".countDown").className = "countDown";
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            document.querySelector(".countDown").className = "countDown changing";
        });
    });
}

function copyIP() {
    navigator.clipboard.writeText('zcraft.xyz').then(() => {
        document.querySelector('#hint').setAttribute('style', 'opacity: 1;');
        document.querySelector('#popup').setAttribute('style', 'opacity: 0;');
    });
}
