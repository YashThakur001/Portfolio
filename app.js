//On click of the button show the menu to navigate
document.querySelector("button.navbar-toggler.collapsed").addEventListener("click", show);
//On click of menu list hide the menu
document.querySelector('ul.navbar-nav').addEventListener("click", hide);
	
//Show the menu
function show(){
	var element = document.querySelector('div#navbarSupportedContent');
	element.style.display = "block";
}

//Hide the menu after chosing one option
function hide(){
	var element1 = document.querySelector('div#navbarSupportedContent');
	element1.style.display = "none";
}