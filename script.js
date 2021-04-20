const gridContainer = document.querySelector('#grid-container');
const clear = document.querySelector('#clear');
const color = document.querySelector('#color');

// default canvas
createCanvas(16);

function createCanvas(size) {
    for(i = 0; i < size*size; i++){
        let grids = [];
        grids = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        grids.classList.add('canvas');
        gridContainer.append(grids);
    };
}


gridContainer.addEventListener('mouseover', e => {
    if(e.target.id !== 'grid-container'){
        e.target.style.backgroundColor = 'red';
    }
});

const canvas = Array.from(document.querySelectorAll('.canvas'));

clear.addEventListener('click', () => {
    canvas.forEach(e => {
        e.style.backgroundColor = 'rgb(212, 212, 212)';
    });
    
})
