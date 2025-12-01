// // Method one

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         // to convert data into Object 
//         // const data = response.json()                                              // it will give pending, because it takes time to convert data into object
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);
//     }
// }

// getAllUsers()

// 2nd method

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log('E: ', error);
    })