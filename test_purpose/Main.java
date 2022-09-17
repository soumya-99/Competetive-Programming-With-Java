package test_purpose;
import java.util.HashMap;

public class Main {
    public static void main(String[] array) {
        int[] arr = { 1, 2, 3, 5 };
        int sum = 8;

        subarraysum(arr, sum);
    }

    public static void subarraysum(int[] a, int sum) {
        int current_sum = 0;
        int start = 0;
        int end = -1;
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < a.length; i++) {
            current_sum += a[i];
            if (current_sum - sum == 0) {
                start = 0;
                end = i;
                break;
            }
            if (map.containsKey(current_sum - sum)) {
                start = map.get(current_sum - sum) + 1;
                end = i;
                break;
            }
            map.put(current_sum, i);
            if (end == -1) {
                System.out.println("not found");
            } else {
                System.out.println(start + " " + end);
            }
        }
    }
}