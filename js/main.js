// Mobile Toggle Menu

var navLinks = document.getElementById("navLinks");

navLinks.style.maxHeight = "0px"

function menuToggle(){
	if(navLinks.style.maxHeight == "0px")
	{
	   	navLinks.style.maxHeight = "200px";
	}
	else{
        navLinks.style.maxHeight = "0px";
	}
}
