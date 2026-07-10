public class TestSort {
    public static void main(String[] args) {
        Order[] ordersBubble = {
            new Order("O001", "Alice", 250.0),
            new Order("O002", "Bob", 99.9),
            new Order("O003", "Charlie", 450.5),
            new Order("O004", "Diana", 120.0),
            new Order("O005", "Ethan", 310.2)
        };

        Order[] ordersQuick = {
            new Order("O001", "Alice", 250.0),
            new Order("O002", "Bob", 99.9),
            new Order("O003", "Charlie", 450.5),
            new Order("O004", "Diana", 120.0),
            new Order("O005", "Ethan", 310.2)
        };

        // Test Bubble Sort
        System.out.println("--- Bubble Sort ---");
        SortAlgorithms.bubbleSort(ordersBubble);
        for (Order o : ordersBubble) {
            System.out.println(o);
        }
        System.out.println();

        // Test Quick Sort
        System.out.println("--- Quick Sort ---");
        SortAlgorithms.quickSort(ordersQuick, 0, ordersQuick.length - 1);
        for (Order o : ordersQuick) {
            System.out.println(o);
        }
    }
}
