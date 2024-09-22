let currentDate = Date.now();
let paragraphError = document.getElementById("error");

let buttonClick = document.getElementById("countButton");
buttonClick.addEventListener("click", function() {
    paragraphError.textContent = "";
    let inputValue = document.getElementById("start");
    let birthdayDate = inputValue.value;
    let birthdayDateMlSec = Date.parse(birthdayDate);
    let difference = birthdayDateMlSec - currentDate;
    let differenceInDays = Math.floor(difference/1000/60/60/24);
    let paragraph = document.getElementById("result");

    let inputClick = document.getElementById('start');
    inputClick.addEventListener("click", function() {
        paragraph.textContent = "";
    })

    if (birthdayDate == "") {
        paragraphError.textContent = `Ошибка, введите дату`
    }


    if (differenceInDays.toString().endsWith('1') && !(differenceInDays.toString().endsWith('11'))) 
        {
        paragraph.textContent = `Остался ${differenceInDays} день до вашего дня рождения`;
    } 
    else if (differenceInDays.toString().endsWith('2') && !(differenceInDays.toString().endsWith('12')) || 
    differenceInDays.toString().endsWith('4')  && !(differenceInDays.toString().endsWith('14'))|| 
    differenceInDays.toString().endsWith('3')   && !(differenceInDays.toString().endsWith('13')) 
) 
    {
        paragraph.textContent = `Осталось ${differenceInDays} дня до вашего дня рождения`;
    }

    else if (differenceInDays.toString().endsWith('5') ||
            differenceInDays.toString().endsWith('6')  ||
            differenceInDays.toString().endsWith('7')  ||
            differenceInDays.toString().endsWith('8')  ||
            differenceInDays.toString().endsWith('9')  ||
            differenceInDays.toString().endsWith('0')  ||
            differenceInDays.toString().endsWith('11') ||
            differenceInDays.toString().endsWith('12') ||
            differenceInDays.toString().endsWith('13') ||
            differenceInDays.toString().endsWith('14')
             
    )
    {
        paragraph.textContent = `Осталось ${differenceInDays} дней до вашего дня рождения`; 
    }

    console.log(birthdayDate);

})