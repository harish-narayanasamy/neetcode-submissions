class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */


  mapsEqual<K, V>(a: Map<K, V>, b: Map<K, V>): boolean {
  if (a.size !== b.size) return false;

  for (const [key, value] of a) {
    if (!b.has(key) || b.get(key) !== value) {
      return false;
    }
  }

  return true;
}
    isAnagram(s: string, t: string): boolean {

        const ls = s.toLowerCase();
        const ts = t.toLowerCase();

        if(ls.length<1 || ts.length<1){
            return false
        };
        if(ls == ts){
            return true
        }
        if(ls.length != ts.length){
            return false
        }
        const lsMap= new Map();
        const tsMap= new Map();

        for(let x=0;x<ls.length;x++){
            if(lsMap.has(ls[x])){
                lsMap.set(ls[x],lsMap.get(ls[x])+1)
            }else{
                lsMap.set(ls[x],1)
            }

            if(tsMap.has(ts[x])){
                tsMap.set(ts[x],tsMap.get(ts[x])+1)
            }else{
                tsMap.set(ts[x],1)
            }
        }
        if(this.mapsEqual(lsMap,tsMap)){
            return true
        }else{
            return false
        }
    }
}