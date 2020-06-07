document.addEventListener('DOMContentLoaded', () => {

    // Generate boxes
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

    // Clear boxes
    document.querySelector('#clear').onclick = () => clear();

    // Slider values
    document.querySelectorAll('.slider').forEach(slider => {

        // Initialize slider values
        slider.parentNode.querySelector('span').innerHTML = slider.value;

        // Update slider values
        slider.oninput = () => {
            slider.parentNode.querySelector('span').innerHTML = slider.value;
        }
    });
});

// Creates a Div's (Boxes)
function createDiv(i, fizz, buzz) {

    let typeClass = '', typeName = '';

    // determine type
    if (i % fizz === 0 && i % buzz === 0) {
        typeClass = ' fizzbuzz', typeName = ' - FizzBuzz' // FizzBuzz
    } else if (i % fizz === 0) {
        typeClass = ' fizz', typeName = ' - Fizz' // Fizz
    } else if (i % buzz === 0) {
        typeClass = ' buzz', typeName = ' - Buzz' // Buzz
    }

    // creating div (box) template
    const div = `
        <div id="box${i}" class="box${typeClass}">${i}${typeName}</div>
    `

    // adding div (box) template to main container
    document.querySelector('main').innerHTML += div;
}

// Clears all existing Div's (Boxes)
function clear() {
    const main = document.querySelector('main')

    // loop through all Main child elements and remove() them
    while (main.firstChild) {
        main.firstChild.remove();
    }
}