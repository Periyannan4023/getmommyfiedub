document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-up, .fade-right, .fade-left').forEach(el => {
      observer.observe(el);
    });
  });

  //carousel////
