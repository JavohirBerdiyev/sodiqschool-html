

var modal = document.getElementById("openMenu");
// Get the button that opens the modal
var btn = document.getElementById("menuBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("nclose");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


let teacher = [];

let score = [];


fetch('http://164.92.193.48:7060/api/team')
      .then(response => response.json())
      .then(json => {
        teacher = json.body;
        renderTeacher(teacher);
  });
fetch('http://164.92.193.48:7060/api/news')
      .then(response => response.json())
      .then(json => {
        score =  json.body.filter((item) => {
          return item.types == "tsc"
        });
        renderScore(score);
  });

// Get the modal
var teachers = document.getElementById("teachers");
var scores = document.getElementById("score");
var new1 = document.getElementById("new");
var teach = document.getElementsByClassName("slteach");
var scoreList = document.getElementsByClassName("slscore");
var teacherModal = document.getElementById("teachermodal");

 function renderTeacher(teacher) {
  // div.className = "team-members",
  teacher.forEach((item, index) => {
    let devOne = document.createElement("div");
    devOne.className = "team-members";
    devOne.innerHTML = `
        <div class="team-one" onclick="teacherModalOpen(${item.id})">
          <div class="team-item">
            <div class="image-blog">
              <img class="image" src="https://api.msodiqschool.uz/uploads/${item.link}.jpg"
                alt="jamo" width="350" height="500" />
            </div>
          </div>
        </div>
    `;
    teach[index+2].appendChild(devOne);
  });
};

renderTeacher();

function teacherModalOpen(id) {
  let items = teacher.filter(item => item.id == id);
  let content = document.createElement("div");
  content.className="content";
  console.log(items);
  content.innerHTML = `
  <div class="close" onclick="closeModal()"><i class='bx bx-x'></i></div>
      <div class="content">
        <img class="modal-img" src="https://api.msodiqschool.uz/uploads/${items[0].link}.jpg" alt="img">
        <h2 class="modal-title">${items[0].name}</h2>
        <p class="modal-text">${items[0].about}</p>
      </div>
  `;
  teacherModal.appendChild(content);
  teacherModal.style.display = "block";
}

function closeModal() {
  teacherModal.style.display = "none";
  teacherModal.innerHTML = "";
}



function renderScore(score) {
  score.forEach((item) => {
    let devOne = document.createElement("div");
    devOne.className = "score-item";
    devOne.innerHTML = `
    <div class="score-image-box">
      <img class="score-image"
        src="	https://api.msodiqschool.uz/uploads/${item.link}.jpg" alt="#">
    </div>
    <h4 class="score-title">${item.heading}</h4>
    <p class="score-text">${item.about}</p>
    <a class="score-link" href="#">Learn more</a>
    `;
    scores.appendChild(devOne);

  });
};

renderScore();


