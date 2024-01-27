console.log('color changer');
const parentDiv = document.querySelector('.canvas');
parentDiv.addEventListener('click', (evt) => {
  console.log(evt.target.id);
  if (evt.target.id === 'yellow') {
    document.body.style.backgroundColor = event.target.id;
  }
  if (evt.target.id === 'blue') {
    document.body.style.backgroundColor = event.target.id;
  }
  if (evt.target.id === 'white') {
    document.body.style.backgroundColor = event.target.id;
  }
  if (evt.target.id === 'grey') {
    // document.querySelector('body').style.backgroundColor = event.target.id;
    document.body.style.backgroundColor = event.target.id;
  }
  if (evt.target.id === 'orange') {
    // document.querySelector('body').style.backgroundColor = event.target.id;
    document.body.style.backgroundColor = event.target.id;
  }
});
