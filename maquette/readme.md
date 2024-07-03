**

# Site front-end sur L'UFC

Dans le cadre d'un projet de formation, j'ai commencé a faire le front d'un site sur L'UFC.

J'ai commencé par un maquettage sur Moqups. C'est intéressant jusqu'au moment où il faut payer.
J'ai donc du prendre un screenshot de ma maquette: 
![maquette sur moqups](https://i.postimg.cc/52WD02yT/wireframe.png)Voici donc les pages qui composent le site : 

 - une page tableau avec **Gridjs**
 - une page calendrier avec **FullCalendar**
 - une page **index** classique
 - une page **contact** avec un formulaire

## Gridjs

J'ai ensuite commencé par une vague structuration en HTML de toutes mes pages, puis j'ai attaqué la page "fighter.html". Sur cette page, j'avais pour consigne d'utiliser Gridjs, une librairie qui permet d'afficher des tableaux facilement en JavaScript.
J'ai donc utilisé un `fetch` pour appeler le JSON qui contiens les informations demandé.
Les données contenus dans le JSON étant trop nombreuses, j'ai entrepris de créer un bouton pour afficher des informations supplémentaires.
Pour ce faire, j'ai utilisé un bouton fourni par la doc de Gridjs, m'affichant un modal avec toutes les informations pertinentes.
Le soucis, c'est qu'on ne peux pas changer les informations contenu dans un modal sans recharger la page. J'ai alors créer une fonction pour créer un modal, avec une "id" unique.
![code de création de modal](https://i.postimg.cc/JnF2W1ST/code-create.jpg)
Après ça, il ne me restait plus qu'a y mettre les données, grâce a la 1ère colonne (caché) de mon tableau Grid, et une boucle `for` (pour récupérer l'index du tableau associatif qui compose le JSON).
![boucle for pour les modals](https://i.postimg.cc/G3WbFr9J/boucle-for-grid.jpg)
![screen du modal](https://i.postimg.cc/htrgRdsp/screen-modal.jpg)

## FullCalendar

Ensuite, je me suis attaqué à la page calendrier. La consigne était d'utiliser FullCalendar pour y afficher les dates contenus dans un fichier JSON.
Sur le principe, il suffit d'un `fetch`, d'une boucle `for` pour récupérer les données dans un autre tableau, avec les noms d'index requis par FullCalendar, à savoir `title` et `start`.
Cependant, FullCalendar et sa superbe doc n'indiquent pas qu'il ne supporte pas les fonction `async`, ce qui m'a fait perdre beaucoup de temps.
![code calendrier](https://i.postimg.cc/gcZ0N7VM/calendar.jpg)

**
