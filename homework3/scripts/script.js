document.addEventListener('DOMContentLoaded', () => {

    // generate boxes
    document.querySelector('#generate').onclick = () => {
        createDiv();
    }

    // clear boxes
    document.querySelector('#clear').onclick = () => {
        
    }
});

function createDiv() {
    const div = document.createElement('div');
    document.querySelector('main').appendChild(div);
}