//animation for sun
const sun = document.querySelector('.left__wrapper-sun_anim')

sunAnimations ()

function sunAnimations () {
    let start = Date.now(); // запомнить время начала

    let timer = setInterval(function() {
      // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
    
      if (timePassed >= Infinity) {
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
      }
    
      // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
    
    }, 20);
    
    // в то время как timePassed идёт от 0 до 2000
    // transform изменяет значение
    function draw(timePassed) {
      sun.style.transform = `rotate(${timePassed / 50}deg)`
    }
}

//tabs and active menu
const menuTabs = document.querySelectorAll('[data-tab]')
const contentBoxes = document.querySelectorAll('[data-tab-content]')
menuTabs.forEach(function(item){
    item.addEventListener('click',function(){
        contentBoxes.forEach(function(item){
            item.classList.add('right__hidden')
        })
        const contentBox = document.querySelector('#' + this.dataset.tab)
        contentBox.classList.remove('right__hidden')

        menuTabs.forEach(function(item){
            item.classList.remove('nav__item_active')
        })
        item.classList.add('nav__item_active')
    })
})





