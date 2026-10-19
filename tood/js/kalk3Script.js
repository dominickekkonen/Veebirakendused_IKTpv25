function arvutaKytuseKulu() {
    let km = parseFloat(document.getElementById("km").value);
    let liitrid = parseFloat(document.getElementById("liitrid").value);
    let hind = parseFloat(document.getElementById("hind").value);
    let tulemus = document.getElementById("tulemus");
    if (isNaN(km) || isNaN(liitrid) || isNaN(hind) || km <= 0 || liitrid < 0 || hind < 0) {
        tulemus.innerText = "Palun sisesta kõik väljad korrektselt.";
        return;
    }
    const sohiHind = liitrid * hind;
    const kulu100km = (liitrid / km) * 100;
    tulemus.innerHTML =
        "Sõidu hind: " + sohiHind.toFixed(2) + " €<br>" +
        "Keskmine kulu: " + kulu100km.toFixed(2) + " l / 100 km";
}