public class TestTask {
    public static void main(String[] args) {
        TaskLinkedList list = new TaskLinkedList();

        Task t1 = new Task("T001", "Design Database", "In Progress");
        Task t2 = new Task("T002", "Implement Authentication", "Todo");
        Task t3 = new Task("T003", "Write Unit Tests", "Todo");

        // Add
        System.out.println("--- Adding Tasks ---");
        list.addTask(t1);
        list.addTask(t2);
        list.addTask(t3);
        System.out.println();

        // Traverse
        System.out.println("--- Traversal ---");
        list.traverseTasks();
        System.out.println();

        // Search
        System.out.println("--- Searching Task T002 ---");
        Task found = list.searchTask("T002");
        System.out.println(found != null ? "Found: " + found : "Not found");
        System.out.println();

        // Delete
        System.out.println("--- Deleting Task T002 ---");
        list.deleteTask("T002");
        System.out.println();

        // Traverse again
        System.out.println("--- Traversal After Deletion ---");
        list.traverseTasks();
    }
}
