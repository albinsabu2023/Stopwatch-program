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
const pr = new Promise((resolve) => {
  setTimeout(resolve, 1000);
});
pr.then(() => {
  console.log("thanks ");
});
