class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {


let result = []
if(nums.length<2){
    return result
}
        // nums.map((num,index,array)=>{
        //     if(array[index]+array[index+1]== target){
        //         result.push(index,index+1)
        //         return

        //     }
        // })

        for(let x=0;x<nums.length;x++){
        for(let y=x+1;y<nums.length;y++){


            if(nums[x]+nums[y]==target){
                result.push(x,y);
            }
        }
        }
        return result
    }
}
