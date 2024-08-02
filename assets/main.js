

// document.querySelector('nav').addEventListener('mouseover', function(event) {
//     if(event.target.tagName === 'A') {
//         event.target.parentNode.classList.add('nav-active');
//     }
// });

// document.querySelector('nav').addEventListener('mouseout', function(event) {
//     if(event.target.tagName === 'A') {
//         event.target.parentNode.classList.remove('nav-active');
//     }
// });


/**
 * Loads facts
 * 
 * @param {string} file - The facts file to load
 */
function getFactsJson(file) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState);
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('aer');
            const facts = JSON.parse(xhr.responseText);
            showRandomFact(facts);
        }
    }
    xhr.open('GET', `../data/${file}.json`);
    xhr.send();
}

function showRandomFact(facts) {
    const fact = facts[Math.floor(Math.random() * facts.length)].fact;
    document.querySelector('#facts').textContent = fact;
}

const navFacts = document.querySelector('#navHtml');
navFacts.addEventListener('click', function(event) {
    const facts = getFactsJson('html');
});