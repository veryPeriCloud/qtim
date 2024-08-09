export function useSerialize(obj: any) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      if (obj[p] !== null) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }      
    }
  return str.join("&");
}