package sub_array_sum;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // int[] arr = {1, 2, 3, 7, 5};
        // ArrayList<Integer> arr = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
        var arr = new ArrayList<>(Arrays.asList(1, 2, 3, 7, 5));
        int sum = 12;

        int[] result = subArraySum(arr, sum);
        System.out.println(Arrays.toString(result));
    }

    public static int[] subArraySum(ArrayList<Integer> arr, int sum) {
        int pos1 = 0, pos2 = 0;
        for (int i = 0; i < arr.size(); i++) {
            for (int j = i + 1; j < arr.size(); j++) {
                int subListSum = arr.subList(i, j).stream().mapToInt(Integer::intValue).sum();
                if (subListSum == sum) {
                    pos1 = i;
                    pos2 = j;
                }
            }
        }
        return new int[] { pos1, pos2 };
    }
}
