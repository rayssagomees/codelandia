// create main
const main = document.createElement('main');

// main > discount
const discount = document.createElement('div');
discount.className = 'discount';
discount.innerText = 'Ganhe R$ 10,00 de desconto no frete';
main.appendChild(discount);

// main > h1
const h1 = document.createElement('h1');
h1.innerText = 'JordanShoes';
main.appendChild(h1);

// main > container
const container = document.createElement('div');
container.className = 'hightlight';

// main > container > coverContainer
const coverContainer = document.createElement('div');
coverContainer.className = 'flex-column-center background';
coverContainer.style.paddingLeft = '4rem';

// main > container > coverContainer
const coverTitle = document.createElement('h2');
coverTitle.innerText = 'A melhor loja de Jordan';
coverContainer.appendChild(coverTitle);

// main > container > coverContainer
const coverDescription = document.createElement('p');
coverDescription.innerText = 'O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.';
coverContainer.appendChild(coverDescription);
container.appendChild(coverContainer);
main.appendChild(container);

// main > titleSection
const titleSection = document.createElement('h3');
titleSection.innerText = 'Destaques';
titleSection.style.paddingTop = '8rem';
main.appendChild(titleSection);

// main > ctaSection
const ctaSection = document.createElement('p');
ctaSection.innerText = 'Frete grátis e chinelo de brinde é aqui. Aproveite por tempo limitado!';
ctaSection.style.textAlign = 'center';
ctaSection.style.color = 'var(--title-color)';
ctaSection.style.paddingBottom = '4rem';
main.appendChild(ctaSection);

// main > section
const productsSection = document.createElement('section');
productsSection.style.paddingBottom = '4rem';

var imageProducts = [
    'air-jordan-1-high-zoom-cmft-tropical-twist-1-400.png',
    'air-jordan-1-mid-black-noble-red-w-1-1000.png',
    'air-jordan-1-mid-bright-citrus-1-1000 1.png',
    'air-jordan-1-mid-carbon-fiber-1-1000 1.png',
    'air-jordan-1-mid-dutch-green-1-400.png',
    'air-jordan-1-mid-grey-camo-1-1000 1.png',
    'air-jordan-1-mid-light-smoke-grey-gs-1-1000.png',
    'air-jordan-1-retro-high-court-purple-w-1-400.png',
];

for (let i = 0; i < imageProducts.length; i++) {
    const altImageProducts = 'Modelo de tênis';

    // main > section > containerProducts
    const containerProducts = document.createElement('div');
    containerProducts.className = 'product flex-center-center';
    
    // main > section > containerProducts > backgroundProducts
    const backgroundProducts = document.createElement('div');
    backgroundProducts.className = 'flex-center-center'

    // main > section > containerProducts > backgroundProducts > imageProduct
    const imageProduct = document.createElement('img');
    imageProduct.src = '../src/images/ch002-jordanshoes/' + imageProducts[i];
    imageProduct.alt = altImageProducts;

    backgroundProducts.appendChild(imageProduct);
    containerProducts.appendChild(backgroundProducts);
    productsSection.appendChild(containerProducts);
}

main.appendChild(productsSection);

document.body.appendChild(main);