const descApp = document.querySelectorAll('.list-desc');

descApp.forEach((e) => {
    e.addEventListener("click", (e) => {
        if (e.target.id === 'desc-click') {
            descApp.forEach((e) => {
                e.classList.remove("active");
            });

            e.target.parentElement.classList.add('active');

        }
    });

});