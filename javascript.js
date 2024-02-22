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

function changerFond(index, coût) {
    if (roubles >= coût) {
        // Déduit le coût des roubles
        roubles -= coût;

        // Change l'image de fond en fonction de l'index
        var imageUrl;
        switch(index) {
           
            case 1:
                imageUrl = "url(https://www.aquaportail.com/pictures1609/cosmos-bipinnatus-fleur-mauve.jpg)";
                break;
             case 2:
                imageUrl = "url(https://casoar.org/wp-content/uploads/2020/10/maison-de-bob.jpg)";
                break;
            
            case 3:
                imageUrl = "url(https://www.tfo.org/_next/image?url=https%3A%2F%2Fprod-mogadorsync.s3.ca-central-1.amazonaws.com%2F000151633_detailsanstitre.jpg&w=3840&q=75";
                break;
            case 4:
                imageUrl = "url(https://www.coordinationrurale.fr/wp-content/uploads/2020/01/champ-pommes-de-terre.jpg";
                break;
            case 5:
                imageUrl = "url(https://i.kym-cdn.com/entries/icons/facebook/000/047/760/dt.jpg";
                break;
            case 6:
                imageUrl = "url(https://i0.wp.com/ssbmtextures.com/wp-content/uploads/2023/06/Uly6oJxhJV.jpg?ssl=1";
                break;
            case 7:
                imageUrl = "url(https://dmb-machines.com/wp-content/uploads/2020/02/batiment-b%C3%A9tonni%C3%A8re.jpg";
                break;
            
           
            default:
                // Par défaut, utilise l'URL spécifiée
                imageUrl = "";
        }
        
        document.body.style.backgroundImage = imageUrl;
        document.body.style.backgroundSize = "1200px auto"
        

        // Met à jour le texte des roubles
        miseÀJourTexte();
    }
}
