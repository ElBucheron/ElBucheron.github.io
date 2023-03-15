function showCat(id) {

	var elem = document.getElementById(id);

	if (elem.className == "content hidden") {
		elem.style.display = "block";
		elem.className = "content shown";
		elem.previousElementSibling.firstChild.style.transform = 'rotate(90deg)';
	} else {
		elem.style.display = "none";
		elem.className = "content hidden";
		elem.previousElementSibling.firstChild.style.transform = 'rotate(0deg)';
	}
}

function expandAll() {
	var btn = document.getElementById('actionAll');
	var elem = document.getElementById('notes');

	if (btn.className == "retracted") {
		$.each(elem.children, function(n, e){
			if (e.id.match(/cat/g)) {
				e.style.display = "block";
				e.className = "content shown";
				e.previousElementSibling.firstChild.style.transform = 'rotate(90deg)';
			}
		});
		btn.textContent = "| Retract All |";
		btn.className = "expanded";
	} else {
		$.each(elem.children, function(n, e){
			if (e.id.match(/cat/g)) {
				e.style.display = "none";
				e.className = "content hidden";
				e.previousElementSibling.firstChild.style.transform = 'rotate(0deg)';
			}
		});
		btn.textContent = "| Expand All |";
		btn.className = "retracted";
	}
}
