// DropDown Normal
const dropLI = document.querySelector('nav ul:nth-child(2)');

dropLI.onclick = function () {
    dropLI.classList.toggle('drop');
    console.log("Dropdown Active")
}
// navigation Responsive
const toggle = document.querySelector('nav .toggle i');
const menu = document.querySelector('nav .menu-top');

toggle.onclick = function () {
    menu.classList.toggle('active');
    menuDrop.classList.remove('active');
    console.log("Navbar Responsive Active")
}
// DropDown Responsive
const drop = document.querySelector('.menu-top ul li.drop');
const menuDrop = document.querySelector('.menu-top ul ul');

drop.onclick = function () {
    menuDrop.classList.toggle('active');
    console.log("Dropdown Responsive Active");
}

function send() {
    alert("Thank you, your order being prepared")
}

// animate

const nav = document.querySelector('nav');
const links = Array.from(document.querySelectorAll('.link'));
const link = document.querySelector('.link');


function animate() {

    setTimeout(() => {
        nav.classList.add('nav-after');
    }, 2000);

    links.forEach((link, idx) => {
        setTimeout(() => {
            link.classList.add('link-after');
        }, (idx * 200) + 2500)

    });
}
animate();