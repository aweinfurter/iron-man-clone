document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    const aboutSection = document.querySelector('.about')
    const heightAbout = aboutSection.clientHeight

    window.addEventListener('scroll', function() {
        const actualPosition = window.scrollY
        const headerElement = document.querySelector('header')

        headerElement.style.transition = 'background-color 0.2s ease-in-out'
      
        if (actualPosition > heightAbout){
            headerElement.style.backgroundImage = 'nonw'
            headerElement.style.backgroundColor = 'rgba(0,0,0,.93)'
        } else  if (actualPosition <= heightAbout) {
            headerElement.style.backgroundColor = 'transparent'
            headerElement.style.backgroundImage = 'linear-gradient(to bottom, #000, transparent)'
        }
      })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabTarget = botao.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hiddenTabs()
            const currentTab = tab.className
            tab.classList.add(`${currentTab}--is--active`)
            removeActiveButton()
            botao.target.classList.add('shows__tabs__button--is--active')
        })
    }
})

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active')
    }
}

function hiddenTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        const classTabName = tabsContainer[i].classList.item(1)
        tabsContainer[i].classList.remove(classTabName)
    }
}