import { matchUrl, waitQuery, waitQueryAll, setContext, listenEvent } from '../../src/index';

matchUrl(/\/products\/search\/?$/, () => {

  waitQuery('.search-box .size-selector.expanded', () => {
    setContext('sizeExpanded', 'true');
  });

  waitQuery('.cta-button', (el) => {
    el.addEventListener('click', () => setContext('ctaClicked', 'true'));
  });

  waitQueryAll('.row', (newElements, allMatches) => {
    newElements.forEach((el) => {
      el.addEventListener('click', () => setContext('rowClicked', 'true'));
    });
  })

  listenEvent('click', '.cta-btn', (e, element) => {
    setContext('ctaClicked', 'true');
  }, {
    once: true
  })

});


matchUrl(/\/products\/selected\/*/, () => {

  waitQuery('.add-to-cart', (el) => {
    el.addEventListener('click', () => setContext('ctaClicked', 'true'));
  });

});