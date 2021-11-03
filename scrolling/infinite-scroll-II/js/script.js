
const pageGenerator = {
    init() {
        const container = document.querySelector('.container');
        if (!container) {
            return;
        }
        this.count = 0;
        this.registerEventListeners();
    },
    registerEventListeners() {
        window.addEventListener('scroll', this.pageLocation.bind(this))
    },
    pageLocation() {
        if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
            const currentContainer = document.querySelector(`[data-index="${this.count}"]`);
            const currentContainerIndex = currentContainer.dataset.index;
            if (parseInt(currentContainerIndex) !== 0) {
                const inactiveBox = currentContainer.querySelector('.msg-box');
                const inactiveInnerBox = currentContainer.querySelector('.inner-box');
                inactiveBox.classList.add('active')
                inactiveInnerBox.classList.add('active')
            }
            this.generateNewSection();
        }
    },
    generateNewSection() {
        this.count = this.count + 1
        const container = document.createElement('div')
        container.classList.add('new-container');
        container.setAttribute("data-index", this.count)
        document.body.insertAdjacentElement('beforeend', container)
        // container el
        const msgBox = document.createElement('div')
        msgBox.classList.add('msg-box')
        container.insertAdjacentElement("beforeend", msgBox)
        // inner el
        const innerBox = document.createElement('div')
        innerBox.classList.add('inner-box')
        msgBox.insertAdjacentElement("beforeend", innerBox)
        // msg 1
        const msg = document.createElement('p')
        msg.textContent = "End of Page"
        innerBox.insertAdjacentElement("beforeend", msg)
        // msg 2
        const msg2 = document.createElement('p')
        msg2.textContent = "Keep Scrolling...forever"
        msgBox.insertAdjacentElement("beforeend", msg2)
    }
}

pageGenerator.init();

