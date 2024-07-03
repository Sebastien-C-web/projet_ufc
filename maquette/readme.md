**

# Site front-end sur L'UFC

Dans le cadre d'un projet de formation, j'ai commencé a faire le front d'un site sur L'UFC.

J'ai commencé par un maquettage sur Moqups. C'est intéressant jusqu'au moment où il faut payer.
J'ai donc du prendre un screenshot de ma maquette: ![maquette sur moqups](https://imgur.com/a/IMKtKVn)

## Gridjs

J'ai ensuite commencé par une vague structuration en HTML de toutes mes pages, puis j'ai attaqué la page "fighter.html". Sur cette page, j'avais pour consigne d'utiliser Gridjs, une librairie qui permet d'afficher des tableaux facilement en JavaScript.
J'ai donc utilisé un "fletch" pour appeler le JSON qui contiens les informations demandé.
Les données contenus dans le JSON étant trop nombreuses, j'ai entrepris de créer un bouton pour afficher des informations supplémentaires.
Pour ce faire, j'ai utilisé un bouton fourni par la doc de Gridjs, m'affichant un modal avec toutes les informations pertinentes.
Le soucis, c'est qu'on ne peux pas changer les informations contenu dans un modal sans recharger la page. J'ai alors créer une fonction pour créer un modal, avec une "id" unique.
![code de création de modal](https://imgur.com/a/mBHofbZ)
Après ça, il ne me restait plus qu'a y mettre les données, grâce a la 1ère colonne (caché) de mon tableau Grid, et une boucle "for" (pour récupérer l'index du tableau associatif qui compose le JSON).
![boucle for pour les modals](https://imgur.com/a/q0TIdlU)
![screen du modal](https://imgur.com/a/yD4ahpL)

## FullCalendar

    

**
