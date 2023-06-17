var main = document.createElement('main');
    const containerMain = document.createElement('div');
    containerMain.style.padding = '2rem 0'; 

    const titleH2Main = document.createElement('h2');
    titleH2Main.innerText = 'Comunidade Dev';  

    const titleH1Main = document.createElement('h1');
    titleH1Main.innerText = 'Projetos da comunidade Codelândia'; 

    const descriptionMain = document.createElement('p');
    descriptionMain.innerText = 'Me desafiei a desenvolver os projetos incríveis da comunidade Codelândia, com objetivo de aprimorar minhas habilidades como desenvolvedora front-end da web.'; 

    // containerMain > contentMain
    containerMain.appendChild(titleH2Main);
    containerMain.appendChild(titleH1Main);
    containerMain.appendChild(descriptionMain);

    var sectionProjects = document.createElement('section');
    sectionProjects.id = 'procjects';
    
    for (var i = 0; i < projectTitles.length; i++) {
        var article = document.createElement('article');
        article.classList.add('project');

        // image project
        var divImage = document.createElement('div');
        var img = document.createElement('img');
        img.src = 'src/images/' + projectImages[i];
        img.alt = `${descriptionImageProject}`;

        divImage.appendChild(img);

        // title project
        var divTitle = document.createElement('div');
        var titleH3 = document.createElement('h3');
        titleH3.textContent = projectTitles[i];

        divTitle.appendChild(titleH3);

        // links projects
        var divBtn = document.createElement('div');
        var linkLive = document.createElement('a');
        linkLive.href = '../../../projects/' + projectLiveLinks[i] + '.html';
        var btnLive = document.createElement('button');
        btnLive.classList.add('btn-primary');
        btnLive.innerText = `${projectLiveCta}`;

        linkLive.appendChild(btnLive);
        divBtn.appendChild(linkLive);

        var linkGitHub = document.createElement('a');
        linkGitHub.href = `${projectRepositoryLinks}`;
        linkGitHub.target = '_blank';
        linkGitHub.rel = 'noopener noreferrer';
        var btnGitHub = document.createElement('button');
        btnGitHub.innerText = `${projectRepositoryCta}`;

        linkGitHub.appendChild(btnGitHub);
        divBtn.appendChild(linkGitHub);

        // article > div
        article.appendChild(divImage);
        article.appendChild(divTitle);
        article.appendChild(divBtn);

        // section > article
        sectionProjects.appendChild(article);
    }
    
    main.appendChild(containerMain);
    main.appendChild(sectionProjects);
    
document.body.appendChild(main);