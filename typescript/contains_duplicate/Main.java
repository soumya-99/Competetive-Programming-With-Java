package contains_duplicate;

import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        int[] nums = { 1, 2, 3, 4 };
        System.out.println(containsDuplicate(nums));

    }

    public static boolean containsDuplicate(int[] nums) {
        HashSet<Integer> uniques = new HashSet<Integer>();

        for (int i = 0; i < nums.length; i++) {
            uniques.add(nums[i]);
        }

        if (uniques.size() < nums.length) {
            return true;
        } else {
            return false;
        }
    }
}
