package balancing_string;

import java.util.Arrays;
import java.util.List;
import java.util.Stack;

public class Main {
    private static final List<Character> leftBrackets = Arrays.asList('{', '[', '(', '<');
    private static final List<Character> rightBrackets = Arrays.asList('}', ']', ')', '>');

    public static void main(String[] args) {
        String s = "{(a) + ((<(b)>))}";
        System.out.println(isBalanced(s));
    }

    public static boolean isBalanced(String input) {
        if (input == null)
            throw new IllegalArgumentException("Input cannot be null");

        Stack<Character> stack = new Stack<>();
        for (char ch : input.toCharArray()) {
            if (isLeftBracket(ch))
                stack.push(ch);
            else if (isRightBracket(ch)) {
                if (stack.isEmpty())
                    return false;

                var top = stack.pop();
                if (!bracketsMatch(top, ch))
                    return false;
            }
        }
        return stack.isEmpty();
    }

    private static boolean isLeftBracket(char ch) {
        return leftBrackets.contains(ch);
    }

    private static boolean isRightBracket(char ch) {
        return rightBrackets.contains(ch);
    }

    private static boolean bracketsMatch(char left, char right) {
        return leftBrackets.indexOf(left) == rightBrackets.indexOf(right);
    }
}
