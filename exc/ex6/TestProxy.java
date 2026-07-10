public class TestProxy {
    public static void main(String[] args) {
        Image image = new ProxyImage("large_photo_10mb.jpg");

        // Image should be loaded from remote server on first display
        System.out.println("First call to display():");
        image.display();
        System.out.println();

        // Image should be displayed directly from cache on subsequent calls
        System.out.println("Second call to display():");
        image.display();
    }
}
