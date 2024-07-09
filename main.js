const projs = document.querySelectorAll('[data-id]');
const previews = document.querySelectorAll('[data-content]');
let id = 0;

projs.forEach(function (proj) {
    proj.addEventListener('mouseover', function () {
        projs[id].classList.remove('active');
        proj.classList.add('active');
        id = proj.getAttribute('data-id');
        
        const currentShow = document.querySelector('.preview.show');
        if (currentShow) {
            currentShow.classList.remove('show');
            currentShow.classList.add('hide');
        }
        
        const newShow = document.querySelector(`.preview[data-content="${id}"]`);
        if (newShow) {
            newShow.classList.remove('hide');
            newShow.classList.add('show');
        }
    });
});