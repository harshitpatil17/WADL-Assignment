document.addEventListener("DOMContentLoaded", () => {
    const userTbody = document.getElementById("user-tbody");
    const clearAllBtn = document.getElementById("clear-all-btn");
  
    // Fetch users from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Function to display the users in the table
    const displayUsers = () => {
      userTbody.innerHTML = "";
      users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.phone}</td>
          <td>${user.email}</td>
          <td>${user.gender}</td>
        `;
        userTbody.appendChild(row);
      });
    };
  
    // Display users when the page loads
    displayUsers();
  
    // Clear all data functionality
    clearAllBtn.addEventListener("click", () => {
      // Clear the users array and update localStorage
      localStorage.removeItem("users");
  
      // Empty the table and refresh the page
      userTbody.innerHTML = "";
      users = [];
    });
  });
  