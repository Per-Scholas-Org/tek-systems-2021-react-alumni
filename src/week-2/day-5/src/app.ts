import fs from 'fs';

import express from 'express';

import {getPort} from './config-info.js';

// console.log('hi');



const app=express();
const PORT =getPort;


// app.get('/name', (req,res))=>{
//     fs.readFile('./resources/names.txt'. 'urf8', (err,data)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         const queryParams



//     })
// }