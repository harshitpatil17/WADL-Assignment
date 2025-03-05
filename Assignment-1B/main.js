document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registration-form");
  
    // Fetch users from localStorage or create an empty array if no data
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Handle form submission
    registrationForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Collect the form values
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const gender = document.getElementById("gender").value;
  
      // Create the new user object
      const newUser = { name, phone, email, password, gender };
  
      // Add the new user to the users array
      users.push(newUser);
  
      // Save the updated users array to localStorage
      localStorage.setItem("users", JSON.stringify(users));
  
      // Reset the form
      registrationForm.reset();
      window.location.href ="user.html"
    });
  });
  