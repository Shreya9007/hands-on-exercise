public class TestEmployee {
    public static void main(String[] args) {
        EmployeeManager manager = new EmployeeManager(5);

        Employee e1 = new Employee("E001", "Alice", "Developer", 75000);
        Employee e2 = new Employee("E002", "Bob", "Designer", 65000);
        Employee e3 = new Employee("E003", "Charlie", "Manager", 90000);

        // Add
        System.out.println("--- Adding Employees ---");
        manager.addEmployee(e1);
        manager.addEmployee(e2);
        manager.addEmployee(e3);
        System.out.println();

        // Traverse
        System.out.println("--- Traversal ---");
        manager.traverseEmployees();
        System.out.println();

        // Search
        System.out.println("--- Searching Employee E002 ---");
        Employee found = manager.searchEmployee("E002");
        System.out.println(found != null ? "Found: " + found : "Not found");
        System.out.println();

        // Delete
        System.out.println("--- Deleting Employee E002 ---");
        manager.deleteEmployee("E002");
        System.out.println();

        // Traverse again
        System.out.println("--- Traversal After Deletion ---");
        manager.traverseEmployees();
    }
}
