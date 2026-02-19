// check if two sentence have same words

// function haveSameWords(str1, str2){

//     let arr1 = [];
//     let arr2 = [];
//     let temp = "";

//     for(let i=0;i<str1.length;i++){
//         if(str1[i]!=" "){
//             temp+=str1[i];
            
//         }
//         else{
//             arr1[arr1.length] = temp;
//             temp = "";
//         }
//     }
//     arr1[arr1.length]=temp;
//     temp = "";

//     for(let i=0;i<str2.length;i++){
//         if(str2[i]!=" "){
//             temp+=str2[i];
            
//         }
//         else{
//             arr2[arr2.length] = temp;
//             temp = "";
//         }
//     }
//     arr2[arr2.length]=temp;
//     temp = "";
    
//     let isMatch = false;
//     for(let i=0;i<arr1.length;i++){
//         for(let j=0;j<arr2.length;j++){
//             if(arr1[i]==arr2[j]){
//                 console.log("True");
//                 return;
//             }
//         }
//     }
//     if(!isMatch){
//         console.log("False");
//         return;
//     }


// }
// haveSameWords("Is a person", "I am going ");


//Find word with maximum vowel

// function maxVwlWord(str){
//     str+=" ";
//     let count = 0;
//     let c = 0;
//     let vowelWord = "";
//     let temp = "";

//     for(let val of str){
//         if(val!=" "){
//             temp+=val;
//             if(val=='a'||val=='e'||val=='i'||val=='o'||val=='u'||
//                 val=='A'||val=='E'||val=='I'||val=='O'||val=='U'
//             ){  
//                 count++;
//             }
//         }
//         else{
//             if(count>c){
//                 vowelWord = "";
//                 c=count;
//                 vowelWord+=temp;
//             }
//             temp = "";
//             count = 0;
//         }
//     }
//     console.log(vowelWord)
// }
// maxVwlWord("sdha aabei zjde rohiteuooo");


// function longWord(str){
//     str+=" ";
//     let count = 0;
//     let c = 0;
//     let longestWord = "";
//     let temp = "";

//     for(let val of str){
//         if(val!=" "){  
//             temp+=val;
//             count++;
//         }
//         else{
//             if(count>c){
//                 longestWord = "";
//                 c=count;
//                 longestWord+=temp;
//             }
//             temp = "";
//             count = 0;
//         }
//     }
//     console.log(longestWord)
// }
// longWord("sdha aabei asdadvg rohoo");


function wordTime(str){
    let arr = str.split(" ");
    console.log(arr)
    let count = {};
    for(let val of arr){
        count[val] = (count[val] || 0) + 1;
    }
    console.log(count)
}

wordTime("apple banana banana chair banana apple")