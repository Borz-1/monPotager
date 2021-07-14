
/* Partie JavaScript du projet LIFSTAGE*/



/* ******************************************************************
 * Gestion de la partie slider (prodtuits principaux)
 ******************************************************************** */

/**
 * Gestion du click sur les boutons gauche droite, fait 
 * appel à gestionClickSlider ou gestionClickSliderInverse,
 * Remarque: j'aurais pu mettre qu'un seul bouton en absolute
 * et ne faire changer que le reste.
 *
 * @param {Etat} etatCourant l'état courant
 */
function majSlider(etatC){
  document.getElementById("btn-PP-d1").addEventListener(
    'click', () =>gestionClickSlider(etatC));

  document.getElementById("btn-PP-d2").addEventListener(
    'click', () =>gestionClickSlider(etatC));

  document.getElementById("btn-PP-d3").addEventListener(
    'click', () =>gestionClickSlider(etatC));

  document.getElementById("btn-PP-g1").addEventListener(
    'click', () =>gestionClickSliderInverse(etatC));

  document.getElementById("btn-PP-g2").addEventListener(
    'click', () =>gestionClickSliderInverse(etatC));

  document.getElementById("btn-PP-g3").addEventListener(
    'click', () =>gestionClickSliderInverse(etatC));
}



/**
 * Permet le changement d'image du slider lors d'un click
 * sur la flèche de droite, met à jour l'etat courant.
 *
 * @param {Etat} etatCourant l'état courant
 */
const gestionClickSlider =(etatC)=>{

    // console.log("CALL gestionClickSlider");
    const Fraise = document.getElementById("produits-principaux-fraise");
    const Asperge = document.getElementById("produits-principaux-asperge");
    const Courgette = document.getElementById("produits-principaux-courgette");


    if(etatC.boolFraise){
        // console.log("fraise");
        Fraise.style.display="none";
        Asperge.style.display="block";
        etatC.boolFraise=false; etatC.boolAsperge=true; 
    }else if(etatC.boolAsperge){
        // console.log("Asperge");
        Asperge.style.display="none";
        Courgette.style.display="block";
        etatC.boolAsperge=false; etatC.boolCourgette=true; 
    }else{
        // console.log("Courgette");
        Courgette.style.display="none";
        Fraise.style.display="block";
        etatC.boolCourgette=false; etatC.boolFraise=true; 
    }
}



/**
 * Permet le changement d'image du slider lors d'un click
 * sur la flèche de gauche, met à jour l'etat courant.
 *
 * @param {Etat} etatCourant l'état courant
 */
function gestionClickSliderInverse(etatC){

    // console.log("CALL gestionClickSlider");
    const Fraise = document.getElementById("produits-principaux-fraise");
    const Asperge = document.getElementById("produits-principaux-asperge");
    const Courgette = document.getElementById("produits-principaux-courgette");
   
    
    if(etatC.boolFraise){
        // console.log("fraise");
        Fraise.style.display="none";
        Courgette.style.display="block";
        etatC.boolFraise=false; etatC.boolCourgette=true; 
    }else if(etatC.boolCourgette){
        // console.log("Courgette");
        Courgette.style.display="none";
        Asperge.style.display="block";
        etatC.boolCourgette=false; etatC.boolAsperge=true; 
    }else{
        // console.log("Courgette");
        Asperge.style.display="none";
        Fraise.style.display="block";
        etatC.boolAsperge=false; etatC.boolFraise=true; 
    }
}




/* ******************************************************************
 * Gestion de la partie menu pour mobile
 ******************************************************************** */

/**
 * Affiche le menu lors d'un click sur le bouton de menu,
 * permet la fermeture lors d'un click sur la croix.
 *
 * @param {Etat} etatCourant l'état courant
 */
function majMenuMobile(etatC){
  const mobileBtn = document.getElementById('mobile-cta');
  const nav = document.querySelector('nav');
  const mobileExit = document.getElementById('mobile-exit');

  mobileBtn.addEventListener('click', ()=> {
    nav.classList.add('menu-btn');
    nav.classList.add('scroll-menu');
  });
        
  mobileExit.addEventListener('click', ()=> {
    nav.classList.remove('menu-btn');
    nav.classList.remove('scroll-menu');
  });
}



/* ******************************************************************
 * Gestion du tableau d'affichage des produits
 ******************************************************************** */

/**
 * Effectue une requête sur le serveur qui récupère
 * les informations nécaissaires et les place sur 
 * le tableau.
 *
 * @param {Etat} etatCourant l'état courant
 */
function fetchAfficheTableProduits(etatC){
  const idBodyTableau = document.getElementById('tab-body-produits');

  fetch('http://localhost:3000/posts').then(result =>{
    return result.json();
  })
  .then(data => data.map( x => {
    idBodyTableau.innerHTML+= `<tr>
                        <td>${x.nom}</td>
                        <td class="origineProduitTableau">${x.origine}</td>
                        <td>${x.variete}</td>
                  </tr>`;
    })
  ); 
}





/* ******************************************************************
 * Gestion de la page
 ******************************************************************** */


/**
 * Permet la mise à jour de la page en faisant appel 
 * à différentes fonctions.
 *
 * @param {Etat} etatCourant l'état courant
 */
function majPage(etatCourant) {

  console.log("CALL majPage");
  majSlider(etatCourant);
  majMenuMobile(etatCourant);
  fetchAfficheTableProduits(etatCourant);
}



/**
 * Permet l'initialisation avec la création 
 * de l'état courant. Appel majPage et
 * permet la rotation du slider toutes les 
 * 10 secondes.
 *
 * @param {Etat} etatCourant l'état courant
 */
function initClientPotager(){
  console.log("CALL initClientPotager");
  const etatInitial = {
    boolFraise: true,
    boolAsperge: false,
    boolCourgette: false,
  };
  majPage(etatInitial);
  setInterval( () =>gestionClickSlider(etatInitial) , 10000);
}




/**
 * Permet le lancement du site en appellant initClientPotager.
 */
document.addEventListener("DOMContentLoaded", () => {
  console.log("Exécution du code après chargement de la page");
  initClientPotager();

});

 