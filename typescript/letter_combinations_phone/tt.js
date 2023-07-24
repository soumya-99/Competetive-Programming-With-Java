var letterCombinationsJS = function (digits) {
	if (digits.length === 0) {
		return []
	}

	var combos = []
	var nums = {
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"],
	}

	function recurse(rest_of_word, path_so_far) {
		if (rest_of_word.length === 0) {
			combos.push(path_so_far)
			return combos
		}
		var first = rest_of_word[0]
		var rest = rest_of_word.slice(1)
		var letters = nums[first]
		letters.forEach(function (letter) {
			recurse(rest, path_so_far + letter)
		})
	}
	recurse(digits, "")

	return combos
}

console.log(letterCombinationsJS("253145"))
