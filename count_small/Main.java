package count_small;

// import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Main {
    // n = 7
    // arr[] = [12, 1, 2, 3, 0, 11, 4]
    // output[] = [6, 1, 1, 1, 0, 1, 0]
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }
        sc.close();
        int[] output = new int[n];
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    count++;
                }
            }
            output[i] = count;
            count = 0;
        }
        System.out.println(Arrays.toString(output));

        // ArrayList<Integer> list = new ArrayList<>(Arrays.asList(12, 1, 2, 3, 0, 11, 4));
        // int[] output = new int[list.size()];
        // int count = 0;
        // for (int i = 0; i < list.size(); i++) {
        //     for (int j = i + 1; j < list.size(); j++) {
        //         if (list.get(i) > list.get(j)) {
        //             count++;
        //         }
        //     }
        //     output[i] = count;
        //     count = 0;
        // }
        // System.out.println(Arrays.toString(output));
    }
}
