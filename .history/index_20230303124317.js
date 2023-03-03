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
console.time("response");

setTimeout(() => console.log("hello"), 3000);
console.timeEnd("response");
