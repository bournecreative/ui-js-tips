
const BackToTop = {
    init() {
        this.backToTop = document.querySelector('.back-to-top__icon');
        if (!this.backToTop) {
            return;
        }
        this.registerEventListeners();
    },
    registerEventListeners() {
        this.backToTop.addEventListener("click", this.scrollToTop);
        window.addEventListener("scroll", this.revealBackToTop.bind(this))
    },
    revealBackToTop() {
        const viewportHeight = document.documentElement.clientHeight;
        const top = document.documentElement.getBoundingClientRect().top;
        if (top < (-viewportHeight / 2)) {
            this.backToTop.classList.add("show")
        } else {
            this.backToTop.classList.remove("show")
        }
    },
    scrollToTop() {
        window.scroll(0, 0)
    }
}

window.addEventListener("DOMContentLoaded", function () {
    BackToTop.init();
})