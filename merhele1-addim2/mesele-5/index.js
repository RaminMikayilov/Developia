// Qeyd - məlumatları yadda saxlamaq üçün localStorage istifadə etmişəm.

const form = document.querySelector("#form");
const studentNameInput = document.querySelector("#name");
const studentSurnameInput = document.querySelector("#surname");
const studentBirthInput = document.querySelector("#birth");

let tableBody = document.querySelector(".table-body");
let student = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  newStudent();
});

let newStudent = () => {
  student.push({
    name: studentNameInput.value,
    surname: studentSurnameInput.value,
    birth: studentBirthInput.value,
  });

  localStorage.setItem("student", JSON.stringify(student));

  console.log(student);
  showStudent();
};

const showStudent = () => {
  tableBody.innerHTML = "";
  student.map((std) => {
    return (tableBody.innerHTML += `    
      <tr>
        <td>${std.name}</td>
        <td>${std.surname}</td>
        <td>${std.birth}</td>
      </tr>
      `);
  });

  studentNameInput.value = "";
  studentSurnameInput.value = "";
  studentBirthInput.value = "";
};

if (localStorage.getItem("student") !== null) {
  student = JSON.parse(localStorage.getItem("student"));
  console.log(student);
  showStudent();
}
