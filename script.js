const gridContainer = document.querySelector('#grid-container');
const clear = document.querySelector('#clear');
const color = document.querySelector('#color');

let grids = [];

for(i = 0; i < 256; i++){
    grids = document.createElement('div');
    grids.classList.add('canvas');
    gridContainer.append(grids);
};

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
