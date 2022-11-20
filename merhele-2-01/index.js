// Qeyd - məlumatları yadda saxlamaq üçün localStorage istifadə etmişəm.

const form = document.querySelector("#form");
const studentNameInput = document.querySelector("#name");
const studentSurnameInput = document.querySelector("#surname");
const studentBirthInput = document.querySelector("#birth");
const studentSektorInput = document.querySelector("#sektor");

let tableBody = document.querySelector(".table-body");
let student = [];

let editId;
let isEditStudent = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  newStudent();
});

// add student
let newStudent = (e) => {
  if (!isEditStudent) {
    // add

    student.push({
      id: parseFloat(Date.now()),
      name: studentNameInput.value,
      surname: studentSurnameInput.value,
      birth: studentBirthInput.value,
      sektor: studentSektorInput.value,
    });
  } else {
    // edit
    for (let std of student) {
      if (editId == std.id) {
        std.name = studentNameInput.value;
        std.surname = studentSurnameInput.value;
        std.birth = studentBirthInput.value;
        std.sektor = studentSektorInput.value;
      }
      isEditStudent = false;
    }
  }
  console.log(student);
  showStudent();
  localStorage.setItem("student", JSON.stringify(student));

  e.preventDefault()
};

const showStudent = () => {
  tableBody.innerHTML = "";

  student.map((std) => {
    return (tableBody.innerHTML += `    
    <tr>
      <td>${std.name}</td>
      <td>${std.surname}</td>
      <td>${std.birth}</td>
      <td>${std.sektor}</td>
      <td>
        <div class="dropdown">
          <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <i class="fa-solid fa-ellipsis"></i>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a onclick="deleteStudent(${std.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> sil</a></li>
              <li><a onclick='editStudent(${std.id},"${std.name}","${std.surname}","${std.birth}","${std.sektor}")' class="dropdown-item" href="#"><i class="fa-solid fa-pen"></i> redakte et</a></li>
          </ul>
        </div>
      </td>
    </tr>
    `);
  });

  studentNameInput.value = "";
  studentSurnameInput.value = "";
  studentBirthInput.value = "";
};

// delete student
function deleteStudent(id) {
    let deletedId;
    for (let index in student) {
        if (student[index].id == id) {
            deletedId = index;
        }
    }
    student.splice(deletedId, 1);
    showStudent();
    localStorage.setItem("student", JSON.stringify(student));
}

// edit student
function editStudent(studentId, studentName, studentSurname, studentBirth, studentSektor) {
    editId = studentId;
    isEditStudent = true;
    studentNameInput.value = studentName;
    studentNameInput.focus();
    studentSurnameInput.value = studentSurname;
    studentBirthInput.value = studentBirth;
    studentSektorInput.value = studentSektor;
}

if (localStorage.getItem("student") !== null) {
  student = JSON.parse(localStorage.getItem("student"));
  console.log(student);
  showStudent();
}