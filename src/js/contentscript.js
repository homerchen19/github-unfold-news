import State from './State';

const detailsContainerSelector =
  'div.Details.js-details-container.js-news-feed-event-group';

const state = new State({
  unfoldAll: true,
});

const unfold = () => {
  const { unfoldAll } = state.getState();
  const detailsContainer = Array.from(
    document.querySelectorAll(detailsContainerSelector)
  );

  if (detailsContainer.length !== 0) {
    for (let i = 0; i < detailsContainer.length; i += 1) {
      const element = detailsContainer[i];

      if (unfoldAll) {
        element.classList.add('Details--on');
      } else {
        element.classList.remove('Details--on');
      }
    }
  }
};

const changeText = element => {
  const { unfoldAll } = state.getState();

  element.innerHTML = !unfoldAll ? 'Fold All' : 'Unfold All';

  state.setState({
    unfoldAll: !unfoldAll,
  });
};

const createButton = () => {
  const { unfoldAll } = state.getState();
  const button = document.createElement('a');

  button.classList.add(
    'btn',
    'btn-sm',
    'btn-primary',
    'text-white',
    'float-right'
  );
  button.innerHTML = unfoldAll ? 'Fold All' : 'Unfold All';
  button.addEventListener('click', () => {
    changeText(button);
    unfold();
  });

  return button;
};

const addButton = () => {
  const activityHeader = document.querySelector('.js-all-activity-header');
  const button = createButton();

  activityHeader.classList.add('mb-1');
  activityHeader.appendChild(button);
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

addButton();
init();
