package kadanes_algo;

public class Main {
    // arr[] = {1, 2, 3, -2, 5}
    // O/P: 9 (max sub array sum)
    public static void main(String[] args) {
        // int[] arr = {1, 2, 3, -2, 5};
        int[] arr = {-1, -2, -3, -4, -5};
        int result = maxSubArraySum(arr);
        System.out.println(result);        
    }

    public static int maxSubArraySum(int[] arr) {
        int maxSum = arr[0];
        int currSum = arr[0];
        for (int i = 1; i < arr.length; i++) {
            currSum = Math.max(arr[i], currSum + arr[i]);
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }
}
