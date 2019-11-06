var style = document.createElement('style');
  style.innerHTML = `
  .temp-input {
    position: absolute;
    z-index: -1000;
  }
  `;

document.head.appendChild(style);

let done = false;

let fix_pagination = setInterval(function(){
	let panel = document.getElementsByClassName("at-search-results__management-panel")[0];
	let download_button = document.getElementsByClassName("at-search-results__download-button-wrapper")[0];
	let pagination = document.getElementsByClassName("ac-pagination")[0];

	// console.log('extension running');

	if(panel && download_button && pagination){
		panel.setAttribute("style", "display: flex; justify-content: left");
		download_button.setAttribute("style", "margin-right: 10vw");
		pagination.setAttribute("style", "position: absolute; right: 70px");
		done = true;
	}

	if (done){
		// clearInterval(fix_pagination);
	}
}, 3000);


let table_rows = document.getElementsByClassName("ac-table__row")[0];
document.addEventListener('click', function (event) {
	if (!event.target.matches('.ac-table__cell')) return;
	if (!event.ctrlKey) return;
	let row = event.target.parentElement;
	let range = new Range();
	range.setStart(row.firstChild, 0);
	range.setEnd(row.querySelector('.at-search-results__vocabulary').firstChild, 
				 row.querySelector('.at-search-results__vocabulary').firstChild.length);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand('copy');

}, false); 
