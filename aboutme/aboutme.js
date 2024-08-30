import { sayHello } from '../js/main.js';


let showItems = (id) => {
  const listItems = document.querySelectorAll(`#${id}`);

  listItems.forEach(item => {
    item.classList.toggle("inactive");
    console.log('toggle');
  })
}

const futureButton = document.getElementById("future");
const jobButton = document.getElementById("job");
const helloButton = document.getElementById("hello");

futureButton.addEventListener('click', () => showItems('future-info'));
jobButton.addEventListener('click', () => showItems('job-info'));
helloButton.addEventListener('click', () => {
  const val = sayHello();
  alert(val);
});
