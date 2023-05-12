const links = document.querySelectorAll('.menu a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const circle = link.querySelector('.circle');
    circle.classList.add('active');
    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
  });
});