
function nimiLugemineKastist() {
    let vastus1 = document.getElementById("vastus1");
    let nimi = document.getElementById("nimi");
    vastus1.innerHTML = "Sisestatud nimi on: " + nimi.value;
    vastus1.style.backgroundColor = "lightyellow";
    return nimi.value;
}
//radioValik
function radioValik() {
    let vastus2 = document.getElementById("vastus2");
    let Spotify = document.getElementById("Spotify");
    let Raadio = document.getElementById("Raadio");
    let Vinuulplaat = document.getElementById("Vinuulplaat");
    let valik="";
    if(Spotify.checked){
        valik = Spotify.value;
    } else if(Raadio.checked){
        valik = Raadio.value;
    } else if(Vinuulplaat.checked){
        valik = Vinuulplaat.value;
    } else{
        valik = "palun tee oma valik";
    }
    //vastus
    vastus2.innerHTML = "Valik: " + valik;
    vastus2.style.backgroundColor = "lightyellow";
    return valik;
}
//checkboxValik
function checkboxValik() {
    let vastus3 = document.getElementById("vastus3");
    let beatles = document.getElementById("beatles");
    let vaults = document.getElementById("vaults");
    let megadeth = document.getElementById("megadeth");
    let deftones = document.getElementById("deftones");
    let valik2 ="";
    if(beatles.checked){
        valik2+=beatles.value +', ';
    }
    if (vaults.checked){
        valik2+=vaults.value +', ';
    }
    if (megadeth.checked){
        valik2+=megadeth.value +', ';
    }
    if (deftones.checked){
        valik2+=deftones.value +', ';
    }
    if(valik2==""){
        valik2="Tee oma valik";
    }
    vastus3.innerHTML = "Sinu lemmikud on: " + valik2;
    vastus3.style.backgroundColor = "lightyellow";
    return valik2;
}
//range
function rangeValik() {
    let vastus4 = document.getElementById("vastus4");
    let tund=document.getElementById("tund");
    vastus4.innerHTML = "Sa kuulad muusikat: " + tund.value + " tundi";
    vastus4.style.backgroundColor = "lightyellow";
    return tund.value;
}
//select
function selectValik() {
    let vastus5 = document.getElementById("vastus5");
    let stiil = document.getElementById("stiil");
    //null on esimine rida
    if(stiil.selected!==0){
        vastus5.innerHTML ="Sa valisid " + stiil.value;
    }
    else{
        vastus5.innerHTML ="Palun tee oma valik";
    }
    vastus5.style.backgroundColor = "lightyellow";
    return stiil.value;
}
//puhasta
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastusKoik.innerHTML="";
}
//näita kõik
function naitaKoike(){
    let vastusKoik = document.getElementById("vastuskoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let valik2=checkboxValik();
    let tund=rangeValik();
    let stiil=selectValik()
    vastusKoik.innerHTML="Sinu nimi on: " +nimi+'<br>'+
        'Sinu lemmikud on: ' + valik2 +'<br>'+
        'Sinu lemmik muusikastiil on: '+stiil+'<br>'+
        'Sa kasutad: ' + valik +'<br>'+
        'Sa kuuled '+tund+' tundi';
}
