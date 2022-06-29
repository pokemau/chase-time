

const getDateNow = () => {
   //names
   const dayName = document.querySelector('.dayName')
   const month = document.querySelector('.month')
   const dayNum = document.querySelector('.dayNum')
   const year = document.querySelector('.year')
   //numbers
   const hour = document.querySelector('.hour')
   const minutes = document.querySelector('.minutes')
   const seconds = document.querySelector('.seconds')
   dateNow = new Date()

   const months = ['January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August', 'September',
      'October', 'November', 'December']
   const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
      'Thursday', 'Friday', 'Saturday']

   givenDate = dateNow.getDate()
   givenMonth = dateNow.getMonth()
   givenDay = dateNow.getDay()
   givenYear = dateNow.getFullYear()
   dayName.innerText = givenDate
   month.innerText = months[givenMonth]
   dayNum.innerText = days[givenDay]
   year.innerText = givenYear

   givenHour = dateNow.getHours()
   givenMins = dateNow.getMinutes()
   givenSecs = dateNow.getSeconds()
   hour.innerText = givenHour
   if(givenMins === 0){
      minutes.innerText = '00'
   }
   if(givenMins < 10){
      minutes.innerText = '0' + givenSecs
   } else{
      minutes.innerText = givenMins
   }
   
   if(givenSecs === 0){
      seconds.innerText = '00'
   }
   if(givenSecs < 10){
      seconds.innerText = '0' + givenSecs
   } else{
      seconds.innerText = givenSecs
   }
}

setInterval(getDateNow, 1000)