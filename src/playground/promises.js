const promise = new Promise((resolve, reject) => {
    reject('this is my resolve data')
})

promise
    .then((data) => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
