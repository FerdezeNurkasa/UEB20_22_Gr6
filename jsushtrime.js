
const students=[
    {id: 1, "name":"student 1" },
    {id: 2, "name":"student 2" },
    {id: 3, "name":"student 3" },
] ;
console.log("studentet: ", students);
console.log("stringify: ", JSON.stringify(students, null, 4));
//ssmunesh me perdor to =string ne objekte
console.log(students.toString());  
//for each
const studentids=[];
students, forEach(function(std){
studentids.push(std.id);

});
console.log("IDte: ", studentids);

//for Each for each item
//map metoda .map()
//sa eshte i gjat qata qka e marrum psh students aq i ka edhe mapids
const mapids = students.map(function(std){
return std.id;
});
//arrow functions
const mapid = students.map(std => std.id);
//shigjeta perfaqeson kllapat edhe returnat te map metoda
//nuk mujm me apliku te void

// reduce()
const items=[
    (id: 1, name: "item 1", price: 15, category: "drinks"),
    (id: 2, name: "item 2", price: 12, category: "food"),
    (id: 3, name: "item 3", price: 3, category: "drinks"),

];

let totalprice=items.reduce(function(acc, item){
return acc+ item.price
}, totalprice);
console.log("total: ", totalprice);
console.log("total: ", totalprice2);

//anetari me cmimin me te madhe
let maxprice=items.reduce(function(acc, item){
return (acc >item.price || 0)? acc : item.price; //duhet edhe ni kusht
});
console.log(maxprice);

const drinks=items.filter(function(item){
    return item.category === "drinks";
    });
    const drink=items.filter(item=>item.category==="drinks");
    const food=items.filter(item=>item.category==="food");


console.log("drinks", JSON.stringify(drinks, null, 2));
console.log("foods", JSON.stringify(food, null, 2));

//kombinimi
let drinksprice=items.filter =(item=>item.category==="drinks").
                           map(item1=>item1.price).
                           reduce((acc.item1)=>acc+item3);

                           let filter1=items(item=>item.category==="drinks");
                           let mapimi=filter1.map(item1=>item.price);
                           let totali=mapimi.reduce((acc, item3)=>acc+item3);

                           console.log("drinks price: ",drinksprice);


//acc-acumulator
//s=0;(0, 1, 2)
// 0+1
//1+2...





console.log(students.map());





class personeli{
//konstruktori
consturctor(emri, mbiemri, paga){
    this.emri=emri;
    this.mbiemri=mbiemri;
    this.paga=paga;
}
printo(){
    console.log(this.emri+"  "+this.paga);
}


// console element perdoret per me testu kodin
// console.error("ka dodhur nje gabim...");
// console.assert(); 
// console.clear(); i fshin qkka ke shkru deri tash
// concole.count();--i njeh sa here ke hi nloop
// console.group();-e ban ni grup edhe i largon pak len hapsir si margin
// console.time();-kur nuk e dijm qka eshte te shkaktu vonesen    duhet me shkru edhe console.timeEnd(); ...
//...mrena ktyre dyjave me for loop per secilin iterim

// local storage- ruhen te dhanat e loginit(tokenin), ruhen nsesion edhe mesin nlocal storage

var x, y, text, obj;
x={ "name":"filan", "age": 31, "city":"ferizaj"};
y=JSON.stringify(x);
localStorage.setitem("test json", y);

text =localstorage.getitem("testJSON");
obj=JSON.parse(text);
console.log(obj.name);
}



