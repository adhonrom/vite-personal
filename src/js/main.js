import confetti from "canvas-confetti";
const myCanvas = document.createElement("canvas");
myCanvas.style.height="100vh";
myCanvas.style.width= "100vw";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10

document.body.append(myCanvas)

const confettiBtn = document.getElementById("confettiBtn")

confettiBtn.addEventListener("click", ()=> {
  console.log("confetti")
  const myConfetti =  confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  })
  myConfetti({
    particleCount:100,
    spread:160,
  }
    
  );
} )