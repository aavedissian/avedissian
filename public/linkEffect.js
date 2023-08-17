// linkEffect.js

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".text-blue-600");
  
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // prevent the default behavior of links
  
        link.style.color = '#551a8b'; // set color to the 'visited' purple color
  
        setTimeout(() => {
          link.style.color = ''; // revert the color to original
  
          setTimeout(() => {
            window.location.href = link.href; // redirect to the desired URL
          }, 500); // 0.5 seconds delay before redirection
  
        }, 500); // 0.5 seconds delay to hold the 'visited' color
      });
    });
  });
  