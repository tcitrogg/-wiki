import * as db from '$lib/server/database';

export async function load() {
  return await db.getAllPosts();
  // return await {
  //   posts: db.getAllPosts(),
  //   subs: db.getAllSubs(),
  // };
}