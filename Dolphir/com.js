const header  = document.querySelector("header")

Window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onelick = () => {
    menu.classList.toggle('br-x')
    navmenu.classList.toggle('open');
}