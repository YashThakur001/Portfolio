document.querySelector("button.navbar-toggler.collapsed").addEventListener("click", show);
	function show(){
	var element = document.querySelector('div#navbarSupportedContent');
	if (element.style.display === "block") {
	element.style.display = "none";
	} else {
	element.style.display = "block";
	}
}