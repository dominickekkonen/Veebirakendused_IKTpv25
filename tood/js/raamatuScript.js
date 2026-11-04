
let raamat = {
    pealkiri: "Kevade",
    autor: "Oskar Luts",
    aasta: 1912,

    // meetod mis kuvab raamatu kirjelduse

    kirjeldus() {
        return this.pealkiri + ", autor " + this.autor + ", aasta " + this.aasta;
    },

    // meetod mis lisab raamatu

    // meetod mis muudab aastat

    muudaAasta(uusAasta) {
        this.aasta = uusAasta;
        console.log("Uus aasta on " + this.aasta);
    }
};
let raamatukogu = {
    raamatud: [
        { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
        { pealkiri: "Tõde ja õigus", autor: "A. H. Tammsaare", aasta: 1926 },
        { pealkiri: "Rehepapp", autor: "Andrus Kivirähk", aasta: 2000 },
        { pealkiri: "Ivan Orava mälestused", autor: "Andrus Kivirähk", aasta: 2015 }
    ],

    lisaRaamat(pealkiri, autor, aasta) {
        this.raamatud.push({ pealkiri: pealkiri, autor: autor, aasta: aasta });
    },
    // kuvab kõik raamatud konsoolis

    kuvaRaamatud() {
        this.raamatud.forEach(r => console.log(r.pealkiri + " - " + r.autor + " (" + r.aasta + ")"));
    },
    // raamatute koguarv

    koguarv() {
        return this.raamatud.length;
    },

    // mitu raamatut on pärast 2000. aastat

    peale2000() {
        let kokku = 0;
        this.raamatud.forEach(r => {
            if (r.aasta > 2000) {
                kokku++;
            }
        });
        return kokku;
    },

    // MINU OMA MEETOD: leiab ühe autori raamatud

    autoriRaamatud(autor) {
        let tekst = "";
        this.raamatud.forEach(r => {
            if (r.autor === autor) {
                tekst += r.pealkiri + "<br>";
            }
        });
        return tekst;
    }
};
// lisab uue raamatu

function lisaUus() {
    let pealkiri = document.getElementById("pealkiri").value;
    let autor = document.getElementById("autor").value;
    let aasta = Number(document.getElementById("aasta").value);
    let vastus4 = document.getElementById("vastus4");

    if (pealkiri === "" || autor === "" || aasta === 0) {
        vastus4.innerHTML = "Täida kõik väljad!";
        return;
    }

    raamatukogu.lisaRaamat(pealkiri, autor, aasta);

    console.log("Lisatud: " + pealkiri + " - " + autor + " (" + aasta + ")");
    vastus4.innerHTML = "Raamat lisatud: " + pealkiri;

    document.getElementById("pealkiri").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("aasta").value = "";
    uuendaValik();
}
console.log(raamat.kirjeldus());
raamat.muudaAasta(1913);
console.log(raamat.kirjeldus());

raamatukogu.kuvaRaamatud();
console.log("Raamatuid kokku " + raamatukogu.koguarv());
console.log("Pärast 2000. aastat ilmunud " + raamatukogu.peale2000());

// ---------- Tulemused html lehel ----------
function raamatuInfo() {
    let vastus = document.getElementById("vastus");
    vastus.innerHTML = raamat.kirjeldus();
}

function aastaMuutus() {
    raamat.muudaAasta(1920);
    let vastus2 = document.getElementById("vastus2");
    vastus2.innerHTML = "Uus aasta on " + raamat.aasta;
}

function kuvaKoik() {
    let vastus3 = document.getElementById("vastus3");
    vastus3.innerHTML = "";
    raamatukogu.raamatud.forEach(r => {
        vastus3.innerHTML += r.pealkiri + " - " + r.autor + " (" + r.aasta + ")<br>";
    });
}

function koguarv() {
    let vastus5 = document.getElementById("vastus5");
    vastus5.innerHTML = "Raamatuid kokku: " + raamatukogu.koguarv();
}

function uuemad() {
    let vastus6 = document.getElementById("vastus6");
    vastus6.innerHTML = "Pärast 2000. aastat ilmunud: " + raamatukogu.peale2000();
}
function uuendaValik() {
    let valik = document.getElementById("autorValik");
    valik.innerHTML = '<option value="vali">vali autor..</option>';
    let autorid = [];
    raamatukogu.raamatud.forEach(r => {
        if (!autorid.includes(r.autor)) {
            autorid.push(r.autor);
            valik.innerHTML += '<option value="' + r.autor + '">' + r.autor + '</option>';
        }
    });
}
function autoriRaamatud() {
    let valitud = document.getElementById("autorValik").value;
    let vastus7 = document.getElementById("vastus7");
    if (valitud === "vali") {
        vastus7.innerHTML = "Vali autor";
    } else {
        vastus7.innerHTML = raamatukogu.autoriRaamatud(valitud);
    }
}