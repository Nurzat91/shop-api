//Если массив записать в файля, то при перезагрузке сервера данные сохраниться.
//чтоб читать файл, файловой системы test.json - readFile.ts

import {promises as fs} from 'fs';

//название файла
const fileName = './test.txt';

const run = async () =>{
  try{
    await fs.writeFile(fileName, 'Hello world!');
    console.log('File was saved!');
  }catch (err){
    console.error(err);
  }
};

void run();