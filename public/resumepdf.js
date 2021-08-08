let areaCv = document.getElementById("area-cv");

let resumeButton = document.getElementById("resume-button");

let opt = {
  margin: 0,
  filename: "ChetachiEzikeuzorResume.pdf",
  image: { type: "jpeg", quality: 1.0 },
  html2canvas: { scale: 5 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

function scaleCv() {
  document.body.classList.add("scale-cv");
}

function removeScale() {
  document.body.classList.remove("scale-cv");
}

function generateResume() {
  html2pdf(areaCv, opt);
}

resumeButton.addEventListener("click", () => {
  scaleCv();
  generateResume();

  setTimeout(removeScale, 2000);
});
