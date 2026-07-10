public class TestDI {
    public static void main(String[] args) {
        // Create the dependency implementation
        CustomerRepository repository = new CustomerRepositoryImpl();

        // Inject the dependency through the constructor
        CustomerService service = new CustomerService(repository);

        // Use the service
        String customer1 = service.getCustomerDetails(1);
        System.out.println("Details: " + customer1);

        String customer2 = service.getCustomerDetails(2);
        System.out.println("Details: " + customer2);
    }
}
