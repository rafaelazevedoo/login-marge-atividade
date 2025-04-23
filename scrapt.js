function toggleTheme() {
    const loginCard = document.querySelector('.login-card');
    const themeIcon = document.getElementById('theme-icon');
    
    if (loginCard.getAttribute('data-theme') === 'dark') {
        loginCard.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('ph-sun');
        themeIcon.classList.add('ph-moon');
    } else {
        loginCard.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('ph-moon');
        themeIcon.classList.add('ph-sun');
    }
}
    document.addEventListener('DOMContentLoaded', function() {
    const loginCard = document.querySelector('.login-card');
    const themeIcon = document.getElementById('theme-icon');
    
    if (loginCard.getAttribute('data-theme') === 'dark') {
        themeIcon.classList.add('ph-sun');
    } else {
        themeIcon.classList.add('ph-moon');
    }
});