//millised keeled kasutaja teab
function checkboxValik() {
    let vastus1 = document.getElementById("vastus1");
    let keelCs = document.getElementById("keelCs");
    let keelJS = document.getElementById("keelJS");
    let keelPHP = document.getElementById("keelPHP");
    let keelPy = document.getElementById("keelPy");
    let valik1 ="";
    if(keelCs.checked){
        valik1+=keelCs.value;
    }
    if (keelJS.checked){
        valik1+=keelJS.value;
    }
    if (keelPHP.checked){
        valik1+=keelPHP.value;
    }
    if (keelPy.checked){
        valik1+=keelPy.value;
    }
    if(valik1==""){
        valik1="Tee oma valik";
    }
    vastus1.innerHTML = "Sa tead: " + valik1 + " keeli";
    return valik1;
}
//kasutaja arvamus õppimisest
function arvamusLugemine() {
    let vastus2 = document.getElementById("vastus2");
    let arvamus = document.getElementById("arvamus");
    vastus2.innerHTML ="Arvamus: " + arvamus.value;
    return arvamus.value;
}
//kui palju tundi nädalas programmeerid
function rangeValik() {
    let vastus3 = document.getElementById("vastus3");
    let tund=document.getElementById("tund");
    vastus3.innerHTML = "Sa tegeled programmeerimisega: " + tund.value + " tundi nädalas";
    return tund.value;
}
//kas kasutajale meeldib programmerida
function radioValik() {
    let vastus4=document.getElementById("vastus4")
    let jah=document.getElementById("jah")
    let ei=document.getElementById("ei")
    let pilt = document.getElementById("piltVastus");
    let valik2="";
    if(jah.checked){
        valik2 = jah.value
        pilt.src="../images/smile.png"
    }
    else if(ei.checked){
        valik2 = ei.value
        pilt.src="../images/kurb.png"
    }
    else{
        valik2 = "palun tee oma valik"
    }
    vastus4.innerHTML = "Sinu valik on: " + valik2;
    return valik2
}
//tööristad mida saad nimetada
function progValik() {
    let vastus5=document.getElementById("vastus5")
    let programmid=document.getElementById("programmid")
    vastus5.innerHTML="Sinu nimetatud tööriistad: " + programmid.value;
    return programmid.value
}
//millist programmeerimiskeelt ta kasutaks
function selectValik() {
    let vastus6 = document.getElementById("vastus6");
    let keeleValik = document.getElementById("keeleValik");
    //null on esimine rida
    if(keeleValik.selected!==0){
        vastus6.innerHTML ="Sinu valik: " + keeleValik.value;
    }
    else{
        vastus6.innerHTML ="Palun tee oma valik";
    }
    return keeleValik.value;
}
//näitab kõiki valikuid korraga
function loppNuppValitud() {
    let vastusKoik = document.getElementById("vastuskoik");
    let valik1=checkboxValik()
    let arvamus=arvamusLugemine()
    let tund=rangeValik()
    let valik2=radioValik()
    let programmid=progValik()
    let keeleValik=selectValik()
    vastusKoik.innerHTML=
        "Sa tead: "+valik1+" keeli"+'<br>'+
        "Arvamus: "+arvamus+'<br>'+
        "Sa tegeled programmeerimisega: "+tund+" tundi nädalas"+'<br>'+
        "Sinu valik on: "+valik2+'<br>'+
        "Sinu nimetatud tööriistad: "+programmid+'<br>'+
        "Sinu valik: "+keeleValik+'<br>'
}
//puhastab kõik valikud
function puhastaValitud() {
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastusKoik.innerHTML="";
}