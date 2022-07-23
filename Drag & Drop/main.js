const dragArea = document.querySelector(".drag-area");
const text = dragArea.querySelector("h3");
const input = document.querySelector("input");

let myFile;

const button = dragArea.querySelector(".browse");

button.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  myFile = this.files[0];
  dragArea.classList.add("active");
  dragArea.style.border = "none";
  showMe();
});

dragArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dragArea.classList.add("active");
  text.innerHTML = `<h3>Release to Upload file <br /><span>or</span></h3>`;
});

dragArea.addEventListener("dragleave", () => {
  dragArea.classList.remove("active");
  text.innerHTML = `<h3>Drag & Drop <br /><span>or</span></h3>`;
});

dragArea.addEventListener("drop", (e) => {
  e.preventDefault();
  myFile = e.dataTransfer.files[0];
  dragArea.style.border = "none";
  showMe();
});
const gallery = document.querySelector(".image");
const btn = document.querySelector(".upload");

function showMe() {
  let fileType = myFile.type;
  let valid = ["image/jpeg", "image/jpg", "image/png"];

  if (valid.includes(fileType)) {
    let fileReader = new FileReader();

    fileReader.onload = () => {
      let imageUrl = fileReader.result;
      let img = `<img src="${imageUrl}" alt="">`;

      dragArea.innerHTML = img;

      btn.onclick = () => {
        gallery.innerHTML += img;
        img = "";
        dragArea.innerHTML = `<h3>Drag & Drop <br />
        <span>or</span>
        </h3>
        <button class="browse" onclick="back()">Browse</button>`;
        dragArea.style.border = "2px dotted #666";
      };
    };
    fileReader.readAsDataURL(myFile);
  } else {
    dragArea.classList.remove("active");
    text.innerHTML = `<h3>Drag & Drop <br /><span>or</span></h3>`;
    alert("This file is not valid");
    dragArea.style.border = "2px dotted #666";
  }
}

function back() {
  input.click();
}
