function Person(name, age, sex) {
  
  this.name = name;
  this.age = age;
  this.sex = sex;
  
}

 var people = [];

function submit() {
var name =  document.getElementById("name").value; 
var age = document.getElementById("age").value;
var sex = document.getElementById("sex").value;
  
  var person = new Person(name, age, sex);
 
  people.push(person);
  console.log(people);
  
  var tableRow = '';
  for (var i = 0; i < people.length; i++) {
    tableRow = "<tr>"
    + "<td>" + person.name + "</td>"
    + "<td>" + person.age + "</td>"
    + "<td>" + person.sex + "</td>"
     + "</tr>"; 
  }

  $("tbody").append(tableRow);
 
}


