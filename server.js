'use strict'

// In order Important Essental --

// Import For Express
const express = require('express');

// Server or APP must be named  every thing will be in server 
// i will use server .method i want  take all fun came from express
//and put it in server 

// // must install npm i cors
const cors =require('cors');
// // make server open for any client by cors 


const server =express();
server.use(cors()); 

// To run the server I want Port in server  
// every server have  one port at least 
 // portt 3010
const Port =3010;
// To listen to the this port only 

// how can the client side sent to me requst use the  get
// take 2 parameter
// use this rout if there is a requst in this side 
// requst and responce any thing i want 
// when send requst use API i need URL
// how to get me URL 
//http://localhost:3010/test   work localy 
server.get('/test',(req,res)=>{
// send responce when get a requst 
res.send('Hi you from responce for test');
// responce string 


})


// If the client send me a name  and the client need to recive aspecif informaton
//http://localhost:3010/GetData?name=bulbasaur

server.get('/GetData',(a,b)=>{
    //Take the parameter that the client send in URL 
    //Qury string Parameter QSP 
    // name = venusaur   كيف ممكن اصل الى هذا الباراميتر
    //Requst.Qury  can get data from client side 
    // console.log(a.query);
    const name1= a.query.name;
    // return name1;
    // console.log(name1);
    // Thre is a method filter or find or include 
    const result1 =PockData.results.find((item)=>{

        if (item.name== name1)
        

return item;



    }
    
    )
  b.send(result1);
 
    })
    
    









// how i can test API requst ? 



// i can do any rout i want 
// we make a home and test route
// To make anthore Route new route 
//http://localhost:3010/
server.get('/',(a,b)=>
{

b.send('Hello from Home route')

})

// if i want to send specific data in json file
// first home 
//then  test 
// to test our server  by use browswer or Thunder Client to test server



// I take a data from pokeapi.co   and creat a data.json and make 
// a copy past 


// How i can reach the data.json BY IMPORT in server side 
// All data in json in   PockData
const PockData=require('./assets/data.json');

// I will sent as client or front end the name of pokmens
//Creat a new rout 
// http://localhost:3010/Poke
// the Slash very important /   forordSlach
server.get('/Poke',(a,b)=>{
// This consol in terminal 
// console.log('Poko Info ')

// by send will show un browser 
//We need to take a name to end by array of name  to sent to front end client
// method allow take data use map method
// The first Route 
let Pdata = PockData.results.map((item)=>{
return item.name;
// array contine name the result will be 

})
b.send(Pdata);
b.status(200).send(Pdata);
})

// I must to run the Url to show the result in terminal 


//Status Code: 200 OK (from memory cache)  Network--->header
//Status Code: 404 Page not found
//Status Code: 304 not modified the same last responce evey thing is successed

// status i want   b.status(404).send(Pdata)
//univers route 
// في حال كان هنالك خربطة في URL
// server.get('*',(a,b)=>{
// b.status(404).send('Sorry ,The page not Found');})

server.listen(Port,()=>
{
    // consol .log  apper in termenal not in the browser  becouse we do not have html 
    // develp the server  side only
    // there is no html file
    // the result only in the terminl it self

console.log(`I am listening on ${Port}`);
// node server.js" to get the result
// i must to stop the server  save  for update the change
// stop server  and run t again when there is a update 


})

// must be the last one 
 server.get('*',(a,b)=>{
 b.status(404).send('Sorry ,The page not Found');})







