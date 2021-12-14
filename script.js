const barsEl = document.querySelector('#hamburger');
const navEl = document.querySelector('#navbar');
const menuDropEl = document.querySelector('.dropdown-menu-holder');

const headingEl = document.querySelector('h2');
const infoEl = document.querySelector('.more-info');
const btnPrevArticlesEl = document.querySelector('#experience .prev-art');
const btnNextArticlesEl = document.querySelector('#experience .next-art');

barsEl.addEventListener('click', () => {
    navEl.classList.toggle('d-none');
});

headingEl.addEventListener('click', () => {
    headingEl.scrollIntoView();
});

infoEl.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.lightbox-wrapper').classList.add('show');
});



document.querySelector('.a-services').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dropdown-menu-holder2').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder3').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder1').classList.toggle('d-none');
});

document.querySelector('.a-knowledge').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dropdown-menu-holder1').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder3').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder2').classList.toggle('d-none');
});

document.querySelector('.a-about').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dropdown-menu-holder1').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder2').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder3').classList.toggle('d-none');
});

const articleList = [
    {
        id: 0,
        imgUrl: `img/frank.png`,
        heading: `Art-Heading 1`,
        text: `Article text for the first of the four articles. One one one one one one`,
        url: `#`
    },
    {
        id: 1,
        imgUrl: `img/thomas.png`,
        heading: `Art-Heading 2`,
        text: `Article text for the second of the four articles. Two two two two two two`,
        url: `#`
    },
    {
        id: 2,
        imgUrl: `img/frank.png`,
        heading: `Art-Heading 3`,
        text: `Article text for the Third of the four articles. Three three three three`,
        url: `#`
    },
    {
        id: 3,
        imgUrl: `img/thomas.png`,
        heading: `Art-Heading 4`,
        text: `Article text for the fourth of the four articles. Four four four four`,
        url: `#`
    }
];

let currentArticle = 0;

document.querySelector('#experience .art-wrapper article').innerHTML = `
    
        <div class="d-flex justify-content-start align-items-center">
            <img src="${articleList[0].imgUrl}" alt="">
            <h3>${articleList[0].heading}</h3>
        </div>

        <p>${articleList[0].text}</p>

        <a href="${articleList[0].url}">+ Läs hela artiklen</a>
    
`;

btnPrevArticlesEl.addEventListener('click', () => {
    if (currentArticle > 0) {
        currentArticle--;
        document.querySelector('#experience .art-wrapper article').innerHTML = `
        
            <div class="d-flex justify-content-start align-items-center">
                <img src="${articleList[currentArticle].imgUrl}" alt="">
                <h3>${articleList[currentArticle].heading}</h3>
            </div>

            <p>${articleList[currentArticle].text}</p>

            <a href="${articleList[currentArticle].url}">+ Läs hela artiklen</a>
        
        `;
    }
    
});

btnNextArticlesEl.addEventListener('click', () => {
    console.log(currentArticle);
    if (currentArticle < 3) {
        currentArticle++;
        document.querySelector('#experience .art-wrapper article').innerHTML = `
        
            <div class="d-flex justify-content-start align-items-center">
                <img src="${articleList[currentArticle].imgUrl}" alt="">
                <h3>${articleList[currentArticle].heading}</h3>
            </div>

            <p>${articleList[currentArticle].text}</p>

            <a href="${articleList[currentArticle].url}">+ Läs hela artiklen</a>
        
        `;
    }
    
});
