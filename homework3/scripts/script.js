document.addEventListener('DOMContentLoaded', () => {

    // generate boxes
    document.querySelector('#generate').onclick = () => {
        const minCount = document.querySelector('#min').value;
        const maxCount = document.querySelector('#max').value;

        // generate minCount to maxCount amount of div's (boxes)
        for (i = minCount; i <= maxCount; i++) {
            createDiv(i);
        }
    }

    // clear boxes
    document.querySelector('#clear').onclick = () => {
        const main = document.querySelector('main')

        // loop through all Main child elements and remove() them
        while (main.firstChild) {
            main.firstChild.remove();
        }
    }

    // update slider values
    document.querySelectorAll('.slider').forEach(slider => {
        slider.oninput = () => {
            slider.parentNode.querySelector('span').innerHTML = slider.value;
        }
    });
});

function createDiv(num) {

    let typeClass = '', typeName = '';

    // determine type
    if (num % 3 === 0 && num % 5 === 0) {
        // FizzBuzz
        typeClass = 'fizzbuzz'
        typeName = ' - FizzBuzz'
    } else if (num % 3 === 0) {
        // Fizz
        typeClass = 'fizz'
        typeName = ' - Fizz'
    } else if (num % 5 === 0) {
        // Buzz
        typeClass = 'buzz'
        typeName = ' - Buzz'
    }

    // creating div (box) template
    const div = `
        <div id="box${num}" class="box${typeClass}">${num}${typeName}</div>
    `

    // adding div (box) template to main container
    document.querySelector('main').innerHTML += div;
}