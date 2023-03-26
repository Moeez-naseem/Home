hamburger = document.querySelector('.hamburger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
a = document.querySelector('.a')
b = document.querySelector('.b')
c = document.querySelector('.c')
d = document.querySelector('.d')
e = document.querySelector('.e')
f = document.querySelector('.f')
g = document.querySelector('.g')


hamburger.addEventListener('click', ()=>{
    navlist.classList.toggle('v');
    a.classList.toggle('v');
    b.classList.toggle('v');
    c.classList.toggle('v');
    d.classList.toggle('v');
    e.classList.toggle('v');
    f.classList.toggle('v');
    g.classList.toggle('v');
    navbar.classList.toggle('h');
})