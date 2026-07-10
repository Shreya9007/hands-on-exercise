public class TestSearch {
    public static void main(String[] args) {
        // Sample products array (unsorted)
        Product[] products = {
            new Product("P103", "Keyboard", "Electronics"),
            new Product("P101", "Laptop", "Electronics"),
            new Product("P105", "Mouse", "Electronics"),
            new Product("P102", "Smartphone", "Electronics"),
            new Product("P104", "Headphones", "Electronics")
        };

        // Linear Search Test
        System.out.println("--- Linear Search Test ---");
        Product resultLinear = SearchAlgorithms.linearSearch(products, "Smartphone");
        System.out.println("Result: " + (resultLinear != null ? resultLinear : "Product not found"));
        System.out.println();

        // Sorted products array for Binary Search
        Product[] sortedProducts = {
            new Product("P104", "Headphones", "Electronics"),
            new Product("P103", "Keyboard", "Electronics"),
            new Product("P101", "Laptop", "Electronics"),
            new Product("P105", "Mouse", "Electronics"),
            new Product("P102", "Smartphone", "Electronics")
        };

        // Binary Search Test
        System.out.println("--- Binary Search Test ---");
        Product resultBinary = SearchAlgorithms.binarySearch(sortedProducts, "Smartphone");
        System.out.println("Result: " + (resultBinary != null ? resultBinary : "Product not found"));
    }
}
