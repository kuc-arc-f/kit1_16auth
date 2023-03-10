//import { goto } from '$app/navigation';
import LibCookie from '$lib/LibCookie';
import LibConfig from '$lib/LibConfig';

//
export async function load({ params, url }) {
console.log("#+layout.ts");
  if(url.pathname !== '/login') {
//console.log(url.pathname);
    if(typeof(window) !== "undefined") {
      const key = LibConfig.COOKIE_KEY_AUTH;
      const auth = LibCookie.get_cookie(key);
      if(typeof auth === "undefined" || auth === null)
      {
        location.href = '/login';
      }
console.log(key, auth);
    }
  }
  return {
    items: []
  };
}