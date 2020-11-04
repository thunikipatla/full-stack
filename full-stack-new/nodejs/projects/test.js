// function website(url, keywords) {
//     console.log(url);
//     console.log(keywords);
// }

// website('ww.facebook.com', 'fb', 'face', 'book');

users = [{
        "id": 1,
        "name": 'Srinivas',
        "password": "*******"
    },
    {
        "id": 2,
        "name": "Mark",
        "password": "*******"
    }

]

// console.log(users);
// console.log(users[0]);
// console.log(users[0].id);
// console.log(users[0].name);

var idparam = 1;

for (i = 0; i < users.length; i++) {
    // var idparam = 2;
    // console.log(idparam);
    if (idparam == users[i].id) {
        // res.send(users[i]);
        // console.log(idparam);
        console.log(users[i]);
    }
}