// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

if (currentTheme === 'light') {
  document.documentElement.setAttribute('data-theme', 'light');
  if (themeToggle) themeToggle.textContent = '🌙';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙';
    }
  });
}

// Change this to your Render.com backend URL before deploying to Netlify
// const BASE_URL = "https://your-backend-app.onrender.com";
const BASE_URL = "http://localhost:3000";

document.getElementById("form").addEventListener("submit", async function(e){
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };
  
  try {
    await fetch(`${BASE_URL}/contact`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    });
    alert("Sent!");
    document.getElementById("form").reset();
  } catch (error) {
    console.error("Error submitting form", error);
    alert("Failed to send message.");
  }
});
