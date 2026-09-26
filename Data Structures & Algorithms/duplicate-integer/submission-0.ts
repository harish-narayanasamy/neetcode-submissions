class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        if(nums.length <=1){
            return false;
        }
        const sortedNums = nums.sort((a,b)=>a-b);

        for(let x =0;x<sortedNums.length-1;x++){
            if(sortedNums[x]==sortedNums[x+1]){
                return true
            }
        }
        return false;

        
    }
}
