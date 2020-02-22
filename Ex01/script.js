//A
document.getElementById("primeiroElemento").style="color:blue";

//B
li_length = document.getElementsByTagName("li").length;
array_li = document.getElementsByTagName("li");

for(let i=0; i<li_length; i++){
	if(array_li[i].id == "terceiroElemento"){
		break;
	}
	array_li[i].style="font-weight: bold";
}

//C
document.getElementById("quintoElemento").parentNode.style="border: solid 1px black";

//D
li_parent = document.getElementById("primeiroElemento").parentNode;

elements = document.getElementsByTagName("*");

for(let i=0; i<elements.length; i++){
	if(elements[i].tagName == 'DIV'){
		elements[i].style="color: red";
	}if(elements[i].tagName == li_parent.tagName){
		break;
	}
}
