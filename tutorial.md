Titanium Adapter for Baqend 
===========================
![](https://fbcdn-photos-g-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-0/p160x160/1175532_1435043336734661_1180604515_n.png?oh=86dc0c271144743b63db5e4380243bf9&oe=56F16ED2&__gda__=1458345230_3b278d13b81b1751c3f0ee0c060c5b83)

Data Modeling
-------------

Before starting to implement, we should think about the data model of our app. As we want to build a sharable Todo list with time-tracking, a typical Todo item could look like this as JSON:

```javascript
{
  "listId": "#6c357294-73d1...", //A list ID the Todo pertains to
  "name": "My Todo", //The Todo's name
  "active": false, //True if we're working on it
  "done": false //True if the Todo is checked
  "activities": [ //A list of when we worked on the item
    {   "start": "2015-03-30T08:45:48.799Z", //from when
        "end": "2015-03-30T08:45:51.431Z" //to when
    },{...}]
}
```
This schema is quickly created using the dashboard - we've already done that for this tutorial. The explicit schema has the advantage that all data is automatically validated to prevent corrupt data. Also this gives us clever DB.Todo objects to program against. Schemas, i.e. the data models, are flexible and can be changed at any time.

```javascript
//Let's create a Todo item
function onReady() {
  var myTodo = new DB.Todo();
  myTodo.name = "My Todo";
  myTodo.active = false;
  printItem(myTodo);
  //We can also use the constructor
  var myOtherTodo = new DB.Todo({
    name : "My other Todo",
    active : false
  });
}

//Connect
DB.connect("http://tutorial.baqend.com");
//Wait for connection
DB.ready(onReady);


//Boilerplate code below
function printItem(todo) {
  console.log(todo.toJSON(true)); 
}
```