const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero-content", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".cards", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".journybox", {
  ...scrollRevealOption,
  delay: 800,
});
