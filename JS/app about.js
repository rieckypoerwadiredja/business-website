const titlesection = document.querySelector('.title-page');
window.addEventListener("scroll", function () {

    // cari posisi buat sumbu Y
    const {
        scrollTop,
        clientHeight
    } = document.documentElement;
    // console.log(scrollTop, clientHeight);

    const ceoSection = document.querySelector('.ceo-container');
    const topCS = ceoSection.getBoundingClientRect().top;
    if (scrollTop > (scrollTop + topCS).toFixed() - clientHeight * 0.5) {
        const fontCeoCS = ceoSection.querySelectorAll('.font-ceo');
        fontCeoCS.forEach((fceo) => {
            setTimeout(() => {
                fceo.classList.add('font-ceo-ani');
            });
        });

        const imgBoxCS = ceoSection.querySelector('.box-ceo');
        imgBoxCS.classList.add('img-box-ani');
    }

    const topMainSection = titlesection.getBoundingClientRect().top;
    if (scrollTop > (scrollTop + topMainSection).toFixed() - clientHeight * 0.5) {
        const imgHeroMS = titlesection.querySelector('img');
        imgHeroMS.classList.add("imgHeroMS-animation");

        const font = titlesection.querySelector('.font');
        font.classList.add("font-ani");

        const card = titlesection.querySelector('.card-row');
        card.classList.add('card-row-ani');

        const arrows = titlesection.querySelectorAll('.arrow-btn');
        arrows.forEach((arrow) => {
            setTimeout(() => {
                arrow.classList.add('arrow-btn-ani');
            });
        });

        const textBg = titlesection.querySelector('.text-bg');
        textBg.classList.add('text-bg-ani');
    }

    const portofolioSection = document.querySelector('.portofolio-container');
    const topPS = portofolioSection.getBoundingClientRect().top;
    if (scrollTop > (scrollTop + topPS).toFixed() - clientHeight * 0.3) {
        const imgBoxPS = portofolioSection.querySelectorAll('.img-porto');
        imgBoxPS.forEach((portof, idx) => {
            setTimeout(() => {
                portof.classList.add('img-porto-ani');
            }, (idx * 300) + 100);
        });

        const fontPS = portofolioSection.querySelectorAll('.font-porto');
        fontPS.forEach((fontP, idx) => {
            setTimeout(() => {
                fontP.classList.add('font-porto-ani');
            }, (idx * 100) + 200);
        });
    }
    // cari posisi sumbu Y untuk element
    // untuk section history
    const historySection = document.querySelector('.history-container');
    const topHS = historySection.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topHS).toFixed() - clientHeight * 0.5) {
        // history section
        const bgHS = historySection.querySelector('.background-left');
        bgHS.classList.add('toLeft');

        const overlayHS = historySection.querySelector('.overlay-left');
        overlayHS.classList.add("overlay-left-ani");

        const imgHS = historySection.querySelector('.left-history .img-box img');
        imgHS.classList.add('img-ani');

        const imgBef = historySection.querySelector('.left-history .img-box::before');
        imgHS.classList.add('img-ania')

        const descHS = historySection.querySelectorAll('.desc-history');
        descHS.forEach((desc, idx) => {
            setTimeout(() => {
                desc.classList.add('desc-history-ani');
            }, (idx * 100) + 100)

        });
    }

    const appSection = document.querySelector('.aplication-container');
    const topAS = appSection.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topAS).toFixed() - clientHeight * 0.5) {
        // judul app
        const judulApp = appSection.querySelector('.judul-aplication');
        judulApp.classList.add('judul-app-ani');

        // deskripsi app
        const desc = appSection.querySelectorAll('.list-desc');
        desc.forEach((desc, idx) => {
            setTimeout(() => {
                desc.classList.add('list-desc-ani');
            }, (idx * 100) + 100)
        })

        // img app
        const imgApp = appSection.querySelectorAll('.img-app');
        imgApp.forEach((img, idx) => {
            setTimeout(() => {
                img.classList.add('img-app-ani')
            }, (idx * 100) + 100)
        });
    }

    const testimoniSection = document.querySelector('.testimoni-container')
    const topTS = testimoniSection.getBoundingClientRect().top;

    if (scrollTop > (scrollTop + topTS).toFixed() - clientHeight * 0.5) {
        // img CEO
        const imgCons = testimoniSection.querySelector('.img-testi');
        imgCons.classList.add("active");

        // text testi
        const contentText = testimoniSection.querySelector('.content-text');
        contentText.classList.add('active');

        // title logo
        const parnerLogo = testimoniSection.querySelector('.partner-title');
        parnerLogo.classList.add('active');
        // title logo
        const parner = testimoniSection.querySelectorAll('.partner');
        parner.forEach((e) => {
            e.classList.add('active');
        })
    }
});