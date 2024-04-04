const box = document.getElementById('box');

box.addEventListener('dragstart', event => {
  event.preventDefault();
});

box.addEventListener('drop', event => {
  event.preventDefault();
});
