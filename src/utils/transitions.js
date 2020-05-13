import gsap from 'gsap';

export const productTransition = (trigger, node) => {
    const reverse = trigger.state === undefined ? false : trigger.state.isEntry;
    const [desc, figure, socials, footer] = node.childNodes[0].childNodes[0].childNodes;

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' }}).reversed(reverse)

    tl.to(footer, { duration: 0.5, y: '+=30', autoAlpha: 0})
      .to(socials, { duration: 0.5, x: '+=100', autoAlpha: 0}, '-=0.5')
      .to([desc, figure], { duration: 0.75, x: '-=1000', autoAlpha: 0, stagger: 0.25}, '-=0.25')
};
