document.addEventListener("DOMContentLoaded", () => {

  const googleBtn = document.querySelector(".google-btn");
  const emailBtn = document.querySelector(".email-btn");
  const registerLink = document.querySelector(".register a");
  const contactBtn = document.querySelector(".contact-btn");

  if (googleBtn) {
    googleBtn.onclick = () => {
      sessionStorage.setItem("loginIntent", "google");
      window.location.href = "auth.html";
    };
  }

  if (emailBtn) {
    emailBtn.onclick = () => {
      sessionStorage.setItem("loginIntent", "email");
      window.location.href = "auth.html";
    };
  }

  if (registerLink) {
    registerLink.onclick = (e) => {
      e.preventDefault();
      window.location.href = "register.html";
    };
  }

  if (contactBtn) {
    contactBtn.onclick = () => {
      alert("Contact page coming soon 📩");
    };
  }

});
