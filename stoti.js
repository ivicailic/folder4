var vreme = document.getElementById('vreme');
var s;

function prikaziVreme () {
	
	var sada = new Date();
	var i = sada.getDay();
	var g = sada.getFullYear();
	var mes = sada.getMonth();
	mes += 1
	var d = sada.getDate();
	var h = sada.getHours();
	var m = sada.getMinutes();
	var sp = sada.getSeconds();
	
	vreme.innerHTML =  addZero(h)+':'+addZero(m)+':'+addZero(sp)
	vreme1.innerHTML =  addZero(d)+' / '+ addZero(mes)+' / '+g
	
	function addZero(zero){
		if(zero < 10){
		return "0" +zero;
		}else{
    return zero;			
	}
}
}
s = setInterval(prikaziVreme,1000);
