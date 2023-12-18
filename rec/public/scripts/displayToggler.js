let togglers = document.querySelectorAll('.toggler');

togglers.forEach(toggler =>{
    toggler.addEventListener('click', ()=>{
        let mainDisplay = toggler.nextElementSibling;
        let moreInfo = toggler.nextElementSibling.nextElementSibling;
    
        if (mainDisplay.style.display == 'flex'){
            mainDisplay.style.display = 'none';
            moreInfo.style.display = 'flex';
            mainDisplay.parentElement.style.paddingLeft = '0';
            mainDisplay.parentElement.style.paddingRight = '0';
            mainDisplay.parentElement.style.paddingBottom = '0';
        } else {
            mainDisplay.style.display = 'flex';
            moreInfo.style.display = 'none';
            mainDisplay.parentElement.style.padding = '3%';
        }
    });
});

