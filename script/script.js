let faculty = document.querySelectorAll(".faculty");
let container;
let department = document.querySelector(".department");
let depart_Container = document.querySelector(".depart_container");
let departBackground;
let display = 0;
let display2 = 0;
let all_faculty = [
  "",
  "Law",
  "Humanities",
  "Engineering",
  "Natural_science",
  "Management_science",
  "Basic_medical_science",
  "Built_environment_studies",
  "Social_science",
];
let all_department = {
  Natural_science: [
    "applied geophysics",
    "computer science",
    "cyber security",
    "industrial chemistry",
    "mathematics and statistics",
    "information technology",
    "microbiology",
    "physics with electronics",
    "statistics",
    "petroleum chemistry",
  ],
  Management_science: [
    "accounting",
    "banking and finance",
    "businesss administration",
    "public adminsitration",
    "marketing",
    "insurance",
    "transport management",
  ],
  Humanities: [
    "christian religious studies",
    "english",
    "french",
    "history",
    "philosophy",
    "theatre Arts",
  ],
  Law: ["law"],
  Basic_medical_science: [
    "biochemitry",
    "human anatomy",
    "human physiology",
    "nursing",
    "physiotherapy",
    "medical laboratory science",
  ],
  Engineering: [
    "civil engineering",
    "computer engineering",
    "electrical & electronic engineering",
    "mechanical engineering",
  ],
  Social_science: [
    "economics",
    "mass communication",
    "political science",
    "psychology",
    "sociology",
    "tourism studies",
  ],
  Built_environment_studies: [
    "architecture",
    "building technology",
    "estate management",
    "quantity surveying",
    "surveying & geoinformatics",
    "urban & regional planning",
  ],
};

faculty.forEach((element) => {
  element.addEventListener("click", () => {
    let id = element.dataset.id;
    backGroundColor();
    department.classList.toggle("opening");
    document.querySelector(".depart_head").classList.remove("hidden");
    document.querySelector(".reg_btn_container").classList.remove("hidden");
    element.classList.toggle("clicked");
    departemntal(id);
    setTimeout(() => {
      department.classList.toggle("opening");
    }, 600);
  });
});

function backGroundColor() {
  faculty.forEach((element) => {
    element.classList.remove("clicked");
  });
}
function departemntal(num) {
  if (display == 0) {
    let nam = all_faculty[num];
    let course = all_department[nam];
    for (i = 0; i < course.length; i++) {
      container = document.createElement("div");
      container.className = "depart";
      container.innerHTML = course[i];
      depart_Container.appendChild(container);
    }
    display = 1;
    departBackground = document.querySelectorAll(".depart");
    check();
  } else if (display == 1) {
    let remov = document.querySelectorAll(".depart");
    remov.forEach((element) => {
      depart_Container.removeChild(element);
    });
    let nam = all_faculty[num];
    let course = all_department[nam];
    for (i = 0; i < course.length; i++) {
      container = document.createElement("div");
      container.className = "depart";
      container.innerHTML = course[i];
      depart_Container.appendChild(container);
    }
    departBackground = document.querySelectorAll(".depart");
    check();
  }
}

function check() {
  departBackground.forEach((element) => {
    element.addEventListener("click", () => {
      departBackground.forEach((div) => {
        div.style.backgroundColor = "rgba(237, 237, 237, 1)";
        div.style.color = "rgba(16, 44, 87, 1)";
      });
      element.style.backgroundColor = "rgba(16, 44, 87, 1)";
      element.style.color = "rgba(255, 255, 255, 1)";
    });
  });
}

let next = document.querySelector("#but");
next.addEventListener("click", () => {
  document.querySelector(".reg_left").style.display = "none";
  document.querySelector(".reg_right").style.display = "flex";
});
