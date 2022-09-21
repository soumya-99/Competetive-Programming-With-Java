var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function removeDuplicates(nums) {
    var set = new Set(__spreadArray([], nums, true));
    return __spreadArray([], set, true);
    // return set.size
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
