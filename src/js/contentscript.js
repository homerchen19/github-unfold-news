const detailsContainerSelector =
  'div.Details.js-details-container.js-news-feed-event-group:not(.Details--on)';

const unfold = () => {
  const detailsContainer = Array.from(
    document.querySelectorAll(detailsContainerSelector)
  );

  for (let i = 0; i < detailsContainer.length; i += 1) {
    const element = detailsContainer[i];

    element.classList.add('Details--on');
  }
};

const init = () => {
  const target = document.getElementsByClassName('news')[0];

  const observer = new MutationObserver(() => {
    unfold();
  });

  observer.observe(target, {
    attributes: true,
    childList: true,
    characterData: true,
  });
};

init();
