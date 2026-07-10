public class EmployeeManager {
    private Employee[] employees;
    private int count;

    public EmployeeManager(int capacity) {
        this.employees = new Employee[capacity];
        this.count = 0;
    }

    // Add employee
    public void addEmployee(Employee emp) {
        if (count < employees.length) {
            employees[count] = emp;
            count++;
            System.out.println("Added: " + emp.getName());
        } else {
            System.out.println("Cannot add: Array is full.");
        }
    }

    // Search employee
    public Employee searchEmployee(String employeeId) {
        for (int i = 0; i < count; i++) {
            if (employees[i].getEmployeeId().equals(employeeId)) {
                return employees[i];
            }
        }
        return null;
    }

    // Traverse and display employees
    public void traverseEmployees() {
        if (count == 0) {
            System.out.println("No employee records found.");
            return;
        }
        System.out.println("Employee List:");
        for (int i = 0; i < count; i++) {
            System.out.println(employees[i]);
        }
    }

    // Delete employee
    public void deleteEmployee(String employeeId) {
        int index = -1;
        // Search index
        for (int i = 0; i < count; i++) {
            if (employees[i].getEmployeeId().equals(employeeId)) {
                index = i;
                break;
            }
        }

        if (index != -1) {
            // Shift elements
            for (int i = index; i < count - 1; i++) {
                employees[i] = employees[i + 1];
            }
            employees[count - 1] = null; // Clear duplicate reference
            count--;
            System.out.println("Deleted Employee ID: " + employeeId);
        } else {
            System.out.println("Employee ID " + employeeId + " not found.");
        }
    }
}
