import { enterAnimation } from './transistionAnimations';
import barba from '@barba/core';
import anime from 'animejs';

barba.init({
  transitions: [
    {
      name: 'default-transition',
      leave({ current }) {
        let done = this.async();
        enterAnimation(current.container, done);
      },
      enter({ next }) {
        let title = next.container.querySelector('.title');

        if (next.namespace == 'about') {
          anime({
            targets: '.square',
            left: '70%',
            skewX: [10, 0],
            easing: 'easeOutExpo',
            duration: 1200,
          });
        } else {
          anime({
            targets: '.square',
            left: '30%',
            skewX: [-10, 0],
            easing: 'easeOutExpo',
            duration: 1200,
          });
        }

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
