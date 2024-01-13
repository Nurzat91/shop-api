//Если массив записать в файля, то при перезагрузке сервера данные сохраниться.
//чтоб читать файл, файловой системы test.json - readFile.ts

import {promises as fs} from 'fs';

const fileName = './test.json';

interface FileContents {
  message: string;
  author: string;
}
const run = async () =>{
  try{
    const fileContents = await fs.readFile(fileName); //тип Buffer, не строка
    const result = JSON.parse(fileContents.toString()) as FileContents;
    console.log('Result: ', result);
    console.log('Result: ', result.message);
  }catch (err){
    console.error(err);
  }
};

void run();