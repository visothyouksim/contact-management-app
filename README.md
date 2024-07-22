# Gestion de Contact

Ce projet est une application de gestion de contacts développée avec Angular et Ionic. L'application permet d'ajouter, modifier, supprimer et rechercher des contacts, ainsi que de sauvegarder les données localement.

## Table des matières

1. [Installation](#installation)
2. [Initialisation du Projet](#initialisation-du-projet)
3. [Fonctionnalités Principales](#fonctionnalités-principales)
4. [Structure du Projet](#structure-du-projet)
5. [Explications des Composants](#explications-des-composants)

## Installation

Pour installer et exécuter ce projet localement, suivez les étapes ci-dessous :

### Prérequis

- Node.js (21.7.1)
- npm (10.8.1)
- Angular CLI (18.1.1)
- Ionic CLI (7.2.0)

### Étapes d'Installation

1. **Clonez le dépôt GitHub :**

   ```bash
   git clone https://github.com/votre-utilisateur/gestion-de-contact.git

2. **Naviguez dans le répertoire du projet :**
   ```bash
   cd contact-management-app

3. ** Installez les dépendances :**
   ```bash
   npm install

### Initialisation du projet

Après avoir installé les dépendances, initialisez et lancez le projet avec les commandes suivantes :

Ouvrir l'application en mode développement :

    ionic serve



Cette commande démarrera un serveur de développement et ouvrira l'application dans votre navigateur par défaut à l'adresse http://localhost:8100.


### Fonctionnalités Principales

1. Ajouter un Contact
   
Vous pouvez ajouter un nouveau contact en remplissant le formulaire de la section "Ajouter un contact" et en cliquant sur le bouton "Ajouter".

2. Modifier un Contact
   
Séléctionnez un contact. Pour modifier un contact existant, cliquez sur le bouton de modification à côté des détails du contact. Cela vous redirigera vers une page de modification où vous pourrez mettre à jour les informations du contact et cliquer sur "Modifier" pour enregistrer les modifications. Un bouton "Annuler" est également présent pour revenir à la page principale sans enregistrer les modifications.

3. Supprimer un Contact
   
Pour supprimer un contact, cliquez sur le bouton de suppression (icône de cercle avec une croix) à côté du contact dans la liste.

4. Rechercher des Contacts
   
Utilisez la barre de recherche en haut de la liste des contacts pour filtrer les contacts en fonction du nom ou du prénom.

5. Sauvegarde Locale
    
Les contacts sont sauvegardés localement dans le navigateur via localStorage. Ainsi, vos contacts seront disponibles même après avoir fermé et rouvert l'application.

### Structure du Projet

Voici un aperçu de la structure du projet :

    ```bash
    gestion-de-contact/
    ├── src/
    │   ├── app/
    │   │   ├── edit-contact/
    │   │   │   ├── edit-contact.component.html
    │   │   │   ├── edit-contact.component.scss
    │   │   │   ├── edit-contact.component.ts
    │   │   ├── models/
    │   │   │   ├── contact.model.ts
    │   │   ├── app.component.html
    │   │   ├── app.component.scss
    │   │   ├── app.component.ts
    │   │   ├── app.module.ts
    │   │   ├── app-routing.module.ts
    │   ├── assets/
    │   ├── environments/
    │   ├── index.html
    │   ├── main.ts
    │   ├── styles.scss
    ├── .gitignore
    ├── angular.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json


### Explications des Composants

1. AppComponent
   
Le composant principal de l'application qui gère l'ajout, la suppression, la sélection et la recherche de contacts. Il contient le formulaire d'ajout de contact et la liste des contacts.

2. EditContactComponent

Le composant de modification de contact qui permet de mettre à jour les informations d'un contact existant. Il utilise le même modèle de formulaire que pour l'ajout de contact et redirige vers la page principale après la modification ou l'annulation.

3. Contact Model

Le modèle de données pour les contacts, situé dans src/app/models/contact.model.ts.

    ```bash
    export interface Contact {
      nom: string;
      prenom: string;
      email: string;
      telephone: string;
      adresse: string;
    }

### Conclusion

Ce projet de gestion de contacts est une application simple mais complète pour gérer vos contacts. Elle utilise Angular et Ionic pour une expérience utilisateur fluide et moderne. N'hésitez pas à contribuer ou à poser des questions en ouvrant des issues sur le dépôt GitHub.

Merci d'utiliser l'application de gestion de contacts !


### Notes :
- Assurez-vous de remplacer les URL et les chemins spécifiques par ceux de votre projet.
- Ce README fournit un guide complet pour l'installation, l'initialisation, et l'utilisation des principales fonctionnalités de l'application.



    
