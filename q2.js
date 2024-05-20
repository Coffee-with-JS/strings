// Find the number of substring which are pallindrome
let str = "ramomem"

// for(t of str){
//     console.log(t)
// }

// for(let i = 0; i<=str.length-1; i++){
//     console.log(str.slice(i, str.length-i))
//     // 0, 5
//     // 1, 4
//     // 2, 3
// }


for(let i = 0 ; i<=str.length-1; i++){

    for(let j = str.length-1; j>=i; j--){
        let sub_str = str.slice(i, j+1) 
        if(sub_str.length>1){
            // console.log(sub_str)
            let rev_str = sub_str.split("").reverse().join("")

            if(sub_str === rev_str){
                console.log(sub_str)
            }
        }
    }

}

// ramen 
// rame 
// ram
// ra
// r

// pallindrome means => madam => rev is also madam




// a string is given , check how many minimum character changes are required to make it pallindrome


// let str1 =  "madom"

// madom => modam

// let str2 = "abhishek"