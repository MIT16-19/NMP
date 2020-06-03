const plataForma = document.getElementById("forma-plata");
const trosakForma = document.getElementById("forma-troskovi");
const opcijeForma = document.getElementById("forma-opcije");
const opcijeFormaNajv = document.getElementById("najveci");
const opcijeFormaNajm = document.getElementById("najmanji");
const opcijeFormaPro = document.getElementById("prosecan");
const opcijeFormaVeciManji = document.getElementById("najvecinajmanj");
const opcijeFormaManjVeci = document.getElementById("najmanjnajveci"); 
const sortFormaManje = document.getElementById("forma-sortmanje-trosak-btn");
const sortFormaVece = document.getElementById("forma-sortvece-trosak-btn");
const depoRez = document.getElementById("lista-item");

const plataIn = document.getElementById("plata-input");
const imeTroskaIn = document.getElementById("ime-troska-input");
const trosakIn = document.getElementById("trosak-input");
const sortIn = document.getElementById("sort-troska-input");

const plataOut = document.getElementById("plata-din");
const trosakOut = document.getElementById("trosak-din");
const saldoOut = document.getElementById("saldo-din");

var troskovi = [];

plataForma.addEventListener("submit", function(event){
  event.preventDefault();
  dodajPlatu();
});
trosakForma.addEventListener("submit", function(event){
  event.preventDefault();
  dodajTrosak();
});
opcijeFormaNajv.addEventListener("click", najveciTrosak);
opcijeFormaNajm.addEventListener("click", najmanjiTrosak);
opcijeFormaPro.addEventListener("click", prosecanTrosak);
opcijeFormaVeciManji.addEventListener("click", ucitajIzTroskoviSortAB);
opcijeFormaManjVeci.addEventListener("click", ucitajIzTroskoviSortBA);
sortFormaManje.addEventListener("click", function(event){
  event.preventDefault();
  ucitajIzTroskoviVeciOd();
}); 
sortFormaVece.addEventListener("click", function(event){
  event.preventDefault();
  ucitajIzTroskoviManjiOd();
}); 

function dodajPlatu() {
	const plata = plataIn.value;	
	plataOut.innerHTML = plata;
	plataIn.value = "";
	izracunajSaldo();
}

function dodajTrosak() {
	troskovi.push({
		ime: imeTroskaIn.value,
		trosak: trosakIn.value,
		id: troskovi.length + 1
	});
	const trosak = troskovi.map(({ trosak }) => trosak).reduce(saberiTroskove);
	trosakOut.innerHTML = trosak;
	imeTroskaIn.value = "";
	trosakIn.value = "";
	izracunajSaldo();
	ucitajIzTroskovi();
}

function saberiTroskove(start, clan) {
 return parseFloat(start) + parseFloat(clan);
}

function izracunajSaldo(){
	saldoOut.innerHTML = plataOut.innerHTML - trosakOut.innerHTML;
}

function najveciTrosak(){
	if (troskovi.length > 0){
		const najveciTr = troskovi.reduce((a, b) => parseFloat(a.trosak) > parseFloat(b.trosak) ? a : b);
		alert("Najveci trošak je " + najveciTr.ime + " čiji je iznos " + najveciTr.trosak + " dinara");
	} else {
		alert("Niste uneli trošak!");
	}
}

function najmanjiTrosak(){
	if (troskovi.length > 0){
		const najmanjiTr = troskovi.reduce((a, b) => parseFloat(a.trosak) < parseFloat(b.trosak) ? a : b);
		alert("Najmanji trošak je " + najmanjiTr.ime + " čiji je iznos " + najmanjiTr.trosak + " dinara");
	} else {
		alert("Niste uneli trošak!");
	}
}

function prosecanTrosak(){
	if (troskovi.length > 0){
		const trosakProsek = troskovi.map(({ trosak }) => trosak).reduce(saberiTroskove)/troskovi.length;
		alert("Iznos prosečnog troška je " + trosakProsek.toFixed(2) + " dinara");
	} else {
		alert("Niste uneli trošak!");
	}
}

function ucitajIzTroskovi(){
	if (troskovi.length > 0){	
		depoRez.innerHTML =	"";
		const trosakList = troskovi.map(({ime, trosak, id}) => ('<div class="d-flex justify-content-between text-capitalize" id="lista-troskovi">' +
															'<h5 class="trosak-item" id="lista-item-naziv">' + id + '</h5>' + 
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + ime + '</h5>' +	
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + trosak + '</h5></div>'));
		depoRez.innerHTML += trosakList.join("");
	} else { 
		alert("Niste uneli trošak!");
	}
}

function ucitajIzTroskoviSortAB(){
	if (troskovi.length > 0){	
		depoRez.innerHTML =	"";
		const trosakSortAB = troskovi.sort((a, b) => (parseFloat(a.trosak) < parseFloat(b.trosak)) ? 1 : -1);
		const trosakList = trosakSortAB.map(({ime, trosak, id}) => ('<div class="d-flex justify-content-between text-capitalize" id="lista-troskovi">' +
															'<h5 class="trosak-item" id="lista-item-naziv">' + id + '</h5>' + 
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + ime + '</h5>' +	
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + trosak + '</h5></div>'));
		depoRez.innerHTML += trosakList.join("");;
	} else { 
		alert("Niste uneli trošak!");
	}
}

function ucitajIzTroskoviSortBA(){
	if (troskovi.length > 0){	
		depoRez.innerHTML =	"";
		const trosakSortBA = troskovi.sort((a, b) => (parseFloat(a.trosak) > parseFloat(b.trosak)) ? 1 : -1);
		const trosakList = trosakSortBA.map(({ime, trosak, id}) => ('<div class="d-flex justify-content-between text-capitalize" id="lista-troskovi">' +
															'<h5 class="trosak-item" id="lista-item-naziv">' + id + '</h5>' + 
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + ime + '</h5>' +	
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + trosak + '</h5></div>'));
		depoRez.innerHTML += trosakList.join("");;
	} else { 
		alert("Niste uneli trošak!");
	}
}

function ucitajIzTroskoviVeciOd(){
	if (troskovi.length > 0){	
		depoRez.innerHTML =	"";
		const trosakSortVeciOd = troskovi.filter(a => parseFloat(a.trosak) <= parseFloat(sortIn.value)); 
		const trosakList = trosakSortVeciOd.map(({ime, trosak, id}) => ('<div class="d-flex justify-content-between text-capitalize" id="lista-troskovi">' +
															'<h5 class="trosak-item" id="lista-item-naziv">' + id + '</h5>' + 
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + ime + '</h5>' +	
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + trosak + '</h5></div>'));
		depoRez.innerHTML += trosakList.join("");;
	} else { 
		alert("Niste uneli trošak!");
	}
}

function ucitajIzTroskoviManjiOd(){
	if (troskovi.length > 0){	
		depoRez.innerHTML =	"";
		const trosakSortManjiOd = troskovi.filter(a => parseFloat(a.trosak) >= parseFloat(sortIn.value)); 
		const trosakList = trosakSortManjiOd.map(({ime, trosak, id}) => ('<div class="d-flex justify-content-between text-capitalize" id="lista-troskovi">' +
															'<h5 class="trosak-item" id="lista-item-naziv">' + id + '</h5>' + 
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + ime + '</h5>' +	
															'<h5 class="trosak-item" id="lista-item-naziv" id="idChild">' + trosak + '</h5></div>'));
		depoRez.innerHTML += trosakList.join("");;
	} else { 
		alert("Niste uneli trošak!");
	}
}