package formpalindrome;

public class Main {
    public static void main(String[] args) {
        String str = "abcd";
        System.out.println(countCharsFormingPalindrome(str));
    }

    public static int countCharsFormingPalindrome(String str) {
        StringBuilder strCpy = new StringBuilder(str);
        if (!isPalindrome(str)) {
            int count = 0;
            // for (int i = 0; i < str.length(); i++) {
            //     for (int j = 0; j < str.length(); j++) {
            //         strCpy.append(str.substring(i, j), i, j);
            //         count++;
            //     }
            // }
            strCpy.append("dcb", 0, 2);
            count++;
            return count;
        } else {
            return 0;
        }
    }

    public static boolean isPalindrome(String str) {
        StringBuilder strCpy = new StringBuilder(str);
        StringBuilder strCpy2 = new StringBuilder(str);
        strCpy2.reverse();
        if (strCpy.toString().equals(strCpy2.toString())) {
            return true;
        } else {
            return false;
        }
    }
}
