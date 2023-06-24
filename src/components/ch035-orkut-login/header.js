const header = document.createElement('header');
header.className = 'container-background flex-center-center';

const container = document.createElement('div');
container.className = 'width-container flex-space-between-center-row';

function logo() {
    const leftContainer = document.createElement('div');
    const imageLogo = document.createElement('img');
    imageLogo.src = '../src/images/ch035-orkut-login/logo-orkut.png';
    imageLogo.alt = 'Logo do Orkut';
    imageLogo.width = '100';

    leftContainer.appendChild(imageLogo);
    container.appendChild(leftContainer);
};

logo();

function nav() {
    const rightContainer = document.createElement('div');
    rightContainer.id = 'right-container';

    const navigation = document.createElement('nav');

    const ul = document.createElement('ul');
    var navLinks = [
        'Sobre o Orkut',
        'Centro de segurança',
    ];

    for (let i = 0; i < navLinks.length; i++) {
        const li = document.createElement('li');
        li.innerText = navLinks[i];
        ul.appendChild(li);
    }

    navigation.appendChild(ul);
    rightContainer.appendChild(navigation);

    container.appendChild(rightContainer);
};

nav();

header.appendChild(container);
document.body.appendChild(header);