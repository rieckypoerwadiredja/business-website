const control = document.querySelectorAll('.control');

control.forEach((e) => {
    e.addEventListener("click", (el) => {
        if (el.target.id === 'control') {
            control.forEach((es) => {
                es.classList.remove('active');
            });

            e.classList.add('active');
        }
    });
});

function changeDesc(img, nama, usaha) {
    // remove animation class img ceo
    const imgCons = document.querySelector('.img-testi');
    imgCons.classList.remove("active");

    // ganti source gambar ceo
    const imgTesti = document.getElementById('img-testi');
    imgTesti.setAttribute("src", `./img/testi/${img}.png`);

    // setelah 0.1 detik kasih lagi transisinya
    setTimeout(() => {
        imgCons.classList.add("active");
    }, 100);

    // tulisannya

    const contentTesti = document.querySelector('.content-text');
    contentTesti.classList.remove('active');

    setTimeout(() => {
        contentTesti.children[0].innerHTML = nama;
        contentTesti.classList.add("active");
    }, 100);


}