// Sample translations, replace with your actual translations
const translations = {
    'en': {
        'title':"Mohamed Fatta's Portfolio",
        'profile':'Software Developer | Web | UI | BackEnd | Cloud',
        'description': ` Passionate developer dedicated to crafting scalable, secure, and flexible software solutions. 
        Eager to learn and create innovative programs that make a lasting impact.`,
        'tr-button': 'FR',
        "exp-1-date": "Nov 2021 - Oct 2021 · 11 mos",
        "exp-1-title": "Full Stack Web Developer (Internship)",
        "exp-1-desc": "Developed a web application for a local university in Agadir to manage its annual budget, using technologies such as JAVA, SpringBoot, Angular, Rxjs, NGRX.",

        "exp-2-date": "Oct 2021 - Mar 2023 · 1 yr 6 mos",
        "exp-2-title": "Full Stack Web Developer",
        "exp-2-desc": `development of a multi tenant Saas platform for deploying - monitoring - scaling applications using cloud technologies (aws for the moment) : 
        - implementing a solution for separating models by organisation.
        - implementing an iam solutiong to add fine grained authorization rules based on model roles.
        - secure secrets by using hashicorp Vault.
        - understanding deferent Keycloak authentication flows and emplimenting a costume one.
        - understanding Keycloak authorization schema and implementing a generic script to update authorization policies based on realm roles.
        - creating test cases to test deferent rest apis using robot framework.
        - reading and validating coworker's code.
        - implementing a generic rest api to manage files in deferent cload providers or for the local disck based on a config file.`,

        "exp-3-date": "Feb 2023 - Present · 9 mos",
        "exp-3-title": "Software Developer",
        "exp-3-desc": "Faced challenges such as implementing a custom evaluator in Python that takes JSON data as input and custom expressions to execute, and implementing an AWS CDK stack for handling WebSocket connections with 3 lambdas, 1 SQS queue, and 1 SNS topic. Utilized technologies including Python, AWS S3, SQS, SNS, LAMBDA FUNCTION, and API GATEWAY (HTTP/WEBSOCKET)."
    },
    'fr': {
        'title':"Protfolio de Mohamed Fatta",
        'profile':'Développeur logiciel | Web | UI | BackEnd | Cloud',
        'description': `Développeur passionné dédié à la création de solutions logicielles évolutives, 
        sécurisées et flexibles. Enclin à apprendre et à concevoir des programmes innovants qui laissent une empreinte durable.`,
        'tr-button': 'EN',
        "exp-1-date": "Nov 2021 - Oct 2021 · 11 mois",
        "exp-1-title": "Développeur Web Full Stack (Stage)",
        "exp-1-desc": "Développement d'une application web pour une université locale à Agadir pour gérer son budget annuel, en utilisant des technologies telles que JAVA, SpringBoot, Angular, Rxjs, NGRX.",

        "exp-2-date": "Oct 2021 - Mar 2023 · 1 an 6 mois",
        "exp-2-title": "Développeur Web Full Stack",
        "exp-2-desc": `Développement d'une plateforme SaaS multi-locataire pour le déploiement, la surveillance et l'évolutivité des applications en utilisant des technologies cloud (AWS pour le moment) :
            - Implémentation d'une solution pour séparer les modèles par organisation.
            - Implémentation d'une solution IAM pour ajouter des règles d'autorisation détaillées basées sur les rôles des modèles.
            - Sécurisation des secrets en utilisant HashiCorp Vault.
            - Compréhension des différents flux d'authentification Keycloak et implémentation d'un flux personnalisé.
            - Compréhension du schéma d'autorisation Keycloak et implémentation d'un script générique pour mettre à jour les politiques d'autorisation basées sur les rôles du royaume.
            - Création de cas de test pour tester différents APIs REST en utilisant le framework Robot.
            - Lecture et validation du code de collègues.
            - Implémentation d'une API REST générique pour gérer des fichiers dans différents fournisseurs de cloud ou sur le disque local en fonction d'un fichier de configuration.`,

        "exp-3-date": "Fév 2023 - Présent · 9 mois",
        "exp-3-title": "Dév. Logiciel",
        "exp-3-desc": `Défis : [évaluateur personnalisé en Python, AWS CDK pour les connexions Websocket avec 3 lambdas, 1 SQS QUEUE, 1 SNS TOPIC]
        Techs : [Python, AWS S3, SQS, SNS, LAMBDA FUNCTION, API GATEWAY]`  
    }
};

let currentIndex = 0;
let language = "en"

// Function to change the language
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', function(){
    // Set the initial language based on the URL path
    changeLanguage(language);
    showSlide(currentIndex)
})

function toggleLanguage(){
    const nextLang =  language  == 'en' ? 'fr' : 'en'
    changeLanguage(nextLang)
    language = nextLang
}

function downloadCV() {
    console.log("language : ",language)
    const cvUrl = window.location.href + (language == 'en' ? "/cv-en.pdf" : "/cv-fr.pdf")
    const link = document.createElement('a');
    link.setAttribute('download', `mohamed-fatta-${language}-cv.pdf`);
    link.href = cvUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function navigateToProjectCode(url){
    window.open(url, '_blank')
}


function showSlide(index) {
    let cardWidth = document.querySelector('.card').offsetWidth; // Dynamically get the card width
    const cardContainer = document.querySelector('.cards');
    const translateValue = -index * cardWidth;
    cardContainer.style.transform = `translateX(${translateValue}px)`;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
}

function nextSlide() {
  const totalCards = document.querySelectorAll('.card').length; // Dynamically get the total number of cards
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
}

