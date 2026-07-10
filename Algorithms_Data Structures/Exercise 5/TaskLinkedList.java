public class TaskLinkedList {
    // Nested Node class
    private static class Node {
        Task task;
        Node next;

        Node(Task task) {
            this.task = task;
            this.next = null;
        }
    }

    private Node head;

    public TaskLinkedList() {
        this.head = null;
    }

    // Add task to the end of list
    public void addTask(Task task) {
        Node newNode = new Node(task);
        if (head == null) {
            head = newNode;
        } else {
            Node temp = head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        System.out.println("Added Task: " + task.getTaskName());
    }

    // Search task by ID
    public Task searchTask(String taskId) {
        Node temp = head;
        while (temp != null) {
            if (temp.task.getTaskId().equals(taskId)) {
                return temp.task;
            }
            temp = temp.next;
        }
        return null;
    }

    // Traverse and display tasks
    public void traverseTasks() {
        if (head == null) {
            System.out.println("No tasks in the list.");
            return;
        }
        System.out.println("Task List:");
        Node temp = head;
        while (temp != null) {
            System.out.println(temp.task);
            temp = temp.next;
        }
    }

    // Delete task by ID
    public void deleteTask(String taskId) {
        if (head == null) {
            System.out.println("Task list is empty.");
            return;
        }

        // If head holds the task to delete
        if (head.task.getTaskId().equals(taskId)) {
            System.out.println("Deleted Task ID: " + head.task.getTaskId());
            head = head.next;
            return;
        }

        Node prev = head;
        Node current = head.next;
        while (current != null) {
            if (current.task.getTaskId().equals(taskId)) {
                System.out.println("Deleted Task ID: " + current.task.getTaskId());
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }

        System.out.println("Task ID " + taskId + " not found.");
    }
}
