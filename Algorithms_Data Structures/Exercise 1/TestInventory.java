public class TestInventory {
    public static void main(String[] args) {
        Inventory inventory = new Inventory();

        Product p1 = new Product("P001", "Laptop", 10, 999.99);
        Product p2 = new Product("P002", "Smartphone", 25, 499.99);
        Product p3 = new Product("P003", "Headphones", 50, 79.99);

        // Add
        System.out.println("--- Adding Products ---");
        inventory.addProduct(p1);
        inventory.addProduct(p2);
        inventory.addProduct(p3);
        inventory.displayProducts();
        System.out.println();

        // Update
        System.out.println("--- Updating Product P002 ---");
        inventory.updateProduct("P002", 30, 479.99);
        inventory.displayProducts();
        System.out.println();

        // Delete
        System.out.println("--- Deleting Product P003 ---");
        inventory.deleteProduct("P003");
        inventory.displayProducts();
    }
}
