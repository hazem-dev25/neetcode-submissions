class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        for(let i = 0 ; nums.length > i  ; i++){
          for(let j = i + 1 ; nums.length > j ; j ++) {
            if(nums[i] === nums[j]){
                return true
            }
          }
        }
        return false

    }
}
