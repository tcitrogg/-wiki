import type { Load } from '@sveltejs/kit';
import fs from "fs";

import { wknotes, wkDir } from "../../stores";
// import { Wknotes } from "../../types";

let listOfWknotes: object[] = [];
wknotes.subscribe((value)=>{
  listOfWknotes = value
})

// ~t/bnierimi: Get content from the file using 
function getContent(filename: string){
  return fs.readFileSync(`${wkDir}/${filename}.md`, "utf-8")
}

export const load: Load = async ({ params }:any) => {
  const find_wknote = listOfWknotes.find((wknote)=> `${wknote.id}` === params.id);
  // Get data with eg. `fetch`

  const each_wknote = {
    id: find_wknote?.id,
    title: find_wknote?.title,
    // cryptId: find_wknote?.cryptId,
    content: getContent(find_wknote?.title),
  }

  return {each_wknote};
};
