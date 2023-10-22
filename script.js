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
        "exp-1-desc": `helped on the development of a web application for a local university in Agadir to manage its annual budget expenses
        <p style="margin:0; margin-top:5px">Technologies used:</p>
        <ul class="horizontal-list">
            <li>JAVA</li>, 
            <li>SpringBoot,  </li>
            <li>Angular/ Ts/ Js  </li>
            <li>Rxjs,  </li>
            <li>NGRX </li>
        </ul>`,

        "exp-2-date": "Oct 2021 - Mar 2023 · 1 yr 6 mos",
        "exp-2-title": "Full Stack Web Developer",
        "exp-2-desc": `development of a multi tenant Saas platform for (deploying, monitoring) on <span>AWS</span>: 
        <ul class="styled-list">
        <li> <span>created</span> a solution for <span>multi-tenancy</span>.</li>
        <li> <span>created</span> an <span>iam</span> solution to add <span>fine grained authorization rules<span> based on model roles.</li>
        <li> secure <span>secrets</span> by using <span>hashicorp Vault</span>.
        <li> implemented a custom <span>Keycloak authentication flow</span>, after understanding the desired authentication Logic</li>
        <li> developed a generic script to update <span>Keycloak authorization policies</span> based on realm roles.</li>
        <li> developed test cases to test deferent rest apis using <span>robot framework</span>.</li>
        <li> <span>reading</span> and <span>validating</span> coworker's code.</li>
        <li> developed a <span>generic rest api to manage files</span> in deferent </span>Cload providers</span> or for the local disck based on a config file.</li>
        <li> created different UI component or pages for the FrontEnd Part</li>
        <li> styled different UI components using Sass and CSS</li>
        </ul>
        <p style="margin:0; margin-top:5px">Technologies used:</p>
        <ul class="horizontal-list">
            <li>Angular/ TS/ JS </li>
            <li>HTML/CSS</li>
            <li>Keycloak</li>
            <li>Robot Framework</li>
        </ul>
        <ul class="horizontal-list">
            <li>Sass & CSS & Bootstrap</li>
            <li>HashiCorp Vault</li>
            <li>Python</li>
            <li>AWS(s3, EC2)</li>
        </ul>
`,

        "exp-3-date": "Feb 2023 - Present · 9 mos",
        "exp-3-title": "Software Developer",
        "exp-3-desc": `
        SKY Project : 
        <ul class="styled-list">
            <li><span>refactored</span> a <span>custom evaluator</span> in <span>Python</span> that takes JSON data as input and custom expressions to execute.</li>
            <li><span>developed</span> an <span>AWS CDK stack</span> for handling <span>WebSocket</span> connections with 
            3 <span>lambdas</span>, 1 <span>SQS queue</span>, and 1 <span>SNS topic</span> using <span>Python</span>, for sending Notifications to each Customer</li>
        </ul>

        <p style="margin: 0; margin-top: 5px">Technologies used:</p>
        <ul class="horizontal-list">
            <li>Python</li>
            <li>AWS S3</li>
            <li>SQS</li>
        </ul>
        <ul class="horizontal-list">
            <li>SNS</li>
            <li>LAMBDA FUNCTION</li>
            <li>API GATEWAY (HTTP/WEBSOCKET)</li>
        </ul>
        <div class="horizontal-border"></div>
        GO-DISTRIBUTION Project :
        <ul class="styled-list">
            <li>Developing new pages and styling components on the frontend using <span>Angular</span>.</li>
            <li><span>designed</span> and <span>Developed</span> <span>job batch</span> on the backend to update the application 
            database from a third-party application using <span>spring batch</span>.</li>
        </ul>
        <p style="margin: 0; margin-top: 5px">Technologies used:</p>
        <ul class="horizontal-list">
            <li>Spring Boot</li>
            <li>Java</li>
            <li>HTML/CSS</li>
        </ul>
        <ul class="horizontal-list">
            <li>Angular</li>
            <li>Spring batch<li>
            <li>Map Struct</li>
        </ul>
        `
    },
    'fr': {
        'title':"Protfolio de Mohamed Fatta",
        'profile':'Développeur logiciel | Web | UI | BackEnd | Cloud',
        'description': `Développeur passionné dédié à la création de solutions logicielles évolutives, 
        sécurisées et flexibles. Enclin à apprendre et à concevoir des programmes innovants qui laissent une empreinte durable.`,
        'tr-button': 'EN',
        "exp-1-date": "Nov 2021 - Oct 2021 · 11 mois",
        "exp-1-title": "Développeur Web Full Stack (Stage)",
        "exp-1-desc":  `J'ai participé au développement d'une application web pour une université locale à Agadir afin de gérer ses dépenses budgétaires annuelles.
        <p style="margin:0; margin-top:5px">Technologies utilisées :</p>
        <ul class="horizontal-list">
            <li>JAVA</li>
            <li>SpringBoot</li>
            <li>Angular/ TypeScript/ JavaScript</li>
            <li>RxJS</li>
            <li>NGRX</li>
        </ul>
        `,

        "exp-2-date": "Oct 2021 - Mar 2023 · 1 an 6 mois",
        "exp-2-title": "Développeur Web Full Stack",
        "exp-2-desc": `Développement d'une plateforme SaaS multi-locataire pour le déploiement et la surveillance sur <span>AWS</span> :
        <ul class="styled-list">
            <li> <span>Création</span> d'une solution pour la <span>multi-locataire</span>.</li>
            <li> <span>Création</span> d'une solution <span>iam</span> pour ajouter des <span>règles d'autorisation fines</span> basées sur les rôles des modèles.</li>
            <li> Sécurisation des <span>secrets</span> en utilisant <span>HashiCorp Vault</span>.</li>
            <li> Mise en place d'un <span>flux d'authentification Keycloak</span> personnalisé, après avoir compris la logique d'authentification souhaitée.</li>
            <li> Développement d'un script générique pour mettre à jour les <span>politiques d'autorisation Keycloak</span> en fonction des rôles du royaume.</li>
            <li> Développement de cas de test pour tester différentes API REST en utilisant <span>le framework Robot</span>.</li>
            <li> <span>Lecture</span> et <span>validation</span> du code des collègues.</li>
            <li> Développement d'une <span>API REST générique pour gérer des fichiers</span> dans différents <span>fournisseurs de cloud</span> ou sur le disque local en fonction d'un fichier de configuration.</li>
            <li> Création de différents composants ou pages d'interface utilisateur pour la partie frontend.</li>
            <li> Personnalisation de différents composants d'interface utilisateur en utilisant Sass et CSS.</li>
        </ul>
        <p style="margin:0; margin-top:5px">Technologies utilisées :</p>
        <ul class="horizontal-list">
            <li>Angular/ TypeScript/ JavaScript</li>
            <li>HTML/CSS</li>
            <li>Keycloak</li>
            <li>Framework Robot</li>
        </ul>
        <ul class="horizontal-list">
            <li>Sass & CSS & Bootstrap</li>
            <li>HashiCorp Vault</li>
            <li>Python</li>
            <li>AWS (S3, EC2)</li>
        </ul>
    `,

        "exp-3-date": "Fév 2023 - Présent · 9 mois",
        "exp-3-title": "Dév. Logiciel",
        "exp-3-desc": `Projet SKY :
        <ul class="styled-list">
            <li><span>refactorisé</span> un <span>évaluateur personnalisé</span> en <span>Python</span> prenant des données JSON en entrée et des expressions personnalisées à exécuter.</li>
            <li><span>développé</span> une <span>pile AWS CDK</span> pour gérer les connexions <span>WebSocket</span> avec 3 <span>lambdas</span>, 1 file <span>SQS</span> et 1 sujet <span>SNS</span> en utilisant <span>Python</span>, pour l'envoi de notifications à chaque client.</li>
        </ul>

        <p style="margin: 0; margin-top: 5px">Technologies utilisées :</p>
        <ul class="horizontal-list">
            <li>Python</li>
            <li>AWS S3</li>
            <li>SQS</li>
        </ul>
        <ul class="horizontal-list">
            <li>SNS</li>
            <li>FONCTION LAMBDA</li>
            <li>API GATEWAY (HTTP/WEBSOCKET)</li>
        </ul>
        <div class="horizontal-border"></div>
        Projet GO-DISTRIBUTION :
        <ul class="styled-list">
            <li>Développement de nouvelles pages et stylisation de composants côté frontend en utilisant <span>Angular</span>.</li>
            <li><span>conçu</span> et <span>développé</span> un <span>lot de tâches</span> côté backend pour mettre à jour la base de données de l'application à partir d'une application tierce en utilisant <span>spring batch</span>.</li>
        </ul>
        <p style="margin: 0; margin-top: 5px">Technologies utilisées :</p>
        <ul class="horizontal-list">
            <li>Spring Boot</li>
            <li>Java</li>
            <li>HTML/CSS</li>
        </ul>
        <ul class="horizontal-list">
            <li>Angular</li>
            <li>spring batch</li>
            <li>Map Struct</li>
        </ul>
`  
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
            element.innerHTML = translations[lang][key];
        }
    });
    
}

document.addEventListener('DOMContentLoaded', function(){
    // Set the initial language based on the URL path
    changeLanguage(language);
    showSlide(currentIndex)
})

function toggleLanguage(){
    const desiredLang = language  == 'en' ? 'fr' : 'en'
    changeLanguage(desiredLang )
    language = desiredLang
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

