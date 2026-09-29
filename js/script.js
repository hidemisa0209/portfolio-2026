




// ローディング + works(sub)のpage2以降の動き
window.addEventListener("load", () => {
    const body = document.body;
    const loading = document.querySelector(".loading");

    // page2以降
    if (
        body.classList.contains("page2") ||
        body.classList.contains("page3")
    ) 
    
    {
        // 一瞬だけページ最下部へ
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "instant"
        });

        // すぐTOPへ
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 0);
        return;
    }

    // 通常ページ
    if (loading) {
        setTimeout(() => {
            loading.classList.add("hide");
        }, 1000);
    }
});





// COMPONENT - ハンバーガー
document.addEventListener("DOMContentLoaded", () => {

    const hamburgerBtn = document.querySelector(".m-hamburger");
    const hamburgerMenu = document.querySelector("#hamburger-menu");

    const closeMenu = () => {
        hamburgerBtn.classList.remove("active");
        hamburgerMenu.classList.remove("active");
    };

    // 開閉
    hamburgerBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        hamburgerBtn.classList.toggle("active");
        hamburgerMenu.classList.toggle("active");
    });

    // メニュー内 - リンクを押したら閉じる!
    hamburgerMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    // メニュー内 - どこをクリックしても閉じる!
    hamburgerMenu.addEventListener("click", function () {
        closeMenu();
    });
});





// TOP - topボタン
const topBtn = document.querySelector("#top-btn");

if (topBtn) {

    // ボタンクリックで上へ
    topBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // スクロールで表示
    window.addEventListener("scroll", function () {
        if (window.scrollY > 1200) {
            topBtn.classList.add("is-show");
        } else {
            topBtn.classList.remove("is-show");
        }
    });

}





// TOP - works無限スクロール
function horizontalLoop(selector, reverse = false, speed = 50) {
    const slider = document.querySelector(selector);
    if (!slider) return;

    slider.innerHTML += slider.innerHTML;
    const loopWidth = slider.scrollWidth / 2;

    gsap.fromTo(
        slider,
        { x: reverse ? -loopWidth : 0 },
        {
            x: reverse ? 0 : -loopWidth,
            duration: speed,
            ease: "none",
            repeat: -1
        }
    );
}

// 1列目（右 → 左）
horizontalLoop("#mw-colum01", false, 50);

// 2列目（左 → 右）
horizontalLoop("#mw-colum02", true, 50);





// WORKS SUB - 制作詳細スクロール
document.addEventListener("DOMContentLoaded", () => {

    const track = document.querySelector(".wsp-list");
    const slides = document.querySelectorAll(".wsp-item");
    const progress = document.querySelector(".wsp-progress");
    const fill = document.querySelector(".wsp-progress-fill");
    const prev = document.querySelector("#wsp-back");
    const next = document.querySelector("#wsp-next");

    // 要素が存在しなければ終了
    if (!track || slides.length === 0) return;
    let current = 0;
    function updateSlider() {
        // スライド移動
        track.style.transform = `translateX(-${current * 100}%)`;
        // バー更新
        fill.style.width = `${((current + 1) / slides.length) * 100}%`;
    }

    // 次へ
    next.addEventListener("click", () => {
        if (current < slides.length - 1) {
            current++;
        } else {
            current = 0; // 最後なら最初へ
        }
        updateSlider();
    });

    // 前へ
    prev.addEventListener("click", () => {
        if (current > 0) {
            current--;
        } else {
            current = slides.length - 1; // 最初なら最後へ
        }
        updateSlider();
    });

    // バークリック
    progress.addEventListener("click", (e) => {
        const rect = progress.getBoundingClientRect();
        const x = e.clientX - rect.left;
        current = Math.floor((x / rect.width) * slides.length);
        if (current >= slides.length) {
            current = slides.length - 1;
        }
        updateSlider();
    });

    // 初期表示
    updateSlider();
});





// スクロールリビール
ScrollReveal().reveal(
    '#stk-contents h2, #main-about h2, #main-contact h2, .ma-pic, .ma-txt, .mf-logo',
    {
        reset: false,      // その場でふわっとするタイプ - TOP/COMPONENT
        duration: 800,
        distance: '0px',
        easing: 'ease-out',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '.cmp-btn, .cmp-backbtn, .mc-title, .mc-txt',
    {
        reset: false,      // 下から出てくるタイプ - TOP/COMPONENT
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'bottom',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '#mw-colum01',
    {
        reset: false,      // 右から出てくるタイプ - TOP/COMPONENT
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'right',
        interval: 16,
        opacity: 0
    }
);


ScrollReveal().reveal(
    '#mw-colum02',
    {
        reset: false,      // 左から出てくるタイプ - TOP/COMPONENT
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'left',
        interval: 16,
        opacity: 0
    }
);


ScrollReveal().reveal(
    '#about h1, .about-mainpic,  #about h2, #about-design img, #about-career p',
    {
        reset: false,      // その場でふわっとするタイプ - ABOUT
        duration: 1000,
        distance: '0px',
        easing: 'ease-out',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '.ad-txt-main p, .ad-txt-sub, .as-list li, .al-pic, .al-txt p, .al-txt span, #about-career span',
    {
        reset: false,      // 下から出てくるタイプ - ABOUT
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'bottom',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '.a-list',
    {
        reset: false,      // 右から出てくるタイプ - ABOUT
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'right',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '.a-txt-wrapper',
    {
        reset: false,      // 左から出てくるタイプ - ABOUT
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'left',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '.wa-item',
    {
        reset: false,      // 下から出てくるタイプ - WORKS ALL
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'bottom',
        interval: 16,
        opacity: 0
    }
);


ScrollReveal().reveal(
    '.wa-empty',
    {
        reset: false,      // その場でふわっとするタイプ - WORKS ALL
        duration: 800,
        distance: '0px',
        easing: 'ease-out',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '#works-sub h1, #ws-mainpic img, .ws-info span',
    {
        reset: false,      // その場でふわっとするタイプ - WORKS SUB
        duration: 800,
        distance: '0px',
        easing: 'ease-out',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '.wsp-slider',
    {
        reset: false,      // 下から出てくるタイプ - WORKS SUB
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'bottom',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '#wsn-nextbtn',
    {
        reset: false,      // 右から出てくるタイプ - WORKS SUB
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'right',
        opacity: 0
    }
);


ScrollReveal().reveal(
    '#wsn-backbtn',
    {
        reset: false,      // 左から出てくるタイプ - WORKS SUB
        duration: 600,
        distance: '20px',
        easing: 'ease-out',
        origin: 'left',
        opacity: 0
    }
);