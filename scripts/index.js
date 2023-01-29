const nav = document.querySelector('#nav'),
    navBtn = document.querySelector('#nav-button'),
    navBtnImg = document.querySelector('#nav-button-img');

    navBtn.onclick = () => {
        if(nav.classList.toggle('open')) {
            navBtnImg.src='/assets/images/icons/nav-close.svg'
        } else {
            navBtnImg.src='/assets/images/icons/nav-open.svg' 
        }
    }
    AOS.init();