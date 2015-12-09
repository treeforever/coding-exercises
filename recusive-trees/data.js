parents = [
  {children: [
    {name: "Bob", age: 11},
    {name: "Alice", age: 12}
  ]},
  {children: [
    {name: "John", age: 22},
    {name: "L", age: 21},
    {name: "Will"}
  ]},
  {children: [
    {name: "Sam"}
  ]},
  {children: [
    {name: "Ruby"}
  ]},
  {children: [
    {name: "Victoria"}, {name: "Victor"}
  ]}
];

//Write function that, given a name, finds and returns the child of that name

function findThatChild(name, parents) {
  //TODO
   for (var i=0; i < children.length; i++){
     if (children[i].name == name){
       console.log(children[i]);
     }
   }
  }



//wrtie in both javascript & ruby

function findThatChild(name, parents) {

  for (var m=0; m < parents.length; m++){
    var v = parents[m].children;
    for (var i=0; i < v.length; i++){
     if (v[i].name == name){
       console.log(v[i]);
      }


  }
}}
