

let arrOne = [1,2,3,5];
let arrTwo = [25,4,9,1]
arrOne.sort((a, b) => a - b);
arrTwo.sort((a, b) => a - b);
let flag = true;
for (let i = 0; i <arrOne.length ; i++) {
    if(arrOne[i]*arrOne[i] !== arrTwo[i]){
        flag = false
    }
}
console.log(flag);


function annagram(srtOne , strTwo) {
   let newStrOne =  srtOne.toLowerCase().split('').sort().join('')
   let newStrTwo =  strTwo.toLowerCase().split('').sort().join('');
    return newStrOne === newStrTwo;

}



