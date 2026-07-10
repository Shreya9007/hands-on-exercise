public class CustomerRepositoryImpl implements CustomerRepository {
    @Override
    public String findCustomerById(int id) {
        // Simulating database lookup
        if (id == 1) {
            return "John Doe (ID: 1, Email: john@example.com)";
        } else if (id == 2) {
            return "Jane Smith (ID: 2, Email: jane@example.com)";
        }
        return "Customer not found";
    }
}
