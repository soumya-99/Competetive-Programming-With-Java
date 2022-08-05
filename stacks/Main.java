package stacks;

// import java.util.Stack;

public class Main {
    public static void main(String[] args) {
        // Stack<Integer> stack = new Stack<>();
        // stack.push(1);
        // stack.push(2);
        // stack.push(3);
        // System.out.println(stack);
        // stack.push(45);
        // System.out.println(stack);
        // var popped = stack.pop();
        // System.out.println(popped);
        // System.out.println(stack);
        // var peeked = stack.peek();
        // System.out.println(peeked);


        Stack stack = new Stack();
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println(stack);
        stack.pop();
        System.out.println(stack);
        System.out.println(stack.peek());
        stack.pop();
        stack.pop();
        System.out.println(stack.isEmpty());
    }
}
