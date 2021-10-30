let refreshNowBtn = document.getElementById("refreshNow")
refreshNowBtn.addEventListener("click", function(){
    getBooking()
})

function getBooking(){
    let url = 'https://api.sheety.co/037280b6973c5dbe7ff7a69aaa72d0a9/courtBookingApp/courtBooking';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
        // Do something with the data
        console.log(json.courtBooking);
        let bookingNameList = document.getElementById("bookingNameList")
        let bookingIds = []

        for(let k = bookingNameList.rows.length - 1; k > 0; k--){
            bookingNameList.deleteRow(k)
        }

        for( let i = 0; i<json.courtBooking.length; i++){
            let gName = json.courtBooking[i].name;
            let gEmail = json.courtBooking[i].email;
            let gCourt = json.courtBooking[i].court;
            let gHour = json.courtBooking[i].hour
            let gRemarks = json.courtBooking[i].remarks;
            let gId = json.courtBooking[i].id;
            let btnId = "delete"+ gId

            let row = bookingNameList.insertRow(bookingNameList.rows.length)
            row.insertCell(0).innerHTML = gId
            row.insertCell(1).innerHTML = gName
            row.insertCell(2).innerHTML = gEmail
            row.insertCell(3).innerHTML = gCourt
            row.insertCell(4).innerHTML = gHour
            row.insertCell(5).innerHTML = gRemarks
            row.insertCell(6).innerHTML = "<button id='"+ btnId + "'type='button' class='btn btn-danger'> Delete</button>"

            bookingIds.push(btnId)
        }

        for( let j = 0; j<bookingIds.length; j++){
            let el = document.getElementById(bookingIds[j])
            el.addEventListener("click", function(){
                let theId = el.id.replace("delete","")
                DeleteBooking(theId)
            })
        }       
    })
};


   

function DeleteBooking(id){

    let url = 'https://api.sheety.co/037280b6973c5dbe7ff7a69aaa72d0a9/courtBookingApp/courtBooking/2';
    fetch(url, {
        method: 'DELETE',
    }) 
            .then(() => {
            alert("Your Selection " + id + " been remove ")
            getBooking()
        });
}
   