class SmoothScroll {
  constructor(item) {
    this.item = item;
    this.bindClick();
  }

  bindClick() {
    const scrollTo = this.item.getAttribute('href');

    this.item.addEventListener('click', (event) => {
      event.preventDefault();
      const element = document.getElementById(scrollTo.substring(1));

      window.scrollBy({
        top: element.getBoundingClientRect().top - 10,
        behavior: 'smooth'
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const linkItems = document.querySelectorAll('.js-go-to');
  if (linkItems) [...linkItems].forEach((item) => new SmoothScroll(item));
});
