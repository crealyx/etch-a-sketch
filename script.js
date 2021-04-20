const gridContainer = document.querySelector('#grid-container');
const clear = document.querySelector('#clear');
const color = document.querySelector('#color');
const size = document.querySelector('#size');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('.value');
let defaultSize = 16;
let grids = [];
let colorValue = color.getAttribute('value');

// create default canvas
createCanvas(defaultSize);

// Change canvas size with slider
slider.addEventListener('input', () => {
    let value = slider.value;
    sliderValue.textContent = `Square per side:${value}`;
    gridContainer.textContent = '';
    createCanvas(value);
})


// create canvas by given size
function createCanvas(size) {
    for(i = 0; i < size*size; i++){
        grids = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        grids.classList.add('canvas');
        gridContainer.append(grids);
    };
}

// Paint canvas red
gridContainer.addEventListener('mouseover', e => {
    if(e.target.id !== 'grid-container'){
        
        e.target.style.backgroundColor = `${colorValue}`;
    }
});





// Toggle slider
size.addEventListener('click', () => {
    if(sliderContainer.style.visibility === 'hidden'){
       sliderContainer.style.visibility = 'visible';
    }
    else{
       sliderContainer.style.visibility = 'hidden';
    }
    
});

// Clear canvas to default color
clear.addEventListener('click', () => {
    gridContainer.childNodes.forEach(e => {
        e.style.backgroundColor = 'rgb(212, 212, 212)';
    });
    
})

// Color picker
color.addEventListener('input', e => {
    colorValue = e.target.value;
    console.log(colorValue);
})
