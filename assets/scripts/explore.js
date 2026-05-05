// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const  voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const textarea = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');
  const synth = window.speechSynthesis;
  let voices = [];
  function loadVoices() {
    voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  loadVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  talkButton.addEventListener('click', () => {
    if (textarea.value === '') return;
    const utterance = new SpeechSynthesisUtterance(textarea.value);

    // Set selected voice
    const selectedVoice = voices.find(v => v.name === voiceSelect.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    // Swap to open mouth while speaking
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Talking face';
    };
     utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.speak(utterance);
  });
}





