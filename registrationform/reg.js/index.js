function displayData() {
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const displayDiv = document.getElementById("display");
    
    displayDiv.innerHTML = `
      <h2>Registration Details:</h2>
      <p>First Name: ${fname}</p>
      <p>Last Name: ${lname}</p>
      <p>Email: ${email}</p>
      <p>Password: ${password}</p>
    `;
    
    displayDiv.style.display = "block";
  }
  