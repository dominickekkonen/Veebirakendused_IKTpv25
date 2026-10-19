function arvutaKytuseKulu() {
    let km=document.getElementById("km")
    let liitrid=document.getElementById("liitrid")
    let hind=document.getElementById("hind")
    let vastus3 =document.getElementById("tulemus")
    if (isNaN(km) || isNaN(liitrid) || isNaN(hind) || km <= 0 || liitrid < 0 || hind < 0) {
        vastus3.innerText = "Palun sisesta kõik väljad korrektselt.";
        return;
    }
    const sohiHind = liitrid * hind;
    const kulu100km = (liitrid / km) * 100;
    vastus3.innerHTML =
        "Sõidu hind: " + sohiHind + " €<br>" +
        "Keskmine kulu: " + kulu100km + " l / 100 km";
}