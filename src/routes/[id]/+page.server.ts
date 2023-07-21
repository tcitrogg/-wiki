import type { Load } from '@sveltejs/kit';
import fs from "fs";

const wkDir = "./src/wknotes";
// const listOfWknotes: object[] = [];

const listOfWknotes = fs.readdirSync(wkDir)
// for (let index = 0; index < arrayWknotes.length; index++) {
//   const element = arrayWknotes[index];
//   listOfWknotes.push({
//     id: index,
//     // cryptId: cryptid(`${index}`),
//     title: element.split(".md")[0]
//   })
// }
// import { Wknotes } from "../../types";

// ~t/bnierimi: Get content from the file using 
function getContent(filename: string){
  // return fs.readFileSync(`${wkDir}/${filename}.md`, "utf-8")
  return fs.readFileSync(`${wkDir}/${filename}`, "utf-8")
}

export const load: Load = async ({ params }:any) => {
  const find_wknote: string = listOfWknotes.find((wknote)=> `${listOfWknotes.indexOf(wknote)}` === params.id);
  // Get data with eg. `fetch`

  const each_wknote = {
    id: listOfWknotes.indexOf(find_wknote),
    title: find_wknote,
    // cryptId: find_wknote?.cryptId,
    content: getContent(find_wknote),
  }
  console.log(each_wknote)

  return {each_wknote};
};
