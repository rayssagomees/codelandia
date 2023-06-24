const main = document.createElement('main');

function introduce() {
    const introduceSection = document.createElement('section');
    introduceSection.className = 'highlight-background flex-center-center';

    const container = document.createElement('div');
    container.className = 'container flex-space-between-center-row';

    const leftContainer = document.createElement('div');
    leftContainer.className = 'width-container';
    
    const introduceTitle = document.createElement('h2');
    introduceTitle.innerHTML = 'Lorem ipsum dolor sit amet';
    leftContainer.appendChild(introduceTitle);
    
    const descriptionIntroduce = document.createElement('p');
    descriptionIntroduce.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur ullamcorper non ac massa.';
    leftContainer.appendChild(descriptionIntroduce);
    
    const btnIntroduce = document.createElement('button');
    btnIntroduce.innerHTML = 'Botão';
    leftContainer.appendChild(btnIntroduce);
    
    container.appendChild(leftContainer);
    
    const rightContainer = document.createElement('div');
    rightContainer.className = 'flex-center-center';
    rightContainer.id = 'image-introduce';
    
    const imageIntroduce = document.createElement('img');
    imageIntroduce.src= '../src/images/ch003-onepage/imagem.svg';
    imageIntroduce.width= '300';
    imageIntroduce.alt= 'Ilustração de caixas de presentes';
    rightContainer.appendChild(imageIntroduce);
    
    container.appendChild(rightContainer);
    introduceSection.appendChild(container);
    
    main.appendChild(introduceSection);
};

introduce();

function cards() {
    const cardsSection = document.createElement('section');
    cardsSection.className = 'flex-center-center';

    const div = document.createElement('div');
    div.className = 'container flex-row flex-wrap';

    const titleCard = 'Título do card';

    const descriptionCard = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.';

    for (let i = 0; i < 6; i++) {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'cards-container';

        const colorCards = document.createElement('div');
        colorCards.className = 'color-cards';
        colorCards.id = 'color-cards-' + [i];
        cardContainer.appendChild(colorCards);

        const contentCardContainer = document.createElement('div');
        contentCardContainer.className = 'content-cards';

        const titleCards = document.createElement('h4');
        titleCards.innerText = titleCard;
        contentCardContainer.appendChild(titleCards);

        const descriptionCards = document.createElement('p');
        descriptionCards.innerText = descriptionCard;
        contentCardContainer.appendChild(descriptionCards);
        
        cardContainer.appendChild(contentCardContainer);
        div.appendChild(cardContainer);
    }

    cardsSection.appendChild(div);

    main.appendChild(cardsSection);
};

cards();

function contact() {
    const contactSection = document.createElement('section');
    contactSection.className = 'highlight-background flex-center-center';
    
    const div = document.createElement('div');
    div.className = 'highlight-background flex-center-center-column';
    
    const titleContact = document.createElement('h3');
    titleContact.innerText = 'Entre em contato';
    div.appendChild(titleContact);
    
    const groupFormContact = document.createElement('form');
    groupFormContact.className = 'flex-center-column';
    const inptName = document.createElement('input');
    inptName.type = 'name';
    inptName.placeholder = 'Nome';
    groupFormContact.appendChild(inptName);
    
    const inptEmail = document.createElement('input');
    inptEmail.type = 'email';
    inptEmail.placeholder = 'E-mail';
    groupFormContact.appendChild(inptEmail);
    
    const inptTel = document.createElement('input');
    inptTel.type = 'tel';
    inptTel.placeholder = 'Telefone';
    groupFormContact.appendChild(inptTel);
    
    const inptMessage = document.createElement('textarea');
    inptMessage.placeholder = 'Mensagem';
    groupFormContact.appendChild(inptMessage);
    
    const inptSubmit = document.createElement('input');
    inptSubmit.type = 'submit';
    inptSubmit.placeholder = 'Enviar mensagem';
    groupFormContact.appendChild(inptSubmit);
    
    div.appendChild(groupFormContact);
    contactSection.appendChild(div);

    main.appendChild(contactSection);
};

contact();

document.body.appendChild(main);