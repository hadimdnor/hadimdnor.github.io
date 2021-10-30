let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click",function(){
    let userName  = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail  = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userCourt= document.getElementById("userCourt")
    let userCourtVal = userCourt.value

    let playHour = document.getElementById("playHour")
    let playHourVal = playHour.value

    let userRemarks  = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    bookCourtNow(userNameVal, userEmailVal,userCourtVal,playHourVal,userRemarksVal)
})



function bookCourtNow(userName, userEmail, userCourt, userHour,userRemarks){
    let url = 'https://api.sheety.co/037280b6973c5dbe7ff7a69aaa72d0a9/courtBookingApp/courtBooking';
    let body = {
        courtbooking: {
            name: userName,
            email: userEmail,
            court: userCourt,
            hour: userHour,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then(json => {
        // Do something with object
        console.log(json.courtBooking);
        alert(json.courtBooking.name +"have book " + json.courtBooking.court + "for" + json.courtBooking.hour + "added to your list ")
    });
}

