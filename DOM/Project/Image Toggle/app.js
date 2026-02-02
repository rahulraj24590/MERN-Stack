document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // Page styling using DOM
  // ===============================
  document.body.style.margin = "0";
  document.body.style.height = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.justifyContent = "center";
  document.body.style.alignItems = "center";
  document.body.style.background = "linear-gradient(135deg, #667eea, #764ba2)";
  document.body.style.fontFamily = "Arial, sans-serif";

  // ===============================
  // Heading styling
  // ===============================
  const heading = document.querySelector("h1");
  heading.style.color = "white";
  heading.style.marginBottom = "20px";
  heading.style.letterSpacing = "1px";

  // ===============================
  // Image styling
  // ===============================
  const image = document.querySelector("img");

  image.style.width = "320px";
  image.style.height = "320px";
  image.style.objectFit = "cover";
  image.style.borderRadius = "20px";
  image.style.border = "4px solid white";
  image.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";
  image.style.transition = "all 0.5s ease-in-out";

  // ===============================
  // Image toggler logic
  // ===============================
  let isTrue = false;

  setInterval(() => {
    image.src = isTrue
      ? "https://images.unsplash.com/photo-1608889336076-13c5c2dc1ee7?w=400&auto=format&fit=crop"
      : "https://images.unsplash.com/photo-1608889476561-6242cfdbf622?w=400&auto=format&fit=crop";

    isTrue = !isTrue;
  }, 1500);
});
