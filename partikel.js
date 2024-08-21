let particleInterval;

// Function to generate a random color in RGB format
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to generate a random size for the particle
function getRandomSize() {
  const size = Math.random() * 20 + 5; // Size between 5px and 25px
  return `${size}px`;
}

// Function to generate a random border radius for the particle
function getRandomBorderRadius() {
  const radius = Math.random() * 50; // Radius between 0 and 50px
  return `${radius}%`; // Percentage to create circles or ellipses
}

// Function to create a single particle at a random position
function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random position on the screen
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;

  // Random size and shape
  particle.style.width = getRandomSize();
  particle.style.height = getRandomSize();
  particle.style.borderRadius = getRandomBorderRadius();

  // Random movement direction
  const xMovement = (Math.random() - 0.5) * 300; // Random x movement
  const yMovement = (Math.random() - 0.5) * 300; // Random y movement
  particle.style.setProperty("--x", `${xMovement}px`);
  particle.style.setProperty("--y", `${yMovement}px`);

  // Set a random color for the particle
  particle.style.backgroundColor = getRandomColor();

  document.body.appendChild(particle);

  // Remove the particle after animation ends
  particle.addEventListener("animationend", () => {
    particle.remove();
  });
}

// Function to continuously generate particles
function generateParticlesContinuously() {
  particleInterval = setInterval(createParticle, 10); // Generate a particle every 100ms
}

// Function to stop particle generation
function stopParticles() {
  clearInterval(particleInterval); // Stops the particle generation
}

// Function to remove all existing particles from the screen
function clearParticles() {
  const particles = document.querySelectorAll(".particle");
  particles.forEach((particle) => particle.remove());
}

// Function to reset the particle animation
function resetParticles() {
  stopParticles(); // Stop generating new particles
  clearParticles(); // Remove all existing particles
}
