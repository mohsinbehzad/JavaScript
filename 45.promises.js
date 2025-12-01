// One
const firstPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

firstPromise.then(function(){
    console.log('Promise one consumed');
})

// Two
new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log('Promise two has been called');
    resolve()
  }, 1000)      
}).then(function(){
    console.log('Async Task2 resolved');
})

// Three
const thirdPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Mohsin', age: 24})
    }, 1000)
})

thirdPromise.then(function(user){
    console.log(user);
})

// 4
const fourthPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username: "Mohsin Behzad", password: 12345})
        }else{
            reject('ERROR: Something went Wrong!');
        }
    })
})

fourthPromise.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('The promise is either resolved or rejected.');
})

// 5
const fifthPromise = new Promise(function(resolve, reject){
    let error = true;
    if(!error){
        resolve({username: 'Khan' , email: 'Khan@gmail.com'})
    } else{
        reject('ERROR: Promise Five went wrong');
    }
})

async function consumeFifthPromise() {
    try {
        const response = await fifthPromise
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumeFifthPromise()