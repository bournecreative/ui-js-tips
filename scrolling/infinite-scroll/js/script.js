// adding the scroll event listener is how we listen for when the document is scrolled

window.addEventListener('scroll', pageLocation)

/*
    We first identify the height of the window: document.documentElement.clientHeight
    Our screen is 900px heigh. we have 3 containers 900 * 3 so we know the height of the body is 2700px
    At the top of the page, the bottom is 2700px
    As we scroll down the page, the bottom of the page number goes down. The minimum number the page will be is
    900 because that is the height of thw screen.
    So we check when the bottom is less then 900. We add a 100px buffer to the page height to ensure we add a new
    container when appropriate.
    So when the document.documentElement.clientHeight < 1000, create a new section.

*/

function pageLocation() {
    const bottom = document.documentElement.getBoundingClientRect().bottom
    const winHeight = document.documentElement.clientHeight
    if (bottom < (winHeight + 100)) {
        generateNewSection()
    }
}

function generateNewSection() {
    const container = document.createElement('div')
    container.classList.add('green');
    document.body.appendChild(container)
}

        // generateNewSection()