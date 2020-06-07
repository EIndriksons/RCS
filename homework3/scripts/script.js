document.addEventListener('DOMContentLoaded', () => {

    // generate boxes
    document.querySelector('#generate').onclick = () => {

        // check if Main container already contains div's (boxes)
        if (document.querySelector('main').hasChildNodes()) {
            clear(); // if contains => clear
        }

        const minCount = document.querySelector('#min').value;
        const maxCount = document.querySelector('#max').value;

        const fizz = document.querySelector('#fizz input').value;
        const buzz = document.querySelector('#buzz input').value;

        // generate minCount to maxCount amount of div's (boxes)
        for (i = minCount; i <= maxCount; i++) {
            createDiv(i, fizz, buzz);
        }
    }

    // clear boxes
    document.querySelector('#clear').onclick = () => {
        clear();
    }

    // update slider values
    document.querySelectorAll('.slider').forEach(slider => {
        slider.oninput = () => {
            slider.parentNode.querySelector('span').innerHTML = slider.value;
        }
    });
});

function createDiv(i, fizz, buzz) {

    let typeClass = '', typeName = '';

    // determine type
    if (i % fizz === 0 && i % buzz === 0) {
        // FizzBuzz
        typeClass = 'fizzbuzz'
        typeName = ' - FizzBuzz'
    } else if (i % fizz === 0) {
        // Fizz
        typeClass = 'fizz'
        typeName = ' - Fizz'
    } else if (i % buzz === 0) {
        // Buzz
        typeClass = 'buzz'
        typeName = ' - Buzz'
    }

    // creating div (box) template
    const div = `
        <div id="box${i}" class="box${typeClass}">${i}${typeName}</div>
    `

    // adding div (box) template to main container
    document.querySelector('main').innerHTML += div;
}

function clear() {
    const main = document.querySelector('main')

    // loop through all Main child elements and remove() them
    while (main.firstChild) {
        main.firstChild.remove();
    }
}