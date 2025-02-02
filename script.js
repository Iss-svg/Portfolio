//On donne l'url du site a appeller
fetch('data.json')
    .then((rep) => {
        //javascript reçoit unne reponse de l'api (object js pas exploitable directement)=> il faut le transformer en json
        return rep.json()
    })
    .then(donnee => {
        //ensuite j'ai access ici à ma donnée
        console.log(donnee)
        //ici j'ai une liste de produit
        //je boucle sur le tableau de données :
        donnee.forEach(recette => {
            affiche(recette)

          
            
        });

        



    })

    // ** Fonction : afficher **
// Rôle : Afficher une recette dans la page HTML en le stylisant, sous forme de cartes ou d'autres composants visuels
// Paramètre : "prod",  un objet représentant un produit contenant les informations des recettes
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)

function affiche(recette) {
    console.log(recette.nomProjet)
    console.log(recette.descriptionProjet)
    console.log(recette.date)
    console.log(recette.hardSkill)
    console.log(recette.grpindividuel)
 };