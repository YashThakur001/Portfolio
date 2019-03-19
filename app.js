document.querySelector("button.navbar-toggler.collapsed").addEventListener("click", show);
	function show(){
	var element = document.querySelector('div#navbarSupportedContent');
	if (element.style.display === "none") {
	element.style.display = "block";
	} else {
	element.style.display = "none";
	}
}