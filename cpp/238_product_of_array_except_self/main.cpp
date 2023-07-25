#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

class Solution {
   public:
    vector<int> productExceptSelf(vector<int>& nums) {
        vector<int> result(nums.size(), 1);
        int left = 1;
        int right = 1;
        for (int i = 0; i < nums.size(); ++i) {
            result[i] *= left;
            left *= nums[i];
            result[nums.size() - 1 - i] *= right;
            right *= nums[nums.size() - 1 - i];
        }
        return result;
    }
};

int main() {
    Solution solution;
    vector<int> nums = {1, 2, 3, 4};
    vector<int> result = solution.productExceptSelf(nums);
    for (auto i : result) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}