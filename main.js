/* (K.F) I didn't do anything but change the background color try to understand what each function does and how to format it and I slightly have it down but it's still going to take some time & work for me to fully understand and have it down to a "T" */

const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

function changeToX(event) {
  const container = event.currentTarget;
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  container.appendChild(image);
  container.removeEventListener('click', changeToX);
  computerChooseO();
}

function computerChooseO() {
  const allBoxes  = document.querySelectorAll('#grid div');
  const freeBoxes = [];
  for (const box of allBoxes) {
    let imageChild = box.querySelector('img');
    if (!imageChild) {
      freeBoxes.push(box);
    }
  }
  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];
  const image = document.createElement('img');
  image.src = O_IMAGE_URL;
  freeSpace.removeEventListener('click', changeToX);
  freeSpace.appendChild(image);
}

const boxes = document.querySelectorAll('#grid div');
for (const box of boxes) {
  box.addEventListener('click', changeToX);
}