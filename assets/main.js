

document.querySelector('nav').addEventListener('mouseover', function(event) {
    if(event.target.tagName === 'A') {
        event.target.parentNode.classList.add('nav-active');
    }
});

document.querySelector('nav').addEventListener('mouseout', function(event) {
    if(event.target.tagName === 'A') {
        event.target.parentNode.classList.remove('nav-active');
    }
});