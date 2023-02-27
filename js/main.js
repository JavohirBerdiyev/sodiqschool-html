

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

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
        teacher = json
        renderTeacher(teacher.body);
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

 function renderTeacher(teacher) {
  // div.className = "team-members",
  teacher.forEach((item, index) => {
    let devOne = document.createElement("div");
    devOne.className = "team-members";
    devOne.innerHTML = `
        <div class="team-one" onclick="${teacherModalOpen(item)}">
          <div class="team-item">
            <div class="image-blog">
              <img class="image" src="https://api.msodiqschool.uz/uploads/${item.link}.jpg"
                alt="jamo" width="350" height="500" />
            </div>
          </div>
        </div>
    `;
    teach[index+1].appendChild(devOne);
  });
};

renderTeacher();

function teacherModalOpen(data) {
  console.log(data);
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