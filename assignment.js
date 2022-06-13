
// fetch("student_record.json")
//     .then(data => data.json())
//     .then(data =>{
//        let record=console.log(data);
//     });

// const jsondata = require('./student_record.json');

// // console.log(jsondata);

// function record (){
//     // const jsondata =require("./student_record.json");
//     return console.log(jsondata)
// }
    
// record();

var fs= require("fs");
var data = fs.readFileSync("./student_record.json")
var words = JSON.parse(data);

console.log(words);
console.log(words.student_record[0]);
console.log(words.student_record[1]);
console.log(words.student_record[2]);




// function create(){
//     if(words.student_record["id"]==1){
//         return words.student_record.name="suyog"
//     }
// }

// create();

const create = (value) =>{
    words=[];
    words.push(value);
}

create({
    id: 6,
    name: "kl rahul",
    age: 26,
    designation: "BD",
    Subject:"PCMB"
});

// // create({
// //     id: 5,
// //     name: "Suyog",
// //     age: 26,
// //     designation: "BD",
// //     Subject:"PCMB"
// // });



const update = (id , val) =>{
    for(let i =0 ; i<words.length ; i++){
      if(words[i].id === id){
        words[i] = val ;
      }
    }
 } 

 const val =({
    id: 6,
    name:"Dhanjay",
    age:23,
    designation:"BD",
    Subject:"PCMB"
 });

update(6,val);

 const remove = (id) =>{
    words = words.filter(words=> words.id != id);
 } 

 remove(6);

console.log(words);
