(function(){
    const toggle = (elem) => document.querySelector(elem);

    toggle('.mobile-menu').addEventListener('click', () =>{
        toggle('header').classList.toggle('active');
    })
    const closeBtn = document.querySelector('.modal .close-btn');
    closeBtn.addEventListener('click',function(){
        document.querySelector('.modal').style.display = 'none';
    })
})();
