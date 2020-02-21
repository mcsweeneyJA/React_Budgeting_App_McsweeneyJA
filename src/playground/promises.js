const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Jack',
            age: 26
        });
        // reject('Something went fucked wrong');
     
    }, 5000);
    
});
console.log('before');


promise.then(( data) => {
    console.log("1", data);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('other promise');
        // reject('Something went fucked wrong');
      }, 5000);
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error)
});


console.log('after');