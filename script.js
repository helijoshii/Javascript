// const getTodos = (resources) => {

//     return new Promise((resolve, reject) => {
    
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange', () => {
//             // console.log(request, request.readyState);

            
//             if (request.readyState === 4 && request.status === 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             } 
//             else if (request.readyState === 4) {
//                 reject('error getting resource');
//             }
//         });

//         request.open('GET', 'todos.json');
//         request.send();

//     });
//     // const request = new XMLHttpRequest();

//     // request.addEventListener('readystatechange', () => {
//     //     // console.log(request, request.readyState);

        
//     //     if (request.readyState === 4 && request.status === 200) {
//     //         const data = JSON.parse(request.responseText);
//     //         callback(undefined, data);
//     //     } 
//     //     else if (request.readyState === 4) {
//     //         callback('could not fetch data', undefined);
//     //     }
//     // });

//     // request.open('GET', 'todos.json');
//     // request.send();
// };

// console.log(1);
// console.log(2);

// // getTodos((err, data) => {
// //     console.log('callback fired');
// //     if (err) {
// //         console.log(err);
// //     } else {
// //         console.log(data);
// //     }
// // });

// // console.log(3);
// // console.log(4);


// // Promise example

// getTodos('todos.json').then(data => {
//     console.log('promise resolved: ', data)
// }).catch(err => {
//     console.log('promise rejected: ', err);
// });



// fetch api and promise chaining

// fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
//     console.log('Resolved', response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('Rejected', err);
// });


//async & await

const getTodos = async() => {
    const response = await fetch('todoss.json');
    const data = await response.json();
    // console.log('resolved', data);

    return data;
};

getTodos()
    .then(data => console.log('resolve:', data))
    .catch(err => console.log('rejected:', err.message));
// const test = getTodos();
// console.log(test);

console.log('Heli');