const gridContainer = document.querySelector('#grid-container');
const clear = document.querySelector('#clear');
const color = document.querySelector('#color');
const size = document.querySelector('#size');
const rainbow = document.querySelector('#rainbow');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('#slider');
const sliderValue = document.querySelector('.value');
let defaultSize = 16;
let grids = [];
let colorValue = color.getAttribute('value');
let rainbowToggle = 0;
let random = '#'+Math.floor(Math.random()*16777215).toString(16);
let currentColor;

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

// Paint canvas
gridContainer.addEventListener('mouseover', e => {
    if(e.target.id !== 'grid-container'){
        e.target.style.backgroundColor = `${colorValue}`;
    }
});

// Rainbow color
rainbow.addEventListener('click', () => {
    if(rainbowToggle === 0){
        rainbow.textContent = `Rainbow Colors: On`;
        rainbow.style.background = 'var(--linear)';
        rainbowToggle = 1;
    }
    else{
        rainbow.textContent = 'Rainbow Colors: Off';
        rainbow.style.background = 'var(--rainbowDefault)';
        rainbowToggle = 0;
    }
    
})

// Paint rainbow
gridContainer.addEventListener('mouseout', e => {
    if(rainbowToggle === 1){
        console.log('mouse left');
        random = '#'+Math.floor(Math.random()*16777215).toString(16);
        colorValue = random;
    }

    else if(rainbowToggle === 0 && currentColor === undefined){
        colorValue = 'black';
    }
    else{
        colorValue = currentColor;
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
    currentColor = e.target.value;
})
