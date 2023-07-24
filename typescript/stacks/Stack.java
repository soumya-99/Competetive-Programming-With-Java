package stacks;

import java.util.Arrays;

public class Stack {
    private int[] elems = new int[10];
    private int count;

    public void push(int item) {
        if (count == elems.length)
            throw new StackOverflowError();
        elems[count++] = item;
    }

    public int pop() {
        if (count == 0)
            throw new IllegalStateException();
        return elems[--count];
    }

    public int peek() {
        if (count == 0)
            throw new IllegalStateException();
        return elems[count - 1];
    }

    public boolean isEmpty() {
        return count == 0;
    }

    @Override
    public String toString() {
        return Arrays.toString(Arrays.copyOf(elems, count));
    }
}
