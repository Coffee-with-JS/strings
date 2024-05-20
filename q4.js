// print each word in a new line
// let str = "Ram is dancing"

// str = str + " "


// // console.log(str.split(" "))

// let word = ""
// for(let t of str){
//     if( t!=" "){
//       word = word + t // is
//     }
//     else{
//         console.log(word) // Ram
//         word = ""
//     }

// }


let str = "       Ram         is       dancing     "
let word = ""
for(let t of str){
    if( t!=" "){
      word = word + t // is
    }
    else if(t == " " && word != ""){
        console.log(word) // Ram
        word = ""
    }

}