const totalN = prompt("Dgiite valor das dimensões da matriz");

if(!isNaN(totalN) && totalN > 0){
	let tabela = "<table>";

	for(let l=0; l<totalN; l++){
		tabela += "<tr>";

		for(let c=0; c<totalN; c++){
			tabela += "<td>" + l + c + "</td>";
		}
		tabela += "</tr>";
	}
	tabela += "</table>";

	document.body.innerHTML = tabela;
}