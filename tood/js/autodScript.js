let autod = [
    { mark: 'Toyota', mudel: 'Corolla', aasta: 2007 },
    { mark: 'Honda', mudel: 'Civic', aasta: 2012 },
    { mark: 'Tesla', mudel: 'Model 3', aasta: 2019 }
];
//Lisab uue objekti massiivi lõppu
autod.push({ mark: 'BMW', mudel: '320i', aasta: 2015 });

autod.unshift({ mark: 'Ford', mudel: 'Focus', aasta: 2020 });

// splice(0, 1) eemaldab esimese objekti (Ford)
autod.splice(0, 1);

// splice(1, 0, ...) lisab objekti indeksile 1, midagi ei kustutata
autod.splice(1, 0, { mark: 'Audi', mudel: 'A4', aasta: 2018 });
//console.log(autod);
//console.log(autod[0]);
//console.log(autod[0].mark);
autod.forEach((auto) => {
    console.log(`
    Mark: ${auto.mark},
    Mudel: ${auto.mudel},
    Aasta: ${auto.aasta}
    `);
});
//otsimine
let otsing = autod.find(auto=>auto.aasta > 2018);
console.log(otsing);
//sorteerimine
autod.sort((a, b) => a.aasta - b.aasta);
console.log(autod);
//ulesanne
let raamatud = [
    { pealkiri: "Kevade", autor: "O.Luts", aasta: 1912 },
    { pealkiri: "Tõde ja õigus", autor: "A.Tammsaare", aasta: 1926 },
    { pealkiri: "Rehepapp", autor: "A.Kivirähk", aasta: 2000 },


];
function kuva(tekst) {
    console.log(tekst);
    document.getElementById("tulemus").innerHTML += tekst + "<br>";
}
