	var vreme = document.getElementById('vreme');
var s;

function prikaziVreme () {
	
	var sada = new Date();
	var i = sada.getDay();
	var g = sada.getFullYear();
	var mes = sada.getMonth();
	var d = sada.getDate();
	var h = sada.getHours();
	var m = sada.getMinutes();
	var sp = sada.getSeconds();
	
	vreme.innerHTML =  h+':'+m+':'+sp
	vreme1.innerHTML =  d+'. '+(mes+1)+'. '+g
}
s = setInterval(prikaziVreme,1000);
