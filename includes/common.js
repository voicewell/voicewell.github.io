// Function to load HTML content from external files
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Set current page highlight after navigation is loaded
            if (elementId === 'navigation-container') {
                setCurrentPage();
            }
        })
        .catch(error => console.error('Error loading HTML:', error));
}

// Function to set the current page highlight in navigation
function setCurrentPage() {
    // Get the current page path
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // Remove current class from all navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => link.classList.remove('current'));
    
    // Add current class to the appropriate link
    if (currentPath.includes('/registration') || currentPage === 'registration') {
        document.getElementById('registration-link')?.classList.add('current');
    } else if (currentPath.includes('/program') || currentPage === 'program') {
        document.getElementById('program-link')?.classList.add('current');
    } else if (currentPath.includes('/directions') || currentPage === 'directions') {
        document.getElementById('directions-link')?.classList.add('current');
    } else if (currentPath.includes('/speakers') || currentPage === 'speakers') {
        document.getElementById('speakers-link')?.classList.add('current');
    } else if (currentPath.includes('/contact') || currentPage === 'contact') {
        document.getElementById('contact-link')?.classList.add('current');
    } else {
        // Default to home page
        document.getElementById('home-link')?.classList.add('current');
    }
}

// Load common elements when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadHTML('banner-container', 'includes/banner.html');
    loadHTML('navigation-container', 'includes/navigation.html');
});
