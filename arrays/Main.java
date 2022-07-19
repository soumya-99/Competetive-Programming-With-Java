package arrays;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        // list.add(1);
        // list.add(2);
        // list.add(3);
        // list.add(4);
        list.remove(0);
        System.out.println(list.indexOf(3)); // 1
        System.out.println(list.lastIndexOf(4)); // 2
        list.set(0, 55);
        list.toArray(); // returns regular Array(int[]) type object
        System.out.println(list); // prints ArrayList type object
    }
}
