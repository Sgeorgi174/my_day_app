const clock = document.querySelector('.left__wrapper-time')
const weekDays = document.querySelector('.left__wrapper-day')
const temperature = document.querySelector('.left__wrapper-temperature')
const myAPI = 'f3076a0d-636e-47aa-97f6-c16cbc01c471' 

getInfo()

//Получение данных для виджета погоды

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    console.log(latitude);
    console.log(longitude);
  })


function getInfo() {
//    создаем дату
    let date = new Date
// создаем переменную для минут  
    let minutes = 0
//проверка на одночиловую минуту
    if (date.getMinutes().length <= 1){
        minutes = `0${getMinutes()}`
    } else {
        minutes = date.getMinutes()
    }
//переменная для дня недели
    let weekDay = ''
// подстановка дней строкой на русском
    switch (date.getDay()) {
        case 0 :
            weekDay = 'Воскресенье'
            break;
        case 1 :
            weekDay = 'Понедельник'
            break;
        case 2 :
            weekDay = 'Вторник'
            break;
        case 3 :
            weekDay = 'Среда'
            break;
        case 4 :
            weekDay = 'Четверг'
            break;
        case 5 :
            weekDay = 'Пятница'
            break;
        case 6 :
            weekDay = 'Суббота'
            break;
    }
//внесение данных в разметку
    weekDays.innerText = weekDay
    clock.innerText = `${date.getHours()}:${minutes}`
}