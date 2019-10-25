const tabs = document.querySelector('.features-tabs');

tabs.addEventListener('click', ({ target }) =>
  target.classList.contains('is-current-tab')
    ? target.classList.remove('is-current-tab')
    : target.classList.add('is-current-tab')
);
