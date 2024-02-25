//https://newsapi.org/v2/everything?
//q=tesla&from=2024-01-25&sortBy=publishedAt&apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//https://newsapi.org/v2/top-headlines?
//country=us&category=business&apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//https://newsapi.org/v2/top-headlines?
//sources=techcrunch&apiKey=xxxxxxxxxxxxxxxxxxxx
{
  /* <div class="card">
<div class="image">
  <img src="" alt="" />
</div>
<div class="information">
  <div>
    <p class="title">Sample</p>
    <p class="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eos, earum?
    </p>
    <p class="time">
      <span>04:08:31</span>
      <span>2024-02-24</span>
    </p>
  </div>
  <div class="other">
    <span class="source">News</span>
    <a href="" class="url" target="_blank">Read Article</a>
  </div>
</div>
</div> */
}

const cards = document.querySelector('.cards');
const spans = document.querySelectorAll('category span');
const usAllInfo = '/everything?q=tesla&from=2024-01-25&sortBy=publishedAt';
const testUrl =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&pageSize=2';
const techCrunchUrl =
  'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const businessUrl =
  'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
const cryptoUrl =
  'https://newsapi.org/v2/everything?q=crypto&apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&pageSize=10';
const baseUrl = 'https://newsapi.org/v2';
const apiKey = '&apiKey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
async function getNewsData(url) {
  try {
    const response = await fetch(baseUrl + url + apiKey);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
getNewsData('/everything?q=tesla&from=2024-01-25&sortBy=publishedAt').then(
  (data) => {
    console.log(data.articles);
    let finalData = data.articles;
    finalData.map((item) => {
      console.log('item', item);
      cards.innerHTML += `
      <div class="card">
  <div class="image">
    <img src=${item.urlToImage ?? 'images/samplenews.jpg'} alt="" />
  </div>
  <div class="information">
    <div>
      <p class="title">${item.source.name}</p>
      <p class="description">
       ${item.description ?? 'The business world is increasingly banking on artificial intelligence to be the next big thing, and has found itself turning to one maker of computer chips in particular — Nvidia — to power the revolution.'}
      </p>
      <p class="time">
        <span>${item.publishedAt.replace('Z', '').split('T')[1]}</span>
        <span>${item.publishedAt.replace('Z', '').split('T')[0]}</span>
      </p>
    </div>
    <div class="other">
      <span class="source">News</span>
      <a href=${item.url} class="url" target="_blank">Read Article</a>
    </div>
  </div>
  </div>
      `;
    });
  }
);
const category = document.querySelector('.category');
category.addEventListener('click', (event) => {
  if (event.target.tagName === 'SPAN') {
    cards.innerHTML = '';
    spans.forEach((span) => {
      span.classList.remove('active');
    });
    event.target.classList.add('active');
    console.log('url', baseUrl + event.target.dataset.id + apiKey);
    getNewsData(event.target.dataset.id);
    console.log(event.target.dataset.id);
  }
});
