let verbalSeconds = 900;
let quantSeconds = 1200;
let timer;

function startSection(section) {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('verbal').classList.add('hidden');
  document.getElementById('quant').classList.add('hidden');

  document.getElementById(section).classList.remove('hidden');

  clearInterval(timer);

  if (section === 'verbal') {
    timer = setInterval(updateVerbalTimer, 1000);
  }

  if (section === 'quant') {
    timer = setInterval(updateQuantTimer, 1000);
  }
}

function updateVerbalTimer() {
  verbalSeconds--;
  const mins = Math.floor(verbalSeconds / 60);
  const secs = verbalSeconds % 60;

  document.getElementById('verbal-timer').innerText =
    `${mins}:${secs.toString().padStart(2, '0')}`;

  if (verbalSeconds <= 0) {
    clearInterval(timer);
    alert('Verbal section complete. Starting Quant.');
    startSection('quant');
  }
}

function updateQuantTimer() {
  quantSeconds--;
  const mins = Math.floor(quantSeconds / 60);
  const secs = quantSeconds % 60;

  document.getElementById('quant-timer').innerText =
    `${mins}:${secs.toString().padStart(2, '0')}`;

  if (quantSeconds <= 0) {
    clearInterval(timer);
    alert('Quant section complete. Submit answers in ChatGPT.');
  }
}
