const accordions = document.querySelectorAll('.accordion');


accordions.forEach((accordion) => {
    accordion.addEventListener('click',function()  {
        const elementData = accordion.lastElementChild;
        console.log(elementData);
        elementData.classList.toggle('show');

        const icon = this.querySelector('i');
        icon.classList.toggle('animate');
    });
});