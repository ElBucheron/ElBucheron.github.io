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