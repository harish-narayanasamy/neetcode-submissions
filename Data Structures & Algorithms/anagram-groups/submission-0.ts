class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let output =[]


        const lsMap= new Map();

   for(let x=0;x<strs.length;x++){

    let sorttedx = strs[x].split("").sort().join("");
    if(lsMap.has(sorttedx)){
        lsMap.get(sorttedx).push(strs[x])
    }else{
        lsMap.set(sorttedx,[strs[x]])
    }


   }

    for (const [key, value] of lsMap) {
    output.push(value);

  }

  return [...output] 
    }
}
