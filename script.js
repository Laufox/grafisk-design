const barsEl = document.querySelector('#hamburger');
const navEl = document.querySelector('#navbar');
const btnCloseMenu = document.querySelector('.btn-close-menu');

const infoExplainEl = document.querySelector('.more-info-explain');
const infoExperienceEl = document.querySelector('.more-info-experience');
const btnCloseLbExEl = document.querySelector('.close-lb-ex');
const btnCloseLbExperienceEl = document.querySelector('.close-lb-experience');

barsEl.addEventListener('click', () => {
    navEl.classList.toggle('d-none');
    barsEl.classList.toggle('d-none');
    btnCloseMenu.classList.toggle('d-none');
});

btnCloseMenu.addEventListener('click', () => {
    navEl.classList.toggle('d-none');
    barsEl.classList.toggle('d-none');
    btnCloseMenu.classList.toggle('d-none');
});

infoExplainEl.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.lightbox-wrapper').classList.add('show');
});

infoExperienceEl.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#experience .lightbox-wrapper').classList.add('show');
});

btnCloseLbExEl.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove('show');
});

btnCloseLbExperienceEl.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.classList.remove('show');
});

document.querySelector('.a-services').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dropdown-menu-holder2').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder3').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder1').classList.toggle('d-none');
    document.querySelector('.dropdown-menu-holder1').classList.toggle('animate-m');
    document.querySelector('.dropdown-menu-holder2').classList.remove('animate-m');
    document.querySelector('.dropdown-menu-holder3').classList.remove('animate-m');
});

document.querySelector('.a-knowledge').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dropdown-menu-holder1').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder3').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder2').classList.toggle('d-none');
    document.querySelector('.dropdown-menu-holder1').classList.remove('animate-m');
    document.querySelector('.dropdown-menu-holder2').classList.toggle('animate-m');
    document.querySelector('.dropdown-menu-holder3').classList.remove('animate-m');
});

document.querySelector('.a-about').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.dropdown-menu-holder1').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder2').classList.add('d-none');
    document.querySelector('.dropdown-menu-holder3').classList.toggle('d-none');
    document.querySelector('.dropdown-menu-holder1').classList.remove('animate-m');
    document.querySelector('.dropdown-menu-holder2').classList.remove('animate-m');
    document.querySelector('.dropdown-menu-holder3').classList.toggle('animate-m');
});

const articleList = [
    {
        id: 0,
        imgUrl: `img/frank-a100.png`,
        heading: `“Jag vill ju rädda världen”`,
        text: `Johanna Vesterberg från Luleå brinner för miljön. När hon som, möbel- och textildesigner, ville satsa på något eget var valet enkelt: - Jag mår dåligt av de stora företagens slit och släng. 100 miljoner ton möbler slängs varje år. Nu har vi tagit fram en skandinavisk möbel i helt nytt koncept.`,
        url: `https://www.almi.se/kunskapsbanken/inspiration/normada/`
    },
    {
        id: 1,
        imgUrl: `img/thomas-a100.png`,
        heading: `“Pandemin gav mig tid att satsa digitalt”`,
        text: `Annika Höglund som driver företaget HighGrove har haft digitalisering i tankarna länge. Men det var först när pandemin slog till - och det rejält i hennes resebransch - som hon själv slog till digitalt.`,
        url: `https://www.almi.se/kunskapsbanken/inspiration/highgrove/`
    },
    {
        id: 2,
        imgUrl: `img/noemi-a100.png`,
        heading: `“Almis rådgivare har varit som en kurator”`,
        text: `Malin Bergman Solming har gjort en personlig utvecklingsresa under sina vd-år för InfraGeoTech. När hon och Jonas Everstig grundade bolaget 2014 var hon ofta ute på jobb - idag med 22 anställda vill hon mest se efter teamet.`,
        url: `https://www.almi.se/kunskapsbanken/inspiration/infrageotech/`
    },
    {
        id: 3,
        imgUrl: `img/steph-a100.png`,
        heading: `“De hade en av de bättre affärsplaner jag sett”`,
        text: `Eva-Lena Kron jobbar som rådgivare på Almi. Hon ger här tips om du och ditt företag behöver medel till utveckling eller en satsning.`,
        url: `https://www.almi.se/kunskapsbanken/inspiration/sunda-byggvaror/almi-om-sunda-byggvaror/`
    }
];

let currentArticle = 0;
const articleOptionEls = document.querySelectorAll('.opt');
const btnPrevArticlesEl = document.querySelector('#experience .prev-art');
const btnNextArticlesEl = document.querySelector('#experience .next-art');

btnPrevArticlesEl.addEventListener('click', () => {

    if (currentArticle > 0) {
        articleOptionEls[currentArticle].classList.remove('opt-selected');
        currentArticle--;
        articleOptionEls[currentArticle].classList.add('opt-selected');

        document.querySelector('#experience .art-wrapper').innerHTML = `

        <article class="animate">
            <div class="d-flex justify-content-start align-items-center">
                <div class="avatar-holder">
                    <img src="${articleList[currentArticle].imgUrl}" alt="">
                </div>
                <h3>${articleList[currentArticle].heading}</h3>
            </div>

            <p>${articleList[currentArticle].text}</p>

            <a href="${articleList[currentArticle].url}" target="_blank">+ Läs hela artiklen</a>
        </article>

        `;
    }
    
});

btnNextArticlesEl.addEventListener('click', () => {
    
    if (currentArticle < 3) {
        articleOptionEls[currentArticle].classList.remove('opt-selected');
        currentArticle++;
        articleOptionEls[currentArticle].classList.add('opt-selected');

        document.querySelector('#experience .art-wrapper').innerHTML = `
        
        <article class="animate">
            <div class="d-flex justify-content-start align-items-center">
                <div class="avatar-holder">
                    <img src="${articleList[currentArticle].imgUrl}" alt="">
                </div>
                <h3>${articleList[currentArticle].heading}</h3>
            </div>

            <p>${articleList[currentArticle].text}</p>

            <a href="${articleList[currentArticle].url}" target="_blank">+ Läs hela artiklen</a>
        </article>

        `;
    }
    
});

let currentArtSlideLg = 0;
const artOptLgEls = document.querySelectorAll('.opt-lg');
const prevArtLg = document.querySelector('.prev-art-lg');
const nextArtLg = document.querySelector('.next-art-lg');

prevArtLg.addEventListener('click', () => {

    if (currentArtSlideLg === 1) {
        artOptLgEls[currentArtSlideLg].classList.remove('opt-selected');
        currentArtSlideLg--;
        artOptLgEls[currentArtSlideLg].classList.add('opt-selected');

        document.querySelector('#experience .art-wrapper-lg').innerHTML = `
        
        <article class="animate">
            <div class="d-flex justify-content-start align-items-center">
                <div class="avatar-holder">
                    <img src="${articleList[0].imgUrl}" alt="">
                </div>
                
                <h3>${articleList[0].heading}</h3>
            </div>
            
            <p>${articleList[0].text}</p>
            
            <a href="${articleList[0].url}" target="_blank">+ Läs hela artiklen</a>
        </article>

        <article class="animate">
            <div class="d-flex justify-content-start align-items-center">
                <div class="avatar-holder">
                    <img src="${articleList[1].imgUrl}" alt="">
                </div>
                
                <h3>${articleList[1].heading}</h3>
            </div>
            
            <p>${articleList[1].text}</p>
            
            <a href="${articleList[1].url}" target="_blank">+ Läs hela artiklen</a>
        </article>
        
        `;
    }

});

nextArtLg.addEventListener('click', () => {

    if (currentArtSlideLg === 0) {
        artOptLgEls[currentArtSlideLg].classList.remove('opt-selected');
        currentArtSlideLg++;
        artOptLgEls[currentArtSlideLg].classList.add('opt-selected');

        document.querySelector('#experience .art-wrapper-lg').innerHTML = `
        
        <article class="animate">
            <div class="d-flex justify-content-start align-items-center">
                <div class="avatar-holder">
                    <img src="${articleList[2].imgUrl}" alt="">
                </div>
                
                <h3>${articleList[2].heading}</h3>
            </div>
            
            <p>${articleList[2].text}</p>
            
            <a href="${articleList[2].url}" target="_blank">+ Läs hela artiklen</a>
        </article>

        <article class="animate">
            <div class="d-flex justify-content-start align-items-center">
                <div class="avatar-holder">
                    <img src="${articleList[3].imgUrl}" alt="">
                </div>
                
                <h3>${articleList[3].heading}</h3>
            </div>
            
            <p>${articleList[3].text}</p>
            
            <a href="${articleList[3].url}" target="_blank">+ Läs hela artiklen</a>
        </article>
        
        `;
    }

});