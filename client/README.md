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
