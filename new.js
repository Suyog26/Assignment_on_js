let data =[] ;

const create = (value) =>{
    data.push(value);
}
/* const update = (index) =>{
   data[index] = {
     
   }
} */

create({
    id:2,
    fname:"suyog",
    lname:"Raut",
    age:25,
    gender:"male"
 });

create({
    id:1,
    fname:"Yash",
    lname:"purohit",
    age:24,
    gender:"male"
});

create({
    id:3,
    fname:"jatin",
    lname:"Rai",
    age:24,
    gender:"male"
});

create({
    id:4,
    fname:"yuvraj",
    lname:"singh",
    age:36,
    gender:"male"
});

create({
    id:5,
    fname:"rahul",
    lname:"dravid",
    age:52,
    gender:"male"
})


const update = (id , val) =>{
    for(let i =0 ; i<data.length ; i++){
      if(data[i].id === id){
        data[i] = val ;
      }
    }
 } 

 const val =({
    id:3,
    fname:"Dhanjay",
    lname:"Maroti",
    age:"23",
    gender:"male"
 });

 update(3,val);


 const remove = (id) =>{
    data = data.filter(data=> data.id != id);
 } 

 remove(1);


 console.log(data);