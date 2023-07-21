import type { Load } from '@sveltejs/kit';
import fs from "fs";

const wkDir = "./src/wknotes";
const listOfWknotes: object[] = [];

// import { Wknotes } from "../../types";

// ~t/bnierimi: Get content from the file using 
// function getContent(filename: string){
//   return fs.readFileSync(`${wkDir}/${filename}.md`, "utf-8")
// }

export const load: Load = async () => {
  const listOfWknotes = fs.readdirSync(wkDir)
  // for (let index = 0; index < arrayWknotes.length; index++) {
  //   const element = arrayWknotes[index];
  //   listOfWknotes.push({
  //     id: index,
  //     // cryptId: cryptid(`${index}`),
  //     title: element.split(".md")[0]
  //   })
  // }

  return { listOfWknotes };
};
