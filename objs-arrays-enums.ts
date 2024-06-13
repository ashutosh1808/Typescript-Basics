// const person:
/*{
    name:string,
    age:number
}*/
// const person:{
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number,string]
// }={
//     name:'Ashutosh',
//     age:21,
//     hobbies:['Sports','Cooking'],
//     role:[1,'author']
// }

// const ADMIN=0,READ_ONLY=1,AUTHOR=2

enum Role{ ADMIN='ADMIN', READ_ONLY=100, AUTHOR='AUTHOR'};

const person={
    name:'Ashutosh',
    age:21,
    hobbies:['Sports','Cooking'],
    role:Role.ADMIN
}

// person.role=[0,'admin','user']
// person.role.push('admin')
// person.role[1]=10

let favoriteActivities:any[]
favoriteActivities=['Sports']

console.log(person.name)
for(const hobby of person.hobbies){
    console.log(hobby)
    // console.log(hobby.map()) ==> error!!
}
// console.log(person.nickname)
if(person.role===Role.ADMIN){
    console.log("is admin")
}