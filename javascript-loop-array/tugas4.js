// for (let i = 0 ; i <= 10 ; i++ ){
//     console.log(i)
// }

// for (let i = 0 ; i <= 10 ; i++ ){
//     if (i % 2 != 0){
//         console.log(i)
//     }
// }

// for (let i = 0 ; i <= 10 ; i++ ){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

let array1 = [1,2,3,4,5,6]
console.log(array1[5])

let array2 = [5,2,4,1,3,5]
array2.sort()
console.log(array2)

let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for (i = 0; i < array3.length; i++){
    console.log(array3[i])
}

let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for (i = 0; i<array4.length ; i++){
    if (array4[i] % 2 == 0){
        console.log(array4[i])
    }
}

let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
let kata = kalimat.join(" ")
console.log(kata)

var sayuran=[]
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge")
console.log(sayuran)