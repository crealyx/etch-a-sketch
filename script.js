const gridContainer = document.querySelector('#grid-container');

let grids = [];

for(i = 0; i < 256; i++){
    grids = document.createElement('div');
    gridContainer.append(grids);
};

gridContainer.addEventListener('mouseover', e => {
    if(e.target.id !== 'grid-container'){
        e.target.style.backgroundColor = 'red';
    }
    
});

