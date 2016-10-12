module.exports = {
  sections: {
    header: {
      selector: '.header',
      elements: {
        menu: {
          selector: '.header__menu',
        },
        logo: {
          selector: '.header__logo',
        },
        search: {
          selector: '.header__search',
        },
        featuredLink: {
          selector: '[data-test="featured-page-link"]',
        },
        aboutLink: {
          selector: '[data-test="about-page-link"]',
        },
        storeLink: {
          selector: '[data-test="store-page-link"]',
        },
        shuffleLink: {
          selector: '[data-test="shuffle-page-link"]',
        },
        mobileShuffleLink: {
          selector: '[data-test="mobile-shuffle-page-link"]',
        },
      },
    },
  },
};
