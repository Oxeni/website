export  const smoothScroll = () => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
    window.scrollTo(0, 0)
}