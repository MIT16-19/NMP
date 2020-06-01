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
opcijeFormaVeciManji.addEventListener("click", najmanjiTrosak);
opcijeFormaManjVeci.addEventListener("click", prosecanTrosak);

function dodajPlatu() {
	const plata = plataIn.value;	
	plataOut.innerHTML = plata;
	plataIn.value = "";
	izracunajSaldo();
}

function dodajTrosak() {
	troskovi.push({
		ime: imeTroskaIn.value,
		trosak: trosakIn.value
	});
	const trosak = troskovi.map(({ trosak }) => trosak).reduce(saberiTroskove);
	trosakOut.innerHTML = trosak;
	imeTroskaIn.value = "";
	trosakIn.value = "";
	izracunajSaldo();
}

function saberiTroskove(start, clan) {
 return parseFloat(start) + parseFloat(clan);
}

function izracunajSaldo(){
	saldoOut.innerHTML = plataOut.innerHTML - trosakOut.innerHTML;
}

function najveciTrosak(){
	if (troskovi.length > 0){
		const najveciTr = troskovi.reduce((start, clan) => start.trosak > clan.trosak ? start : clan);
		alert("Najveci trošak je " + najveciTr.ime + " čiji je iznos " + najveciTr.trosak + " dinara");
	} else {
		alert("Niste uneli trošak!");
	}
}

function najmanjiTrosak(){
	if (troskovi.length > 0){
		const najmanjiTr = troskovi.reduce((start, clan) => start.trosak < clan.trosak ? start : clan);
		alert("Najmanji trošak je " + najmanjiTr.ime + " čiji je iznos " + najmanjiTr.trosak + " dinara");
	} else {
		alert("Niste uneli trošak!");
	}
}

function prosecanTrosak(){
	if (troskovi.length > 0){
		const trosakProsek = troskovi.map(({ trosak }) => trosak).reduce(saberiTroskove)/troskovi.length;
		alert("Iznos prosečnog troška je " + trosakProsek + " dinara");
	} else {
		alert("Niste uneli trošak!");
	}
}


function ucitajIzTroskovi(){
	if (troskovi.length > 0){
		
	} else {
		alert("Niste uneli trošak!");
	}
}
