const url = 'https://api.svømmetider.dk/personlige-rekorder?swimmer_id=34214&token=5c3f1ed54c58adee4368121ec506442b';

function loadJSON(callback) {
    //fetch(url)
        //.then(response => response.json())
        //.then(data => console.log(data));

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        //referrerPolicy: 'no-cors'
    })
        .then(response => response.json())
        .then(data => console.log(data));
}

//loadJSON();