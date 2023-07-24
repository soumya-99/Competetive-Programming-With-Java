package find_last_num_array;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();

        int[] arr = new int[n - 1];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        sc.close();

        int lastNum = findLastNum(arr, n);
        System.out.println(lastNum);
    }
    
    public static int findLastNum(int[] arr, int n) {
        int sum = (n * (n + 1)) / 2;
        for (int number: arr) {
            sum -= number;
        }
        return sum;
    }
}
