package linkedlists;

import java.util.Arrays;
// import java.util.Collections;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<Integer> list = new LinkedList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
        // list.add(2);
        // list.add(3);
        // list.add(4);
        // list.add(5);
        list.addFirst(31);
        list.addLast(32);
        list.add(2, 46);
        list.set(6, 55);
        list.removeFirst();
        list.removeLast();
        list.remove(3);
        System.out.println(list.contains(6));
        System.out.println(list.size());
        System.out.println(list);
        var arr = list.toArray();
        System.out.println(Arrays.toString(arr));

        System.out.println(getKthFromTheEnd(list, 3));

        // Collections.reverse(list);
        // System.out.println(list);
    }

    // public static LinkedList<Integer> reverse(LinkedList<Integer> list) {
    //     LinkedList<Integer> newList = new LinkedList<>();
    //     while (!list.isEmpty()) {
    //         newList.addFirst(list.removeLast());
    //     }
    //     return newList;
    // }

    public static int getKthFromTheEnd(LinkedList<Integer> list, int k) {
        // [1, 2, 3, 4, 5]
        // max - k - 1 = index
        // k -> [5, 4, 3, 2, 1, 0]
        // list [5, 12, 6, 8, 2, 4]
        // n -> [0, 1, 2, 3, 4, 5]
        return list.size() - k - 1;
    }
}
