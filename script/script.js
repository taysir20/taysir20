var xmlhttp = new XMLHttpRequest();
var url = "script/json/mijson.json";

xmlhttp.onreadystatechange = function() { // Si hay prueba del servidor y es positiva se ejecuta el if
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
		var myArr=documentJson.Proyectos;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
	
	
	 for(i = 0; i < arr.length; i++) {
		
		var element=document.getElementById("id01");
		var div2=document.createElement("div");
		var div=document.createElement("div");
		var divHijo=document.createElement("div");
		var imagen=document.createElement("img");
		var destacado=document.createElement("img");
		var contenido=document.createElement("div");
		contenido.setAttribute("class", "contenido");
		div2.setAttribute("class", "stylePadre");
		div.setAttribute("class","style");
		divHijo.setAttribute("class","miHijo");
		imagen.setAttribute("src", arr[i].imagen);
		imagen.setAttribute("class", "miImagen");
		destacado.setAttribute("class", "destacado");
		destacado.setAttribute("src", arr[i].destacadoImagen);
		var p1=document.createElement("p");
		var p2=document.createElement("p");
		var p3=document.createElement("p");
		var p4=document.createElement("p");
		var p5=document.createElement("p");
		var p6=document.createElement("p");
		var p7=document.createElement("p");
		var h=document.createElement("h2");
		var node=document.createTextNode(arr[i].titulo);
		
		
		var nodefecha=document.createTextNode(arr[i].FechaRealizacion);
		var nodedescripcion=document.createTextNode(arr[i].Descripcion);
		var nodemiembros=document.createTextNode(arr[i].MiembrosGrupo);
		var nodeasignaturas=document.createTextNode(arr[i].AsignaturasRelacionadas);
		var noderesponsive=document.createTextNode(arr[i].Responsive);
		var nodevisualizacion=document.createTextNode(arr[i].visualizacionRecomendada);
		
		element.appendChild(div2);
		div2.appendChild(div);
		div2.appendChild(contenido);
		contenido.appendChild(h);
		h.appendChild(node);
		if(arr[i].Destacado=="Si"){
			contenido.appendChild(destacado);
		}
		div.appendChild(imagen);
		div.appendChild(divHijo);
		divHijo.appendChild(p2);
		divHijo.appendChild(p3);
		divHijo.appendChild(p4);
		divHijo.appendChild(p5);
		divHijo.appendChild(p6);
		divHijo.appendChild(p7);
	
		p1.appendChild(nodefecha);
		p3.appendChild(nodedescripcion);
		p4.appendChild(nodemiembros);
		p5.appendChild(nodeasignaturas);
		p7.appendChild(nodevisualizacion);
		var button=document.createElement("button");
		var node2=document.createTextNode("Visitar Página");
		button.setAttribute("type","button");
		var a=document.createElement("a");
		a.setAttribute("target","_blank");
		a.setAttribute("href",arr[i].link);
		div2.appendChild(button);
		button.appendChild(a);
		a.appendChild(node2);
		
		
		
    }
			
 
 
 
          
 
        }