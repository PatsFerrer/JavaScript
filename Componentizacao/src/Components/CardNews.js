class Cardnews extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        // criando a div pai
        const componentRoot = document.createElement('div');
        componentRoot.setAttribute('class', 'card')

        //criando a div left
        const cardLeft = document.createElement('div');
        cardLeft.setAttribute('class', 'card__left')
        
        const autor = document.createElement('span');
        autor.textContent = "By " + (this.getAttribute('autor') || "Anonymous"); //cria a props

        const linkTitle = document.createElement('a');
        linkTitle.textContent = this.getAttribute('title'); 
        linkTitle.href = this.getAttribute('link-url');

        const newsContent = document.createElement('p');
        newsContent.textContent = this.getAttribute('content');

        //colocando os 3, dentro da div left
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        //criando a div right
        const cardRight = document.createElement('div');
        cardRight.setAttribute('class', 'card__right')

        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp"
        newsImage.alt = "Foto da Notícia"

        cardRight.appendChild(newsImage);


        // colocando as duas divs dentro da div pai
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        // retorna toda a estrutura acima (div pai)
        return componentRoot;
    }

    styles() {
        const style = document.createElement('style')
        style.textContent = `
            .card {
                width: 80%;
                border: 1px solid rgb(123, 122, 122);
                display: flex;
            
                justify-content: space-between;
            
                box-shadow: 2px 10px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 2px 10px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 2px 10px 27px 0px rgba(0, 0, 0, 0.75);
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 10px;
            }
            
            .card__left>span {
                font-weight: bold;
            }
            
            .card__left>h1 > a {
                margin-top: 15px;
                font-size: 25px;
                text-decoration: none;
                color: black;
            }
            
            .card__left>p {
                color: rgb(70, 70, 70);
            }
            
            img {
                width: 400px;
            }
        `;

        return style;
    }
}

customElements.define('card-news', Cardnews);