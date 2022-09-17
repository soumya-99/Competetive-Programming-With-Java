package missing_number;

public class Main {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 5 };
        int N = 5;

        int result = missingNumber(N, arr);
        System.out.println(result);
    }

    public static int missingNumber(int N, int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        
        int missingNumber = N * (N + 1) / 2 - sum;
        return missingNumber;
    }
}
