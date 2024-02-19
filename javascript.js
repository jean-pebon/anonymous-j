var roubles = 0;
var prime = 0;

function clic() {
    roubles += 1 + prime;
    miseÀJourTexte();
}

function miseÀJourTexte() {
    document.getElementById("roubles").innerHTML = roubles + " roubles";
}

function améliorer(index, coût, gain) {
    if (roubles >= coût) {
        prime += gain;
        roubles -= coût;
        document.getElementById("upgrade-" + index).innerHTML = "Vendu";
        document.getElementById("upgrade-" + index).disabled = true;
        miseÀJourTexte();
    }
}

