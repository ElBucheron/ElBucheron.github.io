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

function readTextFile(filepath) {
	var str = "";
	
	$.get(filepath, function(data) {    
	    var lines = data.split("\n");

	    $.each(lines, function(n, elem) {
	       $('#modal-content').append('<div>' + elem + '</div>');
	    });
	});

	return str;
}

function openModal(title, path) {
	var modal = document.getElementById("modal");
	modal.style.display = "block";

	var modalContent = document.getElementById("modal-content");
	var titleDiv = document.createElement("h1");
	titleDiv.style.textAlign = "center";
	titleDiv.appendChild(document.createTextNode(title));
    modalContent.appendChild(titleDiv);

    var text = readTextFile(path);

    var p = document.createElement("p");
    p.appendChild(document.createTextNode(text))
    modalContent.appendChild(p);
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