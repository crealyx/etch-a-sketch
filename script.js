const gridContainer = document.querySelector('#grid-container');

let grids = [];

for(i = 0; i < 256; i++){
    grids = document.createElement('div');
    gridContainer.append(grids);
}


