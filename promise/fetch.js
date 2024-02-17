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
const container = document.querySelector('.container');
async function fetchPosts() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const response = await data.json();

  console.log(response);
  response.map((post) => {
    let { title } = post;
    console.log(title);
    const p = document.createElement('p');
    p.classList.add('sampleclass');
    //p.style.color = 'green';
    //p.style.border = '2px solid black';
    p.innerHTML = `${title};`;
    container.append(p);
  });
}
//fetchPosts();
//fetch('https://jsonplaceholder.typicode.com/posts/1')
// async function fetchPost() {
//   const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//   const response = await data.json();
//   console.log(response);
// }
// fetchPost();

// function createPosts() {
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }
const apiConfigData = {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};
async function createPost() {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/posts',
    apiConfigData
  );
  const response = await data.json();
  console.log(response);
}
createPost();

function updatePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
updatePost();
function patchPost() {
  fetch('https://jsonplaceholder.typicode.com/posts/2', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
patchPost();
function deletePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });
}
deletePost();
