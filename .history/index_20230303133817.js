//SYNCHRONUS(orderd) ASYNCHRONUS(unorderd,acces dB,frtching files,tasks)
//-------------------------
//synchronus
// console.log("albin");
// console.log("parappallil");
// console.log("Vazhoor Kottaym");

//asynch
// console.log("albin");
// setTimeout(() => console.log("parappallil"), 1000);
// console.log("vazhoor Kottaym");

//CONSOLE.TIME()  //how much time take to start and end a process
//--------------------------------
// console.time("response");

// setTimeout(() => console.log("hello"), 3000);
// console.timeEnd("response");

//PROMISES  objects that encapsulate the resukt of an asynch opn
//--------------------
//states pending,resolved,rejected

// const msg = new Promise((gotIt, notYet) => {
//   let sendMessage = true;
//   if (sendMessage) {
//     gotIt("yeah recieved the message");
//   } else {
//     notYet("sorrry bruh,not recieved");
//   }
// });
// msg.then((value) => console.log(value)).catch((err) => console.log(err));

//a promise after 3 seconds to print thanks
// const pro = new Promise((resolve) => {
//   setTimeout(resolve, 2000);
// });
// pro.then(() => {
//   console.log("thanks ");
// });

// //passing time as argument to promise
// const pr = (time) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// pr(3000).then(() => {
//   console.log("thanks ");
// });

///ASYNC  with function to create without Promise keyword
//----------------------
// async function doWalk() {
//   let walking = false;
//   if (walking) {
//     return "yeah walking";
//   } else {
//     throw "cant walk now";
//   }
// }

// doWalk()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

///ASYNC  with function to create with Promise key word
//-------------------------------
// function passed() {
//   let pass = true;
//   if (pass) {
//     return Promise.resolve("yesh you are ");
//   } else {
//     return Promise.reject("Nah your not");
//   }
// }
// passed()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//AWAIT  we can eliminate the then and catch
async function senMail() {
  let send = true;
  if (send) {
    return "yeah the mail had been sended";
  } else {
    throw "nop there are some error";
  }
}
async function startProcess() {
  let message = await senMail();
  console.log(message);
}
startProcess();
