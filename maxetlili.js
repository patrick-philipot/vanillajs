var data = [ 
    { "title": "Lili ne veut pas se coucher", "lu": "non" },
    { "title": "Max n'aime pas lire", "lu": "non" },
    { "title": "Max est timide", "lu": "oui" },
    { "title": "Lili se dispute avec son frere", "lu": "non" },
    { "title": "Les parents de zoe divorcent", "lu": "non" },
    { "title": "Max n'aime pas l'ecole", "lu": "non" },
    { "title": "Lili est amoureuse", "lu": "non" },
    { "title": "Max est fou de jeux video", "lu": "oui" },
    { "title": "Lili découvre sa mamie", "lu": "non" },
    { "title": "Max va à l'hopital", "lu": "non" },
    { "title": "Lili n'aime que les frites", "lu": "oui" },
    { "title": "Max raconte des bobards", "lu": "oui" },
    { "title": "Max part en classe verte", "lu": "non" },
    { "title": "Lili est fachée avec sa copine", "lu": "oui" },
    { "title": "Max a triché", "lu": "oui" },
    { "title": "Lili a été suivie", "lu": "oui" },
    { "title": "Max et Lili ont peur", "lu": "oui" },
    { "title": "Max et Lili ont volé des bonbons", "lu": "oui" },
    { "title": "Grand-père est mort", "lu": "non" },
    { "title": "Lili est désordre", "lu": "non" },
    { "title": "Max a la passion du foot", "lu": "oui" },
    { "title": "Lili veut choisir ses habits", "lu": "non" },
    { "title": "Lili veut protéger la nature", "lu": "oui" },
    { "title": "Max et koffi sont copains", "lu": "non" },
    { "title": "Lili veut un petit chat", "lu": "non" },
    { "title": "Les parents de Max et Lili se disputent", "lu": "non" },
    { "title": "Nina a été adoptée", "lu": "non" },
    { "title": "Max est jaloux", "lu": "non" },
    { "title": "Max est maladroit", "lu": "oui" },
    { "title": "Lili veut de l'argent de poche", "lu": "non" },
    { "title": "Max veut se faire des amis", "lu": "non" },
    { "title": "Emilie a déménagé", "lu": "non" },
    { "title": "Lili ne veut plus aller à la piscine", "lu": "non" },
    { "title": "Max se bagarre", "lu": "oui" },
    { "title": "Max et Lili se sont perdus", "lu": "oui" },
    { "title": "Jéremy est maltraité", "lu": "non" },
    { "title": "Lili se trouve moche", "lu": "non" },
    { "title": "Max est racketté", "lu": "oui" },
    { "title": "Max n'aime pas perdre", "lu": "oui" },
    { "title": "Max a une amoureuse", "lu": "oui" },
    { "title": "Lili est malpolie", "lu": "oui" },
    { "title": "Max et Lili veulent des calins", "lu": "non" },
    { "title": "Le père de Max et Lili est au chomage", "lu": "non" },
    { "title": "Alex est handicapé", "lu": "non" },
    { "title": "Max est casse-cou", "lu": "non" },
    { "title": "Lili regarde trop la télévision", "lu": "oui" },
    { "title": "Max est dans la lune", "lu": "oui" },
    { "title": "Lili se fait toujours gronder", "lu": "non" },
    { "title": "Max adore jouer", "lu": "non" },
    { "title": "Max et Lili veulent tout savoir sur les bébés", "lu": "oui" },
    { "title": "Lucien n'a pas de copains", "lu": "non" },
    { "title": "Lili a peur des controles", "lu": "non" },
    { "title": "Max et Lili veulent tout, tout de suite", "lu": "oui" },
    { "title": "Max embête les filles", "lu": "non" },
    { "title": "Lili va chez la psy", "lu": "non" },
    { "title": "Max ne veut pas se laver", "lu": "non" },
    { "title": "Lili trouve sa maitresse méchante", "lu": "non" },
    { "title": "Max et Lili sont malades", "lu": "non" },
    { "title": "Max fait pipi au lit", "lu": "oui" },
    { "title": "Lili fait des cauchemars", "lu": "non" },
    { "title": "Le cousin de Max et Lili se drogue", "lu": "non" },
    { "title": "Max et Lili ne font pas leurs devoirs", "lu": "non" },
    { "title": "Max va à la pêche avec son père", "lu": "non" },
    { "title": "Marlène grignote tout le temps", "lu": "non" },
    { "title": "Lili veut être une star", "lu": "non" },
    { "title": "La copine de Lili a une maladie grave", "lu": "non" },
    { "title": "Max se fait insulter a la récré", "lu": "non" },
    { "title": "La maison de Max et Lili a été cambriolée", "lu": "non" },
    { "title": "Lili veut faire une boum", "lu": "non" },
    { "title": "Max n'en fait qu'à sa tête", "lu": "non" },
    { "title": "Le chien de Max et Lili est mort", "lu": "oui" },
    { "title": "Simon a deux maisons", "lu": "oui" },
    { "title": "Max veut être délégué de classe", "lu": "non" },
    { "title": "Max et Lili aident les enfants du monde", "lu": "non" },
    { "title": "Lili se fait pieger sur internet", "lu": "oui" },
    { "title": "Emilie n'aime pas quand sa mère boit trop", "lu": "non" },
    { "title": "Max ne respecte rien", "lu": "non" },
    { "title": "Max aime les monstres", "lu": "non" },
    { "title": "Lili ne veut plus se montrer toute nue", "lu": "non" },
    { "title": "Lili part en camp de vacances", "lu": "non" },
    { "title": "Max se trouve nul", "lu": "oui" },
    { "title": "Max et Lili fêtent noël en famille", "lu": "non" },
    { "title": "Lili a un chagrin d'amour", "lu": "non" },
    { "title": "Max trouve que c'est pas juste", "lu": "non" },
    { "title": "Max et Lili sont fans de marques", "lu": "non" },
    { "title": "Max et Lili se posent des questions sur dieu", "lu": "non" },
    { "title": "Max ne pense qu'au zizi", "lu": "oui" },
    { "title": "Lili fait sa commandante", "lu": "oui" },
    { "title": "Max décide de faire des efforts", "lu": "non" },
    { "title": "Lili a peur de la mort", "lu": "non" },
    { "title": "Lili rêve d'être une femme", "lu": "non" },
    { "title": "Lili a la passion du cheval", "lu": "oui" },
    { "title": "Max et Lili veulent éduquer leurs parents", "lu": "non" },
    { "title": "Lili veut un téléphone portable", "lu": "non" },
    { "title": "Le tonton de Max et Lili est en prison", "lu": "oui" },
    { "title": "Max veut sauver les animaux", "lu": "non" },
    { "title": "Lili est stressée par la rentrée", "lu": "non" },
    { "title": "Max et Lili veulent être gentils", "lu": "non" },
    { "title": "Lili est harcelée à l'école", "lu": "oui" },
    { "title": "Max et Lili ont des pouvoirs magiques", "lu": "oui" },
    { "title": "Max boude", "lu": "non" },
    { "title": "Max et Lili font du camping", "lu": "non" },
    { "title": "Max et Lili en ont marre de se dépêcher", "lu": "non" },
    { "title": "Lili a trop honte", "lu": "non" },
    { "title": "Lili invite une copine en vacances", "lu": "non" },
    { "title": "Max et Lili veulent être populaires", "lu": "non" },
    { "title": "Max et Lili trouvent leur cousin angoissé", "lu": "non" },
    { "title": "Max et Lili vont chez papy et mamie", "lu": "non" },
    { "title": "Max et Lili ont peur des images violentes", "lu": "non" },
    { "title": "La copine de Lili n'a pas de papa", "lu": "non" },
    { "title": "Max se trouve trop petit", "lu": "oui" },
    { "title": "Max et Lili cherchent leur métier", "lu": "non" },
    { "title": "Max en a marre de sa soeur", "lu": "oui" },
    { "title": "Max et Lili décident de mieux manger", "lu": "non" },
    { "title": "Max et Lili ont du mal à se concentrer", "lu": "non" },
    { "title": "La copine de Lili est en famille d'accueil", "lu": "non" },
    { "title": "Max et Lili n'osent pas parler en public", "lu": "non" },
    { "title": "Max et Lili veulent rester en vacances", "lu": "non" },
    { "title": "Max et Lili disent que c'est pas de leur faute", "lu": "non" },
    { "title": "Lili veut jouer au foot", "lu": "oui" },
    { "title": "Les parents de Max et Lili sont accros au portable", "lu": "oui" },
    { "title": "Max et Lili ont peur du noir", "lu": "non" },
    { "title": "Max se sent seul", "lu": "oui" },
    { "title": "Max et Lili veulent soigner tout le monde", "lu": "non" },
    { "title": "Max et Lili aiment trop rire", "lu": "non" },
    { "title": "Max et Lili veulent se debrouiller seuls", "lu": "oui" },
    { "title": "Max croit n'importe quoi", "lu": "non" },
    { "title": "Max et Lili font les baby sitters", "lu": "non" }
    ];

data.forEach((item, index) => {
    var row = dataTable.insertRow();
    row.insertCell(0).innerHTML = index+1;
    row.insertCell(1).innerHTML = item.title;
    row.insertCell(2).innerHTML = '<button  class="flat" onClick="AffCouv('+(index+1)+')"><img class="lili" src="ico-lili.png"></button>';
    row.insertCell(3).innerHTML = item.lu;
    if (item.lu === "oui") row.className = "lu";
  });

const closeModal = document.querySelector(".dialog-close");
const modal = document.querySelector("#modal");
const imgCouverture = document.querySelector("#couverture");

closeModal.addEventListener('click', () => { 
  modal.close();
});

function AffCouv( item ) {
  // conversion en chaine formatée avec des zéros à gauche
  var sItem = item.toString()
  if (item < 10) sItem = "00" + sItem
    else if(item < 100) sItem = "0" + sItem;
  var imgUrl = "./maxetlili/max-et-lili_" + sItem + ".jpg"
  imgCouverture.src = imgUrl

  modal.showModal();

  console.log(sItem)
}