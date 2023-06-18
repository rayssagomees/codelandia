const main = document.createElement('main');
main.className = 'flex-center-center-column margin';

var datePosts = [
    '02 de jul, 2021',
    '02 de jul, 2021',
    '02 de jul, 2021',
    '02 de jul, 2021',
];

var titlePosts = [
    'Agora é oficial: o Windows 11 está vindo',
    'Tim Berners-Lee vai leiloar código-fonte da web',
    'Tem Firefox novo no pedaço e você vai querer migrar',
    'John McAfee, criador do antivírus McAfee, morre',
];

var descriptionPosts = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero.',
];

for (var i = 0; i < titlePosts.length; i++) {
    const posts = document.createElement('article');
    posts.className = 'width border-radius';

    const datePost = document.createElement('p')
    datePost.className = 'post-data';
    datePost.innerText = datePosts[i];

    const titlePost = document.createElement('h2')
    titlePost.innerText = titlePosts[i];

    const descriptionPost = document.createElement('p')
    descriptionPost.innerText = descriptionPosts[i];

    posts.appendChild(datePost);
    posts.appendChild(titlePost);
    posts.appendChild(descriptionPost);

    main.appendChild(posts);
}

document.body.appendChild(main);