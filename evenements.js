import Formulaire from "./formulaire.js";

//creer le formulaire

export const formulaire = new Formulaire('formulaire');

formulaire.maskChamp('societe');
formulaire.maskChamp('email');

//addEventListener pour changer le comportement en fonction du radio coche

formulaire.getElement('particulier').addEventListener('change', () => {formulaire.hideChamp('societe')});
formulaire.getElement('professionnel').addEventListener('change', () => {formulaire.showChamp('societe')});

//addEventListener pour changer le comportement en fonction de l'objet

formulaire.getElement('objet').addEventListener('change', () => {formulaire.isSelected('objet', "demande_de_contact", () => formulaire.showChamp('email'), () => formulaire.hideChamp('email'))});

//addEventListener pour recuperer les donnees du formulaire

formulaire.formulaireHtml.addEventListener('submit',
    (event) => {
        event.preventDefault();
        formulaire.affAnswers();
        console.log(formulaire.answers);
    }
)