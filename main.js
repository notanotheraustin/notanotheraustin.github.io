console.log("Hello, JS is running!");

// Particle Background Effect
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ffff" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": false },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#00ffff", "opacity": 0.4, "width": 1 },
        "move": { 
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { 
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": { 
            "repulse": { "distance": 100, "duration": 0.4 }, 
            "push": { "particles_nb": 4 }
        }
    }
});

// Cyberpunk Glitch Effect on Hover
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

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
