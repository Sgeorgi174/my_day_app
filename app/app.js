const sun = document.querySelector('.left__wrapper-sun_anim')

sunAnimations ()
//animation for sun
function sunAnimations () {
    let start = Date.now(); // запомнить время начала

    let timer = setInterval(function() {
      // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
    
      if (timePassed >= Infinity) {
        clearInterval(timer);
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

//взаимодействия со списками
// список дел
const tasksBtn = document.querySelector('#tasks-btn')
tasksBtn.addEventListener('click', function(){
    const tasksList = document.querySelector('#tasks-list')
    const tasksForm = document.querySelector('#form-tasks')
    const textTask = tasksForm.value
    const htmlTasks = `    
    <li class="right__item">
        <div class="right__item-remove">
            <img src="./img/remove.png">
        </div>
        <div data-check='check' class="right__item-check"></div>
        <div data-text='text' class="right__item-text">${textTask}</div>
    </li>
    `
    if (textTask == ''){
        return ''
    } else {
        tasksList.insertAdjacentHTML('beforeend', htmlTasks)
        tasksForm.value = ''
    }
    

})

//список покупок
const goodsBtn = document.querySelector('#goods-btn')
goodsBtn.addEventListener('click', function(){
    const goodsList = document.querySelector('#goods-list')
    const goodsForm = document.querySelector('#form-goods')
    const textTask = goodsForm.value
    const htmlTasks = `    
    <li class="right__item">
        <div class="right__item-remove">
            <img src="./img/remove.png">
        </div>
        <div data-check='check' class="right__item-check"></div>
        <div data-text='text' class="right__item-text">${textTask}</div>
    </li>
    `
    if (textTask == ''){
        return ''
    } else {
        goodsList.insertAdjacentHTML('beforeend', htmlTasks)
        goodsForm.value = ''
    }
    

})

// список расходов
const costsBtn = document.querySelector('#costs-btn')
costsBtn.addEventListener('click',function(){
    const costsList = document.querySelector('#costs-list')
    const costsForm = document.querySelector('#form-costs')
    const textTask = costsForm.value
    const htmlTasks = `    
    <li class="right__item">
        <div class="right__item-remove">
            <img src="./img/remove.png">
        </div>
        <div class="right__item-text right__item-text_number">${textTask}</div>
    </li>
    `
    if (textTask == '' || textTask != Number(textTask)){
        return ''
    } else {
        costsList.insertAdjacentHTML('beforeend', htmlTasks)
        costsForm.value = ''
        totalSum()
    }
})

// суммирование в меню расходы
function totalSum(){
    const totalList = document.querySelectorAll('.right__item-text_number')
    let result = 0
    totalList.forEach(function(item){
        result += Number(item.innerText) 
    })
    const totalValue = document.querySelector('.right__total_number')
    totalValue.innerText = result
}

//Дейсвие кнопки удалить
window.addEventListener('click', function(event){
    if (event.target.classList == 'right__item-remove'){
        event.target.closest('.right__item').remove()
        totalSum()
    }
})

//Дейсвие кнопки выполнено 
window.addEventListener('click', function(event){     
    if (event.target.dataset.check == 'check') {
        event.target.classList.toggle('right__item-check_active')
        const taskBox = event.target.closest('.right__item')
        const taskText = taskBox.querySelector('[data-text]')
        taskText.classList.toggle('right__item-text_remove')
    }
})








