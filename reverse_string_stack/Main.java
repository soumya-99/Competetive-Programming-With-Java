package reverse_string_stack;

import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        String str = "abcdefghijklmn";
        System.out.println(reverse(str));
    }

    static String reverse(String input) {
        if (input == null)
            throw new IllegalArgumentException("Input cannot be null");

        Stack<Character> stack = new Stack<>();
        for (char i : input.toCharArray()) {
            stack.push(i);
        }
        StringBuilder reversed = new StringBuilder();
        while (!stack.isEmpty()) {
            reversed.append(stack.pop());
        }
        return reversed.toString();
    }
}