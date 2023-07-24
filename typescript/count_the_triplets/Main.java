package count_the_triplets;

import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] arr = { 1, 5, 3, 2 };
        // int[] arr = { 2, 3, 4 };

        int result = countTriplets(arr);
        System.out.println(result);
    }

    public static int countTriplets(int[] arr) {
        int count = 0;
        Arrays.sort(arr);
        // 1, 2, 3, 5

        for (int i = 0; i < arr.length; i++) {
            int sum = arr[i];

            for (int j = i + 1; j < arr.length; j++) {
                sum += arr[j];

                for (int k = j + 1; k < arr.length; k++) {
                    if (sum == arr[k]) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
}
