document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Function to set theme
    const setTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        themeToggle.checked = theme === 'dark';
        localStorage.setItem('theme', theme);
    };

    // Get browser's color scheme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Determine initial theme (priority: localStorage > browser preference > light)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDark.matches ? 'dark' : 'light');
    }

    // Watch for browser theme changes
    prefersDark.addEventListener('change', (e) => {
        // Only update theme if user hasn't set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });

    // Theme toggle handler
    themeToggle.addEventListener('change', () => {
        setTheme(themeToggle.checked ? 'dark' : 'light');
    });
});
