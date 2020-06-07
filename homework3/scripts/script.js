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
});

function createDiv(num) {

    // creating div (box) template
    const div = `
        <div>Box No. ${num}</div>
    `

    // adding div (box) template to main container
    document.querySelector('main').innerHTML += div;
}