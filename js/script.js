function showCat(id) {

	var elem = document.getElementById(id);
	
	if (elem.className == "content hidden") {
		elem.style.display = "block";
		elem.className = "content shown";
	} else {
		elem.style.display = "none";
		elem.className = "content hidden";
	}
}

function openModal(filepath) {
	var modal = document.getElementById("modal");
	modal.style.display = "block";

    var modalContent = document.getElementById("modal-content");
	
	$.get(filepath, function(data) {    
		var lines = data.split("\n");

		$.each(lines, function(n, elem) {
			if (elem.length != 1) {
				if (elem.match(/^##/g)) {
					var h2 = document.createElement("h2");
				    h2.appendChild(document.createTextNode(elem.slice(3, elem.length)));
				    modalContent.appendChild(h2);
				}
				else if (elem.match(/^#/g)) {
					var h1 = document.createElement("h1");
				    h1.appendChild(document.createTextNode(elem.slice(2, elem.length)));
				    h1.style.textAlign = "center";
				    modalContent.appendChild(h1);
				}
				else if (elem.match(/^=/g)) {
					var code = document.createElement("code");
				    code.appendChild(document.createTextNode(elem.slice(2, elem.length)));
				    modalContent.appendChild(code);
				}
				else {
					var p = document.createElement("p");
				    p.appendChild(document.createTextNode(elem));
				    modalContent.appendChild(p);
				}
			}
		});
	});
}

function closeModal() {
	var modal = document.getElementById("modal");
	modal.style.display = "none";

	var modalContent = document.getElementById("modal-content");
	while (modalContent.lastChild.className != "close") {
    	modalContent.removeChild(modalContent.lastChild);
	}
}

window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}