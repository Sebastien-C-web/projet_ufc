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
Cependant, FullCalendar et sa superbe doc n'indiquent pas qu'il ne supporte pas les fonction `async`. Il fallait donc faire un `fetch` non-asynchrone.
![code calendrier](https://i.postimg.cc/gcZ0N7VM/calendar.jpg)
Une fois la boucle for terminé, il suffit de mettre notre nouveau tableau dans le paramètre `event` de FullCalendar.
On a donc un calendrier simple, mais fonctionnel.

## Index
Après avoir fini les 2 pages précédentes, je me suis mit sur l'index. 
Le but était d'avoir une navbar dans une page unique et de l’appeler sur toutes les autres pages, mais seulement grâce au Javascript.
Pour cela, j'ai utilisé une fonction trouvé sur w3, qui récupère tout les éléments HTML d'une page, pour les inclure dans un élément HTML avec un certain attribut.
![la fonction en question](https://i.postimg.cc/d0JDpr2Q/code-include.jpg)
Cette méthode est fonctionnel.
Cependant, je n'ai pas réussi a créer une fonction JavaScript qui gère le responsive du menu alors qu'il est importé.
J'ai alors laissé tombé cette méthode d'import pour ma navbar (j'utilise quand même ce script pour le footer) pour la rendre responsive.

Une fois la navbar terminé, je me suis attaqué au carrousel que j'avais prévu sur ma maquette.
J'ai utilisé **SplideJs**, qui est vraiment très simple d'utilisation.
Il suffisait de mettre les images en `background-image`pour pouvoir mettre des textes cliquables dans le carrousel. Un moyen simple d'inciter l'utilisateur a visiter les autres pages du site.
![un screenshot du carrousel](https://i.postimg.cc/13R5mPds/screen-carrousel.jpg)
Ensuite, en accord avec ma maquette, j'ai voulu mettre quelques articles sur l'UFC, à commencer par une courte description de L'UFC, puis l'annonce des prochains matchs, contenus dans le JSON qui a servi a faire le calendrier.
J'ai d’abord fait un texte défilant en CSS, puis 2 articles indiquant les prochains matchs.
Pour cela j'ai encore utilisé un `fetch`, puis la même méthode que pour le FullCalendar, a savoir créer un tableau vide, et y mettre les informations qui m’intéressait (à savoir les dates des 2 évènements futurs les plus proches de la date actuelle, et le nom du match).
![la fonction pour les news](https://i.postimg.cc/pLgWD8TX/fonction-upcoming.jpg)
Dans cette fonction, j'ai comparé la date actuelle à la date des données, pour inclure dans le nouveau tableau seulement les évènements futurs.
De cette façon, les 2 évènements les plus proches sont forcément à l'index 0 et 1 du nouveau tableau, ce qui les rends très simple à afficher. 
J'ai notamment appris qu'on ne peut pas insérer du code HTML dans un nœud dont le parent est un `document. avec la fonction .innerHTML`.
Une fois les articles terminés, l'index était fini. Il ne me restait plus que le formulaire de la page contact.

## Contact

La page contact est probablement la page la plus simple du site. 
Il suffit d'un formulaire "non-fonctionnel", dans le sens où ce projet est uniquement axé sur le front-end.
Je me suis posé la question de quoi demander à un utilisateur d'un site sur le thème de l'UFC.
Après une courte réflexion, j'ai finalement demandé un nom, un e-mail, une situation (journaliste, combattant ou autre) grâce a une `imput radio` et un `textarea` pour le contenu.
![screen de la page contact](https://i.postimg.cc/2jZzpFcw/screen-contact.jpg)
Il était très simple de le rendre responsive, en utilisant `flex-direction:column;`pour les petits écrans.


**
