window.addEventListener('scroll', animator)
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + screenLeft }
}
const animItems = document.querySelectorAll('.anim');
if (animItems.length >= 1) {
    function animator() {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i]
            const itemOffset = offset(animItem).top
            const animStart = 4
            if (animItem) {
                const itemHeight = animItem.offsetHeight
                let animItemPoint = window.innerHeight - itemHeight / animStart;

                if (itemHeight > window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight / animStart;
                }

                if ((window.pageYOffset > itemOffset - animItemPoint) && window.pageYOffset < (itemOffset + itemHeight)) {
                    animItem.classList.add('is_active')
                }
            }
        }
    }
}