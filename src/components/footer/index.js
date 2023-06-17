var footer = document.createElement('footer');

var logoFooter = document.createElement('img');
logoFooter.src = `${iconLogoPage}`;
logoFooter.alt = `${altLogoPage}`
footer.appendChild(logoFooter);

var copyrightFooter = document.createElement('div');
const currentFullYearCopyrightFooter = new Date().getFullYear();
const contentCopyrightFooter = `© ${currentFullYearCopyrightFooter} ${titlePage}${licenseFooter}`;
copyrightFooter.innerText = contentCopyrightFooter;
footer.appendChild(copyrightFooter);

footer.className = 'flex-spacebetween-center flex-row';
document.body.appendChild(footer);