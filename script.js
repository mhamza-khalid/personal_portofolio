

const underline = document.querySelectorAll('.link');
const windowPathName = window.location.pathname;


underline.forEach(link => {
    console.log(windowPathName);
    console.log(underline);
    if (link.href.includes(windowPathName)){
        link.classList.add('active');
    }
});