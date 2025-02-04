const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click',function()  {
        const elementData = accordion.lastElementChild;
        const icon = accordion.querySelector('i');

        if(elementData.classList.contains('show')){
            elementData.classList.remove('show');
            icon.classList.remove('animate');
        }else{
            elementData.classList.add('show');
            icon.classList.add('animate');
            accordions.forEach((otherAccordion) => {
                const secondElementData = otherAccordion.lastElementChild;
                const secondIcon = otherAccordion.querySelector('i');
                if(elementData != secondElementData){
                    secondElementData.classList.remove('show');
                    secondIcon.classList.remove('animate');
                }
            });
        }
    });
});