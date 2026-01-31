document.addEventListener("DOMContentLoaded", () => {

  // LOGIN PAGE
  const googleBtn = document.querySelector(".google-btn");
  const emailBtn = document.querySelector(".email-btn");
  const registerLink = document.querySelector(".register a");
  const contactBtn = document.querySelector(".contact-btn");

  if (googleBtn) {
    googleBtn.onclick = () => {
      window.location.href = "auth.html?method=google";
    };
  }

  if (emailBtn) {
    emailBtn.onclick = () => {
      window.location.href = "auth.html?method=email";
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

  // DASHBOARD PAGE
  const postBtn = document.querySelector(".post-btn");

  if (postBtn) {
    postBtn.onclick = () => {
      const text = prompt("Write your opinion 👇");
      if (!text || text.trim() === "") return;

      const feed = document.querySelector(".feed");

      const card = document.createElement("div");
      card.className = "card";

      const p = document.createElement("p");
      p.innerText = text;

      card.appendChild(p);
      feed.prepend(card);
    };
  }


});
