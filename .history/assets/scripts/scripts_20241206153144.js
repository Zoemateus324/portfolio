const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement

function changeTheme() {
    const
        toggleTheme.classList.toggle("bi-sun")
    toggleTheme.classList.toggle("bi-moon-stars")

}

toggleTheme.addEventListener("click", changeTheme);