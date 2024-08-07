function enrollStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const course = document.getElementById('course').value;
  
    const student = {
      name: name,
      age: age,
      course: course
    };
  
    displayStudent(student);
  }
  
  function displayStudent(student) {
    if(student.name==="" && student.age===""){
      alert("All the fields should be filled")
    }
    else if(student.course==="")
    {
      alert("All the fields should be filled")
    }
    else{
    const studentList = document.getElementById('studentList');
    const listItem = document.createElement('li');
  
    listItem.textContent = `${student.name}, ${student.age} years old, enrolled in ${student.course}`;
    studentList.appendChild(listItem);
  
    // Clear the form after enrollment
    document.getElementById('studentForm').reset();
    }
  }
  