const myCountPromise = (value) => {
    return new Promise ((resolve, reject) => {
        if (value != null ) (
            setTimeout(function() {
                resolve(value * 2)
              }, 2000)
        )
        else {
            reject("Maaf tidak ada nilai dalam parameter")
        }
    })
}

myCountPromise(2)
   .then((result) => { 
     console.log(result)
   })
   .catch((error) => { 
     console.log(error)
   })