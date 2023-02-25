let teacher = [];

let score = [
  {
    about:
      "Sodiq School maktabida Matematika fani o‘qituvchisi. Jizzax Davlat Pedagogika Universiteti Akademik Litseyida  matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan o‘qituvchi lavozimida va Jizzax shahridagi Prezident maktabi Matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan To‘garak rahbari kabi lavozimlarda faoliyat yuritgan. Jizzaxdagi EDU SULTON NTM rahbari bo‘lgan.",
    id: 21,
    link: [ "cf790cb8-da27-4aa3-9771-93f955d1125c"],
    heading: "Bubur Bediyev",
    types: "tus",
    created_at: ""
  },
  {
    about:
      "Sodiq School maktabida Matematika fani o‘qituvchisi. Jizzax Davlat Pedagogika Universiteti Akademik Litseyida  matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan o‘qituvchi lavozimida va Jizzax shahridagi Prezident maktabi Matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan To‘garak rahbari kabi lavozimlarda faoliyat yuritgan. Jizzaxdagi EDU SULTON NTM rahbari bo‘lgan.",
    id: 21,
    link: [ "1ec22453-e745-4e35-b47e-8975d4d0f705"],
    heading: "Bubur Bediyev",
    types: "tus",
    created_at: ""
  },
  {
    about:
      "Sodiq School maktabida Matematika fani o‘qituvchisi. Jizzax Davlat Pedagogika Universiteti Akademik Litseyida  matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan o‘qituvchi lavozimida va Jizzax shahridagi Prezident maktabi Matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan To‘garak rahbari kabi lavozimlarda faoliyat yuritgan. Jizzaxdagi EDU SULTON NTM rahbari bo‘lgan.",
    id: 21,
    link: [ "4809157c-b5ab-4ecf-a860-1b9dde29c444"],
    heading: "Bubur Bediyev",
    types: "tus",
    created_at: ""
  },
  {
    about:
      "Sodiq School maktabida Matematika fani o‘qituvchisi. Jizzax Davlat Pedagogika Universiteti Akademik Litseyida  matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan o‘qituvchi lavozimida va Jizzax shahridagi Prezident maktabi Matematika fanidan iqtidorli o‘quvchilar bilan ishlaydigan To‘garak rahbari kabi lavozimlarda faoliyat yuritgan. Jizzaxdagi EDU SULTON NTM rahbari bo‘lgan.",
    id: 21,
    link: [ "4809157c-b5ab-4ecf-a860-1b9dde29c444"],
    heading: "Bubur Bediyev",
    types: "tus",
    created_at: ""
  },
];


fetch('http://164.92.193.48:7060/api/team')
      .then(response => response.json())
      .then(json => teacher = json.body)

console.log(teacher);

// Get the modal
var modal = document.getElementById("myModal");
var teachers = document.getElementById("teachers");
var scores = document.getElementById("score");

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

 function renderTeacher() {
  // div.className = "team-members",
  teacher.forEach((item) => {
    let devOne = document.createElement("div");
    devOne.className = "team-members";
    devOne.innerHTML = `
        <div class="team-one">
          <div class="team-item" onClick={handleOpen}>
            <div class="image-blog">
              <img class="image" src="https://api.msodiqschool.uz/uploads/${item.link}.jpg"
                alt="jamo" width="350" height="500" />
            </div>
          </div>
        </div>
    `;
    teachers.appendChild(devOne);

  });
};

renderTeacher();


function renderScore() {
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



console.log();