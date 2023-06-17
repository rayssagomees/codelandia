var header = document.createElement('header');

const leftHeader = document.createElement('header');
    const imgLeftHeader = document.createElement('img');
    imgLeftHeader.src = `${logoPage}`;
    imgLeftHeader.alt = `${altLogoPage}`;
leftHeader.appendChild(imgLeftHeader);

const rightHeader = document.createElement('header');
    const discordLinkHeader = document.createElement('a');
    discordLinkHeader.href = `${codelandiaDiscordLink}`;
    discordLinkHeader.target = '_blank';
    discordLinkHeader.rel = 'noopener noreferrer';

        const btndiscordLinkHeader = document.createElement('button');
        btndiscordLinkHeader.innerText = `${codelandiaDiscordLinkCta}`;
        discordLinkHeader.appendChild(btndiscordLinkHeader);

    const githubLinkHeader = document.createElement('a');
    githubLinkHeader.href = `${githubLink}`;
    githubLinkHeader.target = '_blank';
    githubLinkHeader.rel = 'noopener noreferrer';

        const btnGithubLinkHeader = document.createElement('button');
        btnGithubLinkHeader.innerText = `${githubCta}`;
        githubLinkHeader.appendChild(btnGithubLinkHeader);
        githubLinkHeader.className = 'btn-primary';
rightHeader.appendChild(discordLinkHeader);
rightHeader.appendChild(githubLinkHeader);

header.appendChild(leftHeader);
header.appendChild(rightHeader);

header.className = 'flex-spacebetween-center flex-row';

document.body.appendChild(header);