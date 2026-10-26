const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");
const savedTheme = localStorage.getItem("jec-theme");

function setTheme(theme) {
    const isDark = theme === "dark";

    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
    themeIcon.textContent = isDark ? "\u2600" : "\u263E";
    themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
}

setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    localStorage.setItem("jec-theme", nextTheme);
    setTheme(nextTheme);
});
