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

const promise = new Promise((resolve, reject) => {
  let fileLoad = 1;
  if (fileLoad) {
    resolve("file loaded my booi");
  } else {
    reject("its not been loaded");
  }
});
promise.then((value) => console.log(value)).catch((err) => console.log(err));
