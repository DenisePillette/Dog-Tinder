const BASE = 'http://localhost:3000'

let getDogs = function() {
    return fetch(BASE + '/dogs')
        .then((resp) => {
            let json = resp.json()
            console.log(json);
            return json
        })
}

let createDog = function(dog) {
    return fetch(BASE + '/dogs', {
        body: JSON.stringify(dog),
        headers:{
            'Content-Type': 'application/json'
        },
        method: "POST"
    })
        .then((resp) => {
            let json = resp.json()

            return json
        })
}


export  { getDogs, createDog }
