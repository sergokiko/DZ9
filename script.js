// let result
// function wakeUp(isWokeUp, cb ) {
// setTimeout(()=>{
//     if(isWokeUp){
//         console.log('молодець, ти проснувся!');
//         result = true
//         cb(null, result)
//     }else{
//         cb('ти проспав!!! твій день накрився!!!')
//     }
// },2000)
// }
// //
// function washTeath(data, cb){
//     setTimeout(()=>{
//         if(data){
//             let teathIsWashed = true
//             cb(null, teathIsWashed)
//         }else {
//             cb('ти не почистив зуби')
//         }
//     },2000)
// }
//
//  function goToHaveBreakfast(data,cb){
//     setTimeout(()=>{
//         if(data){
//             let sula = 500;
//             cb(null, sula)
//         }else{
//             cb(0)
//         }
//     },3000)
//
// }
//
// function goToWork(energy, cb){
//  setTimeout(()=>{
//      if(energy > 400){
//          let motavation = true;
//          cb(null, motavation)
//      }else {
//          cb('no motvation for work')
//      }
//  },2000)
// }
//
// function getSalary(data,cb){
//     setTimeout(()=>{
//         if(data){
//
//             let salary = 2000;
//             cb(null, salary)
//         }else {
//             cb('не достатньо мотивації щоб працювати, ти не отримаєш гроші')
//         }
//     },2000)
// }
//
// function goToPatry(data,cb){
//     setTimeout(()=>{
//         if(data >1000){
//             console.log("ти достатньо сьогодні заробив, гоу на вечірку");
//             data = data - 1500;
//             let isExelentParty = true
//             cb(null, isExelentParty)
//         }else {
//             console.log('недостатньо грошей для вечірки')
//         }
//     },2000)
// }
// function goSleep(data, cb){
//     setTimeout(()=>{
//         if(data){
//             console.log('ти сбогодні мав дуже продуктивний день, можна тепер і поспати');
//             cb(null, true )
//         }else {
//             cb('поганий день')
//         }
//     },2000)
// }
//
//
// wakeUp(true , (negative, positive)=>{
//    if(negative){
//        console.log(negative)
//    }else {
//        console.log(' Можеш іти чистити зуби');
//        washTeath(positive,(err , result)=>{
//            if(err){
//                console.log('оу, ти так і не почистив зуби');
//            }else {
//                console.log('супер, ти почистив зуби, іди снідай');
//                goToHaveBreakfast(result, (notEat , eat)=>{
//                    if(eat){
//                        console.log('молодець ти поїв і маєш сили щоб працювати');
//                        goToWork(eat, (noMotivation, motivated)=>{
//
//                           if(motivated){
//                               console.log('ти сьогодні получаєш зарплату за чудову працю')
//
//                               getSalary(motivated , (bezGroshey , manyMoney)=>{
//                                   if(manyMoney){
//                                       goToPatry(manyMoney, (noParty, goodParty)=>{
//                                          if(goodParty){
//                                              goSleep(goodParty, (badDay,GoodDay)=>{
//                                                  if(GoodDay){
//                                                      console.log('Good night');
//                                                  }
//                                              })
//                                          }
//                                       })
//
//                                   }
//                               })
//
//                           }
//
//                        })
//                    }
//                })
//            }
//        })
//    }
// });



//
// let result;
// function wakeUp(isWokeUp) {
//
//     return new Promise(((resolve, reject) => {
//         setTimeout(()=>{
//             if(isWokeUp){
//                 console.log('молодець, ти проснувся!');
//                 result = true
//                 resolve(result)
//             }else{
//                 reject('ти проспав!!! твій день накрився!!!')
//             }
//         },2000)
//     }))
//
// }
//
//
// function washTeeth(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(data){
//                 console.log('  почистив зуби!');
//                 let teethIsWashed = true
//                 resolve(teethIsWashed)
//             }else {
//                 reject('ти не почистив зуби')
//             }
//         },2000)
//
//     })
//
// }
//
//  function goToHaveBreakfast(data){
//     return new Promise((resolve, reject) => {
//
//         setTimeout(()=>{
//             if(data){
//                 let sula = 500;
//                 console.log("Ти добре поїв і в тебе тепер є багато сил");
//                 resolve(sula)
//             }else{
//                 reject('ти голодний!!!')
//             }
//         },3000)
//     })
//
// }
//
// function goToWork(energy){
//     return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(energy > 400){
//             let motavation = true;
//             console.log('в тебе достатньо сил і мотивації щоб іти на роботу');
//             resolve(motavation)
//         }else {
//             reject('no motvation for work')
//         }
//     },2000)
// })
// }
//
// function getSalary(motivation){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(motivation){
//                 console.log('в тебе сьогодні було багато мотивації щоб працювати і ти отриуєщ свою зарплатню');
//                 let salary = 2000;
//                 resolve(salary)
//             }else {
//                 reject('не достатньо мотивації щоб працювати, ти не отримаєш гроші')
//             }
//         },2000)
//     })
// }
//
// function goToPatry(money){
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(money >1000){
//             console.log("ти достатньо сьогодні заробив, гоу на вечірку");
//             money = money - 1000;
//             let isExelentParty = true
//             resolve(isExelentParty)
//         }else {
//             reject('недостатньо грошей для вечірки')
//         }
//     },2000)
// })
// }
//
//
// function goSleep(result){
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(result){
//             console.log('ти сб' +
//                 'сьогодні мав дуже продуктивний день, можна тепер і поспати');
//             resolve(true )
//         }else {
//             reject('поганий день')
//         }
//     },2000)
// })
// }


// wakeUp(false)
//     .then(isWaked => washTeeth(isWaked))
//     .then(teethIsWashed =>goToHaveBreakfast(teethIsWashed))
//     .then(isFoll => goToWork(isFoll))
//     .then(motivation => getSalary(motivation))
//     .then(salary => goToPatry(salary))
//     .then(partyIsGood => goSleep(partyIsGood))
//     .catch(reason => console.log(reason))
//     .finally(()=> console.log('ти лягаєш спати')),


// (async function myDay() {
//     try {
//         let isWaked = await wakeUp(false);
//         let teethIsWashed = await washTeeth(isWaked)
//         let isFoll = await goToHaveBreakfast(teethIsWashed)
//         let motivation = await goToWork(isFoll)
//         let salary = await getSalary(motivation)
//         let partyIsGood = await goToPatry(salary)
//         await goSleep(partyIsGood)
//     }catch (e) {
//         console.log(e);
//     }
// })()

