//A
document.getElementById("primeiroElemento").style="color:blue";

//B
li_length = document.getElementsByTagName("li").length;
array_li = document.getElementsByTagName("li");

for(let i=0; i<li_length; i++){
	array_li[i].style="font-weight: bold";
	if(array_li[i].id == "terceiroElemento"){
		break;
	}
}

//C
document.getElementById("quintoElemento").parentNode.style="border: solid 1px black";



