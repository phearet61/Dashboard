function toggleDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Click outside the dropdown to close it
window.onclick = function(event) {
    if (!event.target.matches('.user-profile span')) {
        const dropdowns = document.getElementsByClassName("dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
}

// For mobile responsiveness, toggle the nav
document.querySelector('.nav').onclick = function() {
    const navList = document.querySelector('.nav ul');
    navList.classList.toggle('show');
}
