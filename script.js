//Dynamic Tabs Bootstrap
$(document).ready(function() {
  $("#myTab li:eq(1) a").tab("show"); // show second tab (0-indexed, like an array)
});

//

function scrollTrigger(selector) {
  const els = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  });

  for (const el of els) {
    observer.observe(el);
  }
}

let scrollTimeout;

function onScroll() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(function() {
    scrollTrigger('.transition-wrapper');
  }, 10);
}

window.addEventListener('scroll', onScroll);

document.addEventListener('DOMContentLoaded', function() {
  scrollTrigger('.transition-wrapper');
});
