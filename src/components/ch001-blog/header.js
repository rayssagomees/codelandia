// create header
const header = document.createElement('header');
header.className = 'flex-center-column gradient';

// header > contentDiv
const contentDiv = document.createElement('div');
contentDiv.className = 'flex-spacebetween width';

// header > contentDiv > titleH1
const titleH1 = document.createElement('h1');
titleH1.innerText = 'Blog';
contentDiv.appendChild(titleH1);

// header > contentDiv > labelInputSwitch
const labelInputSwitch = document.createElement('label');
labelInputSwitch.setAttribute('for', 'switch');
labelInputSwitch.id = 'iconTheme';

// header > contentDiv > labelInputSwitch > inputSwitch
const inputSwitch = document.createElement('input');
inputSwitch.type = 'checkbox';
inputSwitch.name = 'switch';
inputSwitch.id = 'switch';
labelInputSwitch.appendChild(inputSwitch);

// header > contentDiv > labelInputSwitch > inputSwitch > iconSwitchColor
const iconSwitchColor = document.createElement('i');
iconSwitchColor.className = 'fi fi-rr-eclipse';
labelInputSwitch.appendChild(iconSwitchColor);

contentDiv.appendChild(labelInputSwitch);

// header > searchDiv
const searchDiv = document.createElement('div');
searchDiv.className = 'margin';

// header > searchDiv > searchContainer
const searchContainer = document.createElement('div');
searchContainer.className = 'quadro-icone flex-center-center width';
searchDiv.appendChild(searchContainer);

const searchIcon = document.createElement('i');
searchIcon.className = 'fi fi-rr-search';
searchContainer.appendChild(searchIcon);

const searchInput = document.createElement('input');
searchInput.type = 'search';
searchInput.name = 'search';
searchInput.id = 'search';
searchInput.placeholder = 'O que você está procurando?';
searchInput.onkeyup = 'search';
searchInput.autocomplete = 'off';
searchContainer.appendChild(searchInput);

// DOM
header.appendChild(contentDiv);
header.appendChild(searchDiv);
document.body.appendChild(header);