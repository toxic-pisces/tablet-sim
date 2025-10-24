import { addData, getData } from './firebase.js';

const input = document.getElementById('data-input');
const button = document.getElementById('submit-button');
const container = document.getElementById('data-container');

button.addEventListener('click', async () => {
  if (input.value) {
    await addData('entries/' + Date.now(), { text: input.value });
    input.value = '';
    showData();
  }
});

async function showData() {
  const data = await getData('entries');
  container.innerHTML = '';
  if (data) {
    Object.values(data).forEach(entry => {
      const div = document.createElement('div');
      div.textContent = entry.text;
      container.appendChild(div);
    });
  }
}

showData();