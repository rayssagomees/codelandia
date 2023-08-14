// content page
const titlePage = `Carolina Gomes`;
var subtitlePage = ` // Transformando ideias em código`;

// favicon page
const faviconPage = document.createElement('link');
faviconPage.rel = 'shortcut icon';
faviconPage.href = '../favicon.svg';
faviconPage.type = 'image/x-icon';
document.head.appendChild(faviconPage);

// logo page
const logoPage = 'src/images/ch022-codelandia/logo.svg';
const altLogoPage = 'Logo Codelândia'

// social links
const codelandiaDiscordLinkCta = 'Comunidade';
const codelandiaDiscordLink = 'https://discord.gg/QevDJqCzaY';
const githubCta = 'Meu GitHub';
const githubLink = 'https://github.com/carolinngomes';

// projects section
const descriptionImageProject = 'Imagem do projeto';
const projectLiveCta = 'Live';
const projectRepositoryCta = 'Code';
const projectRepositoryLinks = 'https://github.com/carolinngomes/desafio-codelandia';
var projectImages = [
    'ch022-codelandia/ch001-blog.png', 
    'ch022-codelandia/ch002-jordanshoes.png', 
    'ch022-codelandia/ch003-onepage.png', 
    'ch022-codelandia/ch004-login.png', 
    //'ch022-codelandia/live-project.svg', 
    //'ch022-codelandia/ch006-loki.png', 
    //'ch022-codelandia/live-project.svg', 
    //'ch022-codelandia/ch009-portfolio.png', 
    //'ch022-codelandia/live-project.svg',
    'ch022-codelandia/ch035-orkut-login.png',
];
var projectTitles = [
    'Blog', // Desafio 01
    'JordanShoes', // Desafio 02    
    'OnePage', // Desafio 03
    'Login', // Desafio 04
    //'Studio Ghibli', // Desafio 05
    //'Loki', // Desafio 06
    //'Valorant', // Desafio 07
    //'Portifólio', // Desafio 09
    //'Anime',// Desafio 29
    'Orkut: Login',// Desafio 35
];
var projectLiveLinks = [
    'ch001-blog', 
    'ch002-jordanshoes', 
    'ch003-onepage', 
    'ch004-login', 
    //'ch005-studioghibli', 
    //'ch006-loki', 
    //'ch007-valorant', 
    //'ch009-portfolio', 
    //'ch029-anime',
    'ch035-orkut-login',
];

// content footer
const iconLogoPage = 'src/images/ch022-codelandia/logo_33.svg';
const licenseFooter = ` // Codelândia`;