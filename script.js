function handleMouseOver(event) {
	const hoveredSquareId = event.target.id;
	document.querySelectorAll('.square').forEach(square => {
		if (square.id !== hoveredSquareId) {
			square.style.backgroundColor = '#6F4E37'; 
		}
	});
}
function handleMouseOut() {
	document.querySelectorAll('.square').forEach(square => {
		square.style.backgroundColor = '#E6E6FA';
	});
}
document.querySelectorAll('.square').forEach(square => {
	square.addEventListener('mouseover', handleMouseOver);
	square.addEventListener('mouseout', handleMouseOut);
});