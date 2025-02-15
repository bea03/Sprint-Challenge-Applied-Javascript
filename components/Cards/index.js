// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

/*axios.get(`https://lambda-times-backend.herokuapp.com/articles`)

    .then(data => {
        console.log(data);
    })*/

function cardComponent(data) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = data.headline;
    cardDiv.appendChild(headlineDiv);
    
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    cardDiv.appendChild(authorDiv);

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');
    authorDiv.appendChild(imgDiv);

    const imgContent = document.createElement('img');
    imgContent.setAttribute('src', `${data.authorPhoto}`);
    imgDiv.appendChild(imgContent);

    const authorSpan = document.createElement('span');
    authorSpan.textContent = data.authorName;
    authorDiv.appendChild(authorSpan);

    return cardDiv;
}

const cardsContainer = document.querySelector('.cards-container');

const cardAxios = axios.get(`https://lambda-times-backend.herokuapp.com/articles`);

cardAxios
    .then((dataArray) => {
        dataArray.data.articles.bootstrap.forEach(data => {
            cardsContainer.appendChild(cardComponent(data));
        })

        dataArray.data.articles.javascript.forEach(data => {
            cardsContainer.appendChild(cardComponent(data));
        })

        dataArray.data.articles.jquery.forEach(data => {
            cardsContainer.appendChild(cardComponent(data));
        })

        dataArray.data.articles.node.forEach(data => {
            cardsContainer.appendChild(cardComponent(data));
        })

        dataArray.data.articles.technology.forEach(data => {
            cardsContainer.appendChild(cardComponent(data));
        })
    })
    .catch((err) => {
        console.log('err');
    })