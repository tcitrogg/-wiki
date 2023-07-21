import { writable } from "svelte/store";
import fs from "fs";
import ShortUniqueId from "short-unique-id";
// import { CryptoJS } from "crypto-js";

export const wkDir = "./src/wknotes";
const perWknotes: object[] = [];

// const shortid = () => {
//   const uid = new ShortUniqueId({ length: 11 })
//   return uid()
// }

// Encrypt

// const cryptid = (key: string) => {
//   var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123').toString();
//   return ciphertext
// }

const arrayWknotes = fs.readdirSync(wkDir)
for (let index = 0; index < arrayWknotes.length; index++) {
  const element = arrayWknotes[index];
  perWknotes.push({
    id: index,
    // cryptId: cryptid(`${index}`),
    title: element.split(".md")[0]
  })
}

// ~t/bnierimi: Former method
// .forEach((title: string) => {
//   perWknotes.push({
//     id: shortid(),
//     title: title
//   })
// })

export const wknotes = writable(perWknotes);
export const yonko = "bnierimi";


