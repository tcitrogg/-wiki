import fs from "fs";
import { AES } from "crypto-js";
import { nanoid } from 'nanoid';

const location = "./src/posts";
let key = "t/Wiki"

// <algos: algorithm>
const encode = (text:number)=>{
  return nanoid() 
  
  // var ciphertext = AES.encrypt(text, key=key);
  // return ciphertext.toString()
}
// var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
// const encode = (text:any)=>{}


// <posts: files>
// Get all files in directory
export const getAllPosts = () => {
  const posts: any[] = []
  fs.readdirSync(location).forEach((each_post, index)=>{
    
    posts.push({
      id: index,
      post: each_post
    })
  })

  return { posts };
};

// Get content from a file
function getContent(filename: string | undefined) {
  // return fs.readFileSync(`${location}/${filename}.md`, "utf-8")
  return fs.readFileSync(`${location}/${filename}`, "utf-8")
}

// Get a file and it contents
export const getPost = async (params: any) => {
  const allPosts = getAllPosts().posts
  
  const result: object = allPosts.find((wknote) => `${allPosts.indexOf(wknote)}` === params.id);
  // // Get data with eg. `fetch`
  
  const postId = allPosts.indexOf(result)
  

  const post = {
    id: postId,
    title: result.post,
    content: getContent(result.post),
  }
  // console.log(post)

  return post;
};


// <subs: folder>

// // Get all directory in location
// export const getAllSubs = () => {
//   const listOfSubs = fs.readdirSync(location).filter((each_sub)=>{
//       fs.statSync(`/`+each_sub).isDirectory()
//       console.log(each_sub)
//     })
//   console.log(listOfSubs)

//   return listOfSubs;
// };
