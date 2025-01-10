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