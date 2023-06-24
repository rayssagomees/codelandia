const main = document.createElement('main');
main.className = 'flex-center-center';

const containerMain = document.createElement('div');
containerMain.className = 'width-container flex-spacebetween-center-row';

const leftDiv = document.createElement('div');
leftDiv.className = 'cta-image';

const contentDiv = document.createElement('div');
contentDiv.className = 'background-shadow flex-end';
const ctaDescription = document.createElement('h2');
ctaDescription.innerText = 'Conecta-se aos seus amigos e familiares usando recados e mensagens instantâneas';

contentDiv.appendChild(ctaDescription);
leftDiv.appendChild(contentDiv);

containerMain.appendChild(leftDiv);

///////////////////////////////////////////////////////////////
const rightDiv = document.createElement('div');
rightDiv.className = 'container-background flex-center-center-column login-container';

const iconLogoOrkut = document.createElement('img');
iconLogoOrkut.src = '../src/images/ch035-orkut-login/icon-orkut.png';
iconLogoOrkut.alt = 'Ícone do Orkut';

const titleLogin = document.createElement('h3');
titleLogin.innerText = 'Acesse o Orkut ';

const form = document.createElement('form');

const inptName = document.createElement('input');
inptName.placeholder = 'Nome';
inptName.type = 'name';

const inptEmail = document.createElement('input');
inptEmail.placeholder = 'E-mail';
inptEmail.type = 'email';

const checkboxContainer = document.createElement('div');
checkboxContainer.style.width = '100%';

const inptCheck = document.createElement('input');
inptCheck.type = 'checkbox';
inptCheck.style.width = '10%';
checkboxContainer.appendChild(inptCheck);

const label = document.createElement('label');
label.innerText = 'Lembrar minha senha';
checkboxContainer.appendChild(label);

const inptSubmit = document.createElement('input');
inptSubmit.type = 'submit';
inptSubmit.value = 'Entrar na conta';

const btnSignUp = document.createElement('button');
btnSignUp.innerText = 'Criar uma conta';

const btnForgotPassword = document.createElement('a');
btnForgotPassword.innerText = 'Esqueci a minha senha';


rightDiv.appendChild(iconLogoOrkut);
rightDiv.appendChild(titleLogin);
rightDiv.appendChild(form);
rightDiv.appendChild(inptName);
rightDiv.appendChild(inptEmail);
rightDiv.appendChild(checkboxContainer);
rightDiv.appendChild(inptSubmit);
rightDiv.appendChild(btnSignUp);
rightDiv.appendChild(btnForgotPassword);

containerMain.appendChild(rightDiv);

main.appendChild(containerMain);
document.body.appendChild(main);