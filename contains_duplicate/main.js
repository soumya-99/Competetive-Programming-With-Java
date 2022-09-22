var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function containsDuplicate(nums) {
    var uniques = new Set(__spreadArray([], nums, true));
    if (nums.length > uniques.size)
        return true;
    return false;
}
console.log(containsDuplicate([1, 3, 5, 2]));
