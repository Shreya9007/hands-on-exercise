public class TestLibrary {
    public static void main(String[] args) {
        Book[] books = {
            new Book("B003", "Design Patterns", "GoF"),
            new Book("B001", "Introduction to Algorithms", "CLRS"),
            new Book("B005", "Java: The Complete Reference", "Schildt"),
            new Book("B002", "Pragmatic Programmer", "Thomas"),
            new Book("B004", "Clean Code", "Martin")
        };

        // Linear Search Test
        System.out.println("--- Linear Search Test ---");
        Book foundLinear = Library.linearSearchByTitle(books, "Clean Code");
        System.out.println(foundLinear != null ? "Found: " + foundLinear : "Book not found");
        System.out.println();

        // Sorted list of books by title for Binary Search
        Book[] sortedBooks = {
            new Book("B004", "Clean Code", "Martin"),
            new Book("B003", "Design Patterns", "GoF"),
            new Book("B001", "Introduction to Algorithms", "CLRS"),
            new Book("B005", "Java: The Complete Reference", "Schildt"),
            new Book("B002", "Pragmatic Programmer", "Thomas")
        };

        // Binary Search Test
        System.out.println("--- Binary Search Test ---");
        Book foundBinary = Library.binarySearchByTitle(sortedBooks, "Clean Code");
        System.out.println(foundBinary != null ? "Found: " + foundBinary : "Book not found");
    }
}
