// ==========================================
// FUNCTIONS
// ==========================================

function updateTheme() {

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");

    } else {

        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");

    }

}

// ==========================================
// LOAD SAVED THEME
// ==========================================

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateTheme();

// ==========================================
// DARK MODE
// ==========================================

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    updateTheme();

});