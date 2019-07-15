let tabsContainer = document.getElementById('service-tabs');

tabsContainer.addEventListener('click', (Event) => {
  Event.srcElement.nextElementSibling.classList.toggle("is-hidden");
  Event.srcElement.classList.toggle("tab-title-open")
});