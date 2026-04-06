// Change this to your Render.com backend URL before deploying to Netlify
// const BASE_URL = "https://your-backend-app.onrender.com";
const BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("login-section");
  const dashboardSection = document.getElementById("dashboard-section");
  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");
  const logoutBtn = document.getElementById("logout-btn");
  const contactsBody = document.getElementById("contacts-body");

  // Check if already logged in
  const token = localStorage.getItem("adminToken");
  if (token) {
    showDashboard(token);
  }

  // Handle Login
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginError.style.display = "none";
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${BASE_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("adminToken", data.token);
        showDashboard(data.token);
      } else {
        loginError.style.display = "block";
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  });

  // Handle Logout
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("adminToken");
    dashboardSection.style.display = "none";
    loginSection.style.display = "block";
    loginForm.reset();
  });

  // Fetch and display contacts
  async function showDashboard(token) {
    loginSection.style.display = "none";
    dashboardSection.style.display = "block";
    
    try {
      const response = await fetch(`${BASE_URL}/api/contacts`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      
      if (response.status === 401 || response.status === 403) {
        // Token invalid or expired
        localStorage.removeItem("adminToken");
        dashboardSection.style.display = "none";
        loginSection.style.display = "block";
        return;
      }

      const contacts = await response.json();
      renderContacts(contacts);
    } catch (error) {
      console.error("Failed to fetch contacts", error);
    }
  }

  function renderContacts(contacts) {
    contactsBody.innerHTML = "";
    contacts.forEach(contact => {
      const row = document.createElement("tr");
      const date = new Date(contact.date).toLocaleString();
      
      row.innerHTML = `
        <td>${date}</td>
        <td>${contact.name}</td>
        <td>${contact.email}</td>
        <td>${contact.message}</td>
      `;
      contactsBody.appendChild(row);
    });
  }
});
