import barba from '@barba/core';
import anime from 'animejs';

barba.init({
  transitions: [
    {
      name: 'default-transition',
      leave({ current }) {
        let done = this.async();

        let title = current.container.querySelector('.title');

        anime({
          targets: title,
          translateY: '-100%',
          skewY: 10,
          easing: 'easeInQuint',
          duration: 800,
          complete: () => {
            done();
          },
        });
      },
      enter({ next }) {
        let title = next.container.querySelector('.title');

        anime({
          targets: title,
          translateY: ['100%', 0],
          skewY: [10, 0],
          easing: 'easeOutQuint',
          duration: 800,
        });
      },
    },
  ],
});
