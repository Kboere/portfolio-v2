import gsap from 'gsap';

export const animatePageIn = () => {
    const banner1 = document.getElementById('page-banner');

    if (banner1) {
        const tl = gsap.timeline();

        tl.set(banner1, { 
            yPercent: 0,
        }).to(banner1, {
            yPercent: 100,
        });
    }
};

export const animatePageOut = (href, onComplete) => {
    const banner1 = document.getElementById('page-banner');

    if (banner1) {
        const tl = gsap.timeline();

        tl.set(banner1, { 
            yPercent: -100,
        }).to(banner1, {
            yPercent: 0,
            ease: 'power2.out',

            // On complete send the user to the new page
            onComplete: () => {
                window.location.assign(href);
            }
        });
    }
};
