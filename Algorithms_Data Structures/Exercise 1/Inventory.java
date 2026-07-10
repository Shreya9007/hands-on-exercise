import java.util.HashMap;
import java.util.Map;

public class Inventory {
    private Map<String, Product> products;

    public Inventory() {
        this.products = new HashMap<>();
    }

    // Add product
    public void addProduct(Product product) {
        if (products.containsKey(product.getProductId())) {
            System.out.println("Product with ID " + product.getProductId() + " already exists.");
        } else {
            products.put(product.getProductId(), product);
            System.out.println("Added: " + product.getProductName());
        }
    }

    // Update product
    public void updateProduct(String productId, int quantity, double price) {
        Product product = products.get(productId);
        if (product != null) {
            product.setQuantity(quantity);
            product.setPrice(price);
            System.out.println("Updated ID " + productId + ": " + product.getProductName());
        } else {
            System.out.println("Product with ID " + productId + " not found.");
        }
    }

    // Delete product
    public void deleteProduct(String productId) {
        Product removed = products.remove(productId);
        if (removed != null) {
            System.out.println("Deleted ID " + productId + ": " + removed.getProductName());
        } else {
            System.out.println("Product with ID " + productId + " not found.");
        }
    }

    // Display all products
    public void displayProducts() {
        if (products.isEmpty()) {
            System.out.println("Inventory is empty.");
        } else {
            System.out.println("Inventory list:");
            for (Product p : products.values()) {
                System.out.println(p);
            }
        }
    }
}
