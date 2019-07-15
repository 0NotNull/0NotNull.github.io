let tabsContainer = document.getElementById('service-tabs');

tabsContainer.addEventListener('click', (Event) => {
  if (Event.target.classList[0] === "tab-title") {
    Event.srcElement.nextElementSibling.classList.toggle("is-hidden");
    Event.srcElement.classList.toggle("tab-title-open");
  }
});