import barba from '@barba/core';
import anime from 'animejs';

export default function enterAnimation(pageContainer, done) {
  let title = pageContainer.querySelector('.title');

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
}
