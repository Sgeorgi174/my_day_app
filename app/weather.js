const clock = document.querySelector('.left__wrapper-time')
const weekDays = document.querySelector('.left__wrapper-day')
const temperature = document.querySelector('.left__wrapper-temperature') 

getInfo()

//Получение данных для виджета погоды

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords
    
    
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '387df3757cmsh79ba3f0b44ce0e1p19dc57jsnc8bce64eb40b',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

    const fetchData = async () => {
        const result = await fetch(url, options);
        const data = await result.json();
        temperature.innerText = `${data.current.temp_c} °С`
}
fetchData()
});

  


function getInfo() {

//    создаем дату
    let date = new Date
// создаем переменную для минут  
    let minutes = 0
    let hours = 0
    console.log(date);
//проверка на одночиловую минуту
    if (
    date.getMinutes() === 1 || 
    date.getMinutes() === 2 || 
    date.getMinutes() === 3 || 
    date.getMinutes() === 4 ||
    date.getMinutes() === 5 || 
    date.getMinutes() === 6 || 
    date.getMinutes() === 7 || 
    date.getMinutes() === 8 ||
    date.getMinutes() === 9 ||
    date.getMinutes() === 0 
    ){
        minutes = `0${date.getMinutes()}`
    } else {
        minutes = date.getMinutes()
    }

    if (
    date.getHours() === 1 || 
    date.getHours() === 2 || 
    date.getHours() === 3 || 
    date.getHours() === 4 ||
    date.getHours() === 5 || 
    date.getHours() === 6 || 
    date.getHours() === 7 || 
    date.getHours() === 8 ||
    date.getHours() === 9 ||
    date.getHours() === 0 
    ){
        hours = `0${date.getHours()}`
    } else {
        hours = date.getHours()
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
    clock.innerText = `${hours}:${minutes}`
}