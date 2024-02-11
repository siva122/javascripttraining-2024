console.log('fetch');
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     console.log(response);
//     let jsondata = '';
//     if (response.ok) {
//       jsondata = response.json();
//     }
//     return jsondata;
//   })
//   .then((response) => console.log(response));
//promise chaning
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function fetchPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await data.json();

  console.log(response);
}
fetchPosts();
//fetch('https://jsonplaceholder.typicode.com/posts/1')
async function fetchPost() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const response = await data.json();
  console.log(response);
}
fetchPost();
