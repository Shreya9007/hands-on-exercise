public class TestMVC {
    public static void main(String[] args) {
        // Fetch student record based on his roll no from the database (simulated)
        Student model = retrieveStudentFromDatabase();

        // Create a view: to write course details on console
        StudentView view = new StudentView();

        StudentController controller = new StudentController(model, view);

        System.out.println("Initial State:");
        controller.updateView();
        System.out.println();

        // Update model data
        System.out.println("Updating student grade to 'A+'...");
        controller.setStudentGrade("A+");

        System.out.println("Updated State:");
        controller.updateView();
    }

    private static Student retrieveStudentFromDatabase() {
        return new Student("Alice Johnson", "S101", "A");
    }
}
