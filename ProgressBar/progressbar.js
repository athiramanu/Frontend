const createProgressElement = (count) => {
  
  const progressBar = document.createElement("progress");
  progressBar.setAttribute("id", count);
  progressBar.setAttribute("value", 0);
  progressBar.setAttribute("max", 100);
  
  return progressBar;
}

const appendProgressBar = (container, count) => {
  
  container.appendChild(createProgressElement(count));
  container.appendChild(document.createElement("br"));
}

const loadProgressBars = () => {
  
  const userInput = document.getElementById("userInput").value;
  const container = document.getElementById("progressBarContainer");
  
  container.innerHTML = "";
  
  let count = 1;
  appendProgressBar(container, count);
  
  setInterval(() => {
    const element = document.getElementById(count);
    
    if (element.value >= 100) {
      clearInterval(this);
    }
    else {
      element.value += 3;
    }
    
    if (element.value >= 100 && count < userInput) {
      appendProgressBar(container, ++count);
    }
  },50);
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener('click', loadProgressBars);
