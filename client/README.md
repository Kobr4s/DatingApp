# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Component

ng g --help // Avoir le guide d'aide pour générer
ng g c {nom} --dry-run //Créer un nouveau composant qui va créer 4 nouveau fichiers (dont un de test) et met a jour le fichier module
ng g c {nom} --skip-tests --dry-run // Créer 3 nouveaux sans celui des tests et met a jour le fichier module
L'option --dry-run ne fait aucune modification et il faut l'enlever de la commande afin de créer les fichiers

Pour les composants bnootstrap il est possible d'utilser le site ngx bootstrap et d'installer les composants automaiquement dans l'onglet API ou manuelle si les ppaquets ne sont pas encore mis a jour pour la derniere version d'angular

## Services

ng g s {localisation} --skip-tests // Permet de créer un service a l'endroit que l'on a choisi

## Observables

Revoir lesson 56

## Persistance

on va stocker nos datas dans le stockage du navigateur

## Comunication PArent Enfant / Enfant parent

Voir lesson 61 et 62 pour la syntaxe

## Map Function

Fonction register par exemple si on a besoin d'utiliser la valeur de retour de notre requete http il faut la retourner la fonction map avant sinon elle sera undefined
Ceci est un exemple si on veut l'utiliser dans le next du subscribe du register dans register.component.ts il faut le retourner dans la fonction map du register dans l'accountservices

## Angular Guards

Permet de sécuriser des liens afin que les utilisateurs non autorisé ne puisse rejoindre une page dus site

ng g g rep nomfichier

# Modules

Pour créer un module ng g m rep => ng g m \_modules/shared va créer le répertoire \_modules/shared et un fichier shared.modules.ts

ng g m \_modules/shared --flat va créer un rep \_modules et un fichier shared.modules.ts

## Gestion des Erreurs MiddleWare

Création d'un rep et une classe pour gérer les erreurs
Ensuite création d'un dossiter middleware et d'une classe pour les gerer

La méthode InvokeAsync doit etre appelée ainsi pour qu'elle soit reconnue et le parametre httpContext va permettre d'avoir access a la requete qui est en train de passer par le middleware

Au niveau du client création d'un composant error

Pour installer un intercepteur d'erreur qui va permettre de les intercepter et de les afficher via le toastr a l'utilisateur pour lui dire qu'il n'est pas autorisé de faire ce qu'il a tenté

ng g interceptor \_interceptors/error --skip-tests => le nom du repertoire peut etre différent

Ensuite pour loader un interceptor il faut l'ajouter dans le fichier app.Module dans providers

## Repository Pattern

C'est une couche en plus entre le controller et le dbcontext qui va contenir la logique DB

## AutoMapper

Outil qui va permettre d'ecrire moins de code et gérer nos relations
Class de depart vers classe ou on va => CreateMap<depart, arrivée>()
Creation d'un rep helpers avec une class automapperprofiles

AppUser a une prop dateofBirth et memberdto une prop Age
=> vu qu'on a créer une fonction getAge dans appuser, automapper est assez intelligent pour savoir que c'est en relation => d'ou l'importance du nom de la fonction.

Ensuite, il faut ajouter le service automapper dans le fichier application services Extension

Dans le controller ou l'on veut utiliser automapper l'injecter dans le constructeur voir userController

On a rajouter un champ dans memberDto pour l'url de la photo et étant donné que celui-ci ne correspond a aucun champ d'un appuser, automapper ne sait rien faire avec et sa valeur est nulle.
Afin de lui assigner une valeur il faut l'indiquer dans le fichier automapper et ajouter la fonction formember a notre createmap

## Section 8 SUmmary

Entity Fmk relationship -> AppUser - Photo
Entinty FMW convention -> Définition de la relation entre user et photo en s'assurant qu'une photo ne peut etre ajouté que pour un user
Seeding data in Database
Repository pattern -> Ajoute une couche d'abstraction entre nos controller et la DB
Auto mapper

## Renomage

Si apres un soucis de case apres avoir renommer un fichier => utiliser la commande developper relaod window

## Generateur

Il existe sur le net des generateurs par exemple object json en interface TS

## Environments

ng g environments permet de créer deux fichiers ou l'on va stocker des valeurs un pour le dev et un pour la prod

on va y stocker la valeur de notre url par exemple

## Bootstrap

Pour ajouter un composant boostrap angular allez sur le site ngx-bootstrap, choisir son composant puis l'ajouter dans le fichier sharedmodule

## Upload photo pour angular

pour la version 16 on a installé ng gallery pour les photos

## Section 9 SUmmary

Usingf typescrit type
use interceptors token => qui va récupérer les données du token pour nous
use bootstrap
photo third party

## View child

Pour le composant member-edit on a un formulaire et afin de reset la box d'alert et de desactiver notre bouton, on aimerait reset ca dans notre fonction updateMember mais on n'a pas access a notre formulaire.

Afin d'y avoir access on va utilser @ViewChild Décorator

## Update

En mode dev, les updates se font instantatnément mais en mode prod, il faut laisser un certain délai pour contacter le server c'est pour cela qu'on ajouter des spinner de cahrgement afin de mettre en place le delai apres la modification d'un profil user par exemple
Ajout du spinner dans le fichier angular.json puis dans le fichier sharedmodule et ensuite creation d'un service busy

Création d'un nouvel interceptor loading afin de capter ces requetes

Attention les services sont disponible toute la durée de vie de notre application tandis que les composants sont détruits a chaque fois

Nous allons stocker les infos de la liste dans le service member afin de ne pas devoir les rechargé en permanence et ainsi ils seront disponible toute la durée de notre application que si on les avait stocké dans notre composant member list ils seraient detruits
