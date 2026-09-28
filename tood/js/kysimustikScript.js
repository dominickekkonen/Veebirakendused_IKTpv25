
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
        vastus5.innerHTML ="Sa valisid: " + stiil.value;
    }
    else{
        vastus5.innerHTML ="Palun tee oma valik";
    }
    vastus5.style.backgroundColor = "lightyellow";
    return stiil.value;
}
//textarea
function arvamusLugemine() {
    let vastus6 = document.getElementById("vastus6");
    let Arvamus = document.getElementById("Arvamus");
    vastus6.innerHTML ="Arvamus: " + Arvamus.value;
    vastus6.style.backgroundColor = "lightyellow";
    return Arvamus.value;
}
//kas kuulab raadiot
function radioKuulamiseValik() {
    let vastus7 = document.getElementById("vastus7");
    let jah = document.getElementById("jah");
    let ei = document.getElementById("ei");
    let valik3 = document.getElementById("valik3");
    if(jah.checked){
        valik3=jah.value;
    } else if(ei.checked){
        valik3=ei.value;
    } else{
    valik3 = "palun tee oma valik";
    }
    //vastus
    vastus7.innerHTML = "Valik: " + valik3;
    vastus7.style.backgroundColor = "lightyellow";
    return valik3;
}
//raadiojaam
function radioJaamiValik(){
    let vastus8 = document.getElementById("vastus8");
    let radiojaam = document.getElementById("radiojaam");
    vastus8.innerHTML = "Raadiojaam: " + radiojaam.value;
    vastus8.style.backgroundColor = "lightyellow";
    return radiojaam.value;
}
//puhasta
function puhasta(){
    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";
    vastus8.innerHTML="";
    vastusKoik.innerHTML="";
}
//näita kõik
function naitaKoike(){
    let vastusKoik = document.getElementById("vastuskoik");
    let nimi=nimiLugemineKastist();
    let valik=radioValik();
    let valik2=checkboxValik();
    let valik3=radioKuulamiseValik();
    let tund=rangeValik();
    let stiil=selectValik()
    let Arvamus=arvamusLugemine();
    let radiojaam=radioJaamiValik()
    vastusKoik.innerHTML="Sinu nimi on: " +nimi+'<br>'+
        'Sinu lemmikud on: ' + valik2 +'<br>'+
        'Sinu lemmik muusikastiil on: '+stiil+'<br>'+
        'Sinu arvamus: '+Arvamus+'<br>'+
        'Sa kasutad: '+valik +'<br>'+
        'Sa kuulad raadiot'+valik3+'<br>'+
        'Sinu radiojaam'+radiojaam+' radiojaam'+'<br>'+
        'Sa kuuled '+tund+' tundi';
}
