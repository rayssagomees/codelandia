const main = document.createElement('main');
main.className = 'flex-center-center';

const leftDiv = document.createElement('div');
leftDiv.className = 'width-height-container highlight-background flex-center-center';

const imageLogin = document.createElement('img');
imageLogin.src = '../src/images/ch004-login/about-us.svg';
imageLogin.alt = 'Tela de site com ícone ilustrado do perfil de pessoas';
leftDiv.appendChild(imageLogin);
main.appendChild(leftDiv);

const rightDiv = document.createElement('div');
rightDiv.className = 'width-height-container flex-center-center-column';

const contentLogin = document.createElement('div');
contentLogin.className = 'width-container';

const h2 = document.createElement('h2');
h2.innerText = 'Bem vindo de volta';
contentLogin.appendChild(h2);

const h1 = document.createElement('h1');
h1.innerText = 'Faça login na sua conta';
contentLogin.appendChild(h1);
rightDiv.appendChild(contentLogin);

const form = document.createElement('form');
form.className = 'width-container';
form.action = '';
form.autocomplete = 'off';

const labelEmail = document.createElement('label');
labelEmail.for = 'E-mail';  
labelEmail.innerText = 'E-mail';  

const inptEmail = document.createElement('input');
inptEmail.type = 'email';
inptEmail.placeholder = "codelandia@gmail.com";

const labelPassword = document.createElement('label');
labelPassword.for = 'Senha';  
labelPassword.innerText = 'Senha';  

const inptPassword = document.createElement('input');
inptPassword.type = "password";
inptPassword.placeholder = "*********";

form.appendChild(labelEmail);
form.appendChild(inptEmail);
form.appendChild(labelPassword);
form.appendChild(inptPassword);

const contentContainer = document.createElement('div');
contentContainer.className = 'flex-spacebetween-center-row padding';

const rememberBox = document.createElement('div');
rememberBox.className = 'flex-start-center width-container';

const inptCheckbox = document.createElement('input');
inptCheckbox.type = 'checkbox';
inptCheckbox.style.width = '25%';
rememberBox.appendChild(inptCheckbox);

const ctaRemember = document.createElement('div');
ctaRemember.innerText = 'Lembre de mim';
rememberBox.appendChild(ctaRemember);

const linkForgotPassword = document.createElement('a');
linkForgotPassword.innerText = 'Esqueceu sua senha?';
linkForgotPassword.href = '/';
contentContainer.appendChild(rememberBox);
contentContainer.appendChild(linkForgotPassword);
form.appendChild(contentContainer);

const inptSubmit = document.createElement('input');
inptSubmit.className = 'btn-primary';
inptSubmit.type = 'submit';
inptSubmit.value = 'Entrar';
form.appendChild(inptSubmit);

rightDiv.appendChild(form);

const btnLoginGoogle = document.createElement('button');
btnLoginGoogle.className = 'width-container btn-secundary flex-center-center';

const iconLogoGoogle = document.createElement('img');
iconLogoGoogle.src = '../src/images/ch004-login/icon-google.svg';
iconLogoGoogle.alt = 'Logo do Google';
btnLoginGoogle.appendChild(iconLogoGoogle);

const ctaLoginGoogle = document.createTextNode('Ou faça login com o Google');
btnLoginGoogle.appendChild(ctaLoginGoogle);

rightDiv.appendChild(btnLoginGoogle);

const ctaSignup = document.createElement('p');
ctaSignup.className = 'cta-sign-up';
ctaSignup.innerHTML = `Não tem uma conta? <a href="/">Cadastre-se.</a>`;
rightDiv.appendChild(ctaSignup);
main.appendChild(rightDiv);

document.body.appendChild(main);