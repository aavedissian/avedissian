document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a.text-blue-600');
  
    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // prevent immediate navigation
  
        link.classList.add('clicked'); // add class to trigger color change
  
        // After transition (1s), navigate to the link
        setTimeout(() => {
          window.location = link.href;
        }, 1000);
      });
    });
  });
  