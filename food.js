const tl = gsap.timeline({ defaults: { duration: .8 }})
tl
    .from('.sec1', { height: '0'})
    .from('#m-link', { x: "-150%" })
    .from('#navbar', { x: "-300%" })
    .from('#form', { x: '120%', ease: 'back' })
    .from('#food', { x: '-100%', opacity: 0, ease: 'back' })
    .from('.h1', { x: '100%', opacity: 0 })
    .from('.p', { x: '100%', opacity: 0 })
    .from('.a', { x: '100%', opacity: 0 })
    .from('.link', { opacity: 0, stagger: .5 })



