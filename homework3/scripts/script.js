document.addEventListener('DOMContentLoaded', () => {

    // generate boxes
    document.querySelector('#generate').onclick = () => {
        const minCount = document.querySelector('#min').value;
        const maxCount = document.querySelector('#max').value;

        for (i = minCount; i < maxCount; i++) {
            createDiv();
        }
    }

    // clear boxes
    document.querySelector('#clear').onclick = () => {
        
    }
});

function createDiv() {
    const div = document.createElement('div');
    document.querySelector('main').appendChild(div);
}