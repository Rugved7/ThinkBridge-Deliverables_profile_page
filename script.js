// Theme Toggle Functionality
const toggleBtn = document.getElementById("toggle-theme");

// Load saved theme (using sessionStorage instead of localStorage)
let currentTheme = "light-theme";
document.body.classList.add(currentTheme);

toggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-theme");
  currentTheme = isLight ? "dark-theme" : "light-theme";

  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(currentTheme);
});

// Typewriter Effect for Name
const element = document.getElementById("typewritter-name");``
const words = ["Rugved", "Agasti"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const delayBetweenWords = 500; 
const delayBetweenCycles = 1000

function typeWriter() {
    if (charIndex < words[wordIndex].length) {
        element.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        wordIndex++;

        if (wordIndex < words.length) {
            element.innerHTML += " "; 
            charIndex = 0;
            setTimeout(typeWriter, delayBetweenWords);
        } else {
            setTimeout(() => {
                element.innerHTML = "";
                wordIndex = 0;
                charIndex = 0;
                typeWriter();
            }, delayBetweenCycles);
        }
    }
}
window.onload = typeWriter;

// Form Submission Handler
const form = document.getElementById("userForm");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            firstName: document.getElementById("fname").value,
            lastName: document.getElementById("lname").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
            timestamp: new Date().toLocaleString()
        };
        
        // Log to console
        console.log("=== Form Submission ===");
        console.log("First Name:", formData.firstName);
        console.log("Last Name:", formData.lastName);
        console.log("Email:", formData.email);
        console.log("Message:", formData.message);
        console.log("Submitted at:", formData.timestamp);
        console.log("Full Data Object:", formData);
        console.log("======================");
        
        // Show alert message
        alert(`Thank you ${formData.firstName} ${formData.lastName}!\n\nYour message has been received. I'll get back to you at ${formData.email} soon.`);
        // Reset form
        form.reset();
    });
}


// GitHub Dialog Popup
function showGitHubDialog() {
    const dialogHTML = `
        <div id="github-dialog-overlay" class="dialog-overlay">
            <div class="dialog-box">
                <div class="dialog-header">
                    <h3>👋 Welcome to My Portfolio!</h3>
                </div>
                <div class="dialog-content">
                    <p>Hey there! Would you like to check out my GitHub profile?</p>
                    <p>You can find all my open-source projects and contributions there!</p>
                </div>
                <div class="dialog-actions">
                    <button id="dialog-visit" class="dialog-btn dialog-btn-primary">
                        <span>Visit GitHub</span>
                    </button>
                    <button id="dialog-close" class="dialog-btn dialog-btn-secondary">
                        Maybe Later
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', dialogHTML);
    
    // Add event listeners
    document.getElementById('dialog-visit').addEventListener('click', () => {
        window.open('https://www.github.com/Rugved7', '_blank');
        closeDialog();
    });
    
    document.getElementById('dialog-close').addEventListener('click', closeDialog);
    document.getElementById('github-dialog-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'github-dialog-overlay') {
            closeDialog();
        }
    });
}

function closeDialog() {
    const dialog = document.getElementById('github-dialog-overlay');
    if (dialog) {
        dialog.classList.add('fade-out');
        setTimeout(() => dialog.remove(), 300);
    }
}

// Show dialog after 2 seconds
setTimeout(showGitHubDialog, 2000);