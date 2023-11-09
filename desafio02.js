let studentsResult = [
  { name: "João", examOne: 8, examTwo: 7 },
  { name: "Maria", examOne: 5, examTwo: 6 },
  { name: "Rafael", examOne: 3, examTwo: 10 },
  { name: "Julia", examOne: 2, examTwo: 5 },
  { name: "Thiago", examOne: 10, examTwo: 4 },
  { name: "Pedro", examOne: 9, examTwo: 9 },
  { name: "Bruna", examOne: 5, examTwo: 1 },
];

function calculateAverage(student) {
  let average =(student.examOne + student.examTwo) / 2;
  
  if(average >= 7) {
    alert(`${student.name} foi aprovado com média ${average}`);
  } else {
    alert(`${student.name} foi reprovado com média ${average}`);
  }
}

for (let student of studentsResult) {
  calculateAverage(student);
}
