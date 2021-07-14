
var etat = {
    boolFraise: true,
    boolAsperge: false,
    boolCourgette: false,
};

document.getElementById("btn-PP-d1").addEventListener('click', () =>gestionClickSlider());
document.getElementById("btn-PP-d2").addEventListener('click', () =>gestionClickSlider());
document.getElementById("btn-PP-d3").addEventListener('click', () =>gestionClickSlider());
document.getElementById("btn-PP-g1").addEventListener('click', () =>gestionClickSliderInverse());
document.getElementById("btn-PP-g2").addEventListener('click', () =>gestionClickSliderInverse());
document.getElementById("btn-PP-g3").addEventListener('click', () =>gestionClickSliderInverse());



const gestionClickSlider =()=>{

    // console.log("CALL gestionClickSlider");
    const Fraise = document.getElementById("produits-principaux-fraise");
    const Asperge = document.getElementById("produits-principaux-asperge");
    const Courgette = document.getElementById("produits-principaux-courgette");


    if(etat.boolFraise){
        // console.log("fraise");
        Fraise.style.display="none";
        Asperge.style.display="block";
        etat.boolFraise=false; etat.boolAsperge=true; 
    }else if(etat.boolAsperge){
        // console.log("Asperge");
        Asperge.style.display="none";
        Courgette.style.display="block";
        etat.boolAsperge=false; etat.boolCourgette=true; 
    }else{
        // console.log("Courgette");
        Courgette.style.display="none";
        Fraise.style.display="block";
        etat.boolCourgette=false; etat.boolFraise=true; 
    }
}

function gestionClickSliderInverse(){

    // console.log("CALL gestionClickSlider");
    const Fraise = document.getElementById("produits-principaux-fraise");
    const Asperge = document.getElementById("produits-principaux-asperge");
    const Courgette = document.getElementById("produits-principaux-courgette");
   
    
    if(etat.boolFraise){
        // console.log("fraise");
        Fraise.style.display="none";
        Courgette.style.display="block";
        etat.boolFraise=false; etat.boolCourgette=true; 
    }else if(etat.boolCourgette){
        // console.log("Courgette");
        Courgette.style.display="none";
        Asperge.style.display="block";
        etat.boolCourgette=false; etat.boolAsperge=true; 
    }else{
        // console.log("Courgette");
        Asperge.style.display="none";
        Fraise.style.display="block";
        etat.boolAsperge=false; etat.boolFraise=true; 
    }
}

setInterval(gestionClickSlider, 10000);


// gestion de la fenetre de menu (version mobile)

const mobileBtn = document.getElementById('mobile-cta');
const nav = document.querySelector('nav');
mobileExit = document.getElementById('mobile-exit');

        // mobileBtn.onclick= function(){
        //     nav.style.display='block';
        // };

        // mobileExit.addEventListener('click', ()=> {
        //     nav.style.display='none';
        // });

        
        
mobileBtn.addEventListener('click', ()=> {
    nav.classList.add('menu-btn');
    nav.classList.add('scroll-menu');
});
        
mobileExit.addEventListener('click', ()=> {
    nav.classList.remove('menu-btn');
    nav.classList.remove('scroll-menu');
});




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
  
  

