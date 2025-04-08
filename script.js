document.addEventListener("DOMContentLoaded", () => {
  const textDisplay = document.getElementById('text');
  const phrases = ["Hi, I am Chief Yaw Acheampong.","I'm a Software Engineer.", "I'm a Web Developer.", "I love building projects.", "I am from Ghana."]
  let i = 0;
  let j = 0;
  let currentPhrase = [];
  let isDeleting = false;
  let isEnd = false;
  
  function loop() {
    isEnd = false;
    textDisplay.innerHTML = currentPhrase.join('');
  
    if (i < phrases.length) {
  
      if (!isDeleting 
        && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
      }
  
      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
      }
  
      if (j === phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }
  
      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }
  
    const speedUp = Math.random() * (80 - 50) + 50;
    const normalSpeed = Math.random() * (150 - 100) + 100;
    const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
  
    setTimeout(loop, time);
  }
  
  loop();
  
});
