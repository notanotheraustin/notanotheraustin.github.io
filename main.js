console.log("Particles.js is running!");

// Initialize particles with attraction effect
particlesJS("particles-js", {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.4, width: 1 },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "attract" }
        },
        modes: {
            attract: {
                distance: 200,
                duration: 0.4,
                speed: 2
            }
        }
    }
});

// Cyberpunk Glitch Effect on Hover
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

const GITHUB_USERNAME = "notanotheraustin"; 

async function fetchGitHubRepos() {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`);
    const repos = await response.json();

    const repoContainer = document.getElementById("repo-container");
    repoContainer.innerHTML = ""; // Clear loading text

    repos.forEach(repo => {
        const repoElement = document.createElement("div");
        repoElement.classList.add("repo-card");
        repoElement.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || "No description available"}</p>
        `;
        repoContainer.appendChild(repoElement);
    });
}

// Call the function on page load
fetchGitHubRepos();


document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        
        if (iteration >= event.target.dataset.value.length) { 
            clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 30);
};
