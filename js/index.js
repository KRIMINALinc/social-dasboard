const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
var labelToggle = document.getElementById('texto-toogle');
labelToggle.innerHTML= 'Dark Mode';

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        labelToggle.innerHTML= 'Light Mode';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        labelToggle.innerHTML= 'Dark Mode';
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);