const container = document.querySelector('.container');
const clearButton = document.querySelector('#clearButton');
const s = 50;

function generateGrid(s) {
	let grid = document.createElement('div');
	grid.className = "grid";
	container.appendChild(grid);
	for(let i=0; i<s; i++) {
		let rows = document.createElement('div');
		rows.classList.add('row');
		for(let j=1; j<=s; j++) {
			let cell = document.createElement('div');
			cell.classList.add('cell');
			// cell.innerText = (i*s) +j;
			rows.appendChild(cell);
		}
		grid.appendChild(rows);
	}
}	

function colorCell(e) {
	if(e.target.className != 'cell') return;
	e.target.style.background = generateRandomColor();
	// e.target.classList.add('blackMarked');
}

function generateRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';

	for(let i=0; i<6; i++) {
		color += letters[Math.floor(Math.random()*16)];
	} 
	return color;
}

generateGrid(s);

window.addEventListener('mouseover', colorCell);
clearButton.addEventListener('click', ()=>{
	let cells = document.querySelectorAll('.cell');
	cells.forEach(function(c) {
		c.style.background = '';
		// c.classList.remove('blackMarked');
	});
});