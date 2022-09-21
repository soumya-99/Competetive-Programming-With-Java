package test_purpose;

import java.util.HashMap;

public class Main {

    public static void subArraySum(int[] a, int n, int sum) {
        int current_sum = 0;
        int start = 0;
        int end = -1;
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        for (int i = 0; i < n; i++) {
            current_sum = current_sum + a[i];
            if (current_sum - sum == 0) {
                end = i;
                break;
            }
            if (hashMap.containsKey(current_sum - sum)) {
                start = hashMap.get(current_sum - sum) + 1;
                end = i;
                break;
            }
            hashMap.put(current_sum, i);
        }
        if (end == -1) {
            System.out.println("Nei re bal");
        } else {
            System.out.println(start + " to " + end);
        }

    }

    public static void main(String[] args) {
        int[] a = { 10, 2, 2, 20, 10 };
        int n = a.length;
        int sum = 30;
        subArraySum(a, n, sum);

    }
}