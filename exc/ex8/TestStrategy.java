public class TestStrategy {
    public static void main(String[] args) {
        PaymentContext context = new PaymentContext();

        // Pay using Credit Card
        PaymentStrategy creditCard = new CreditCardPayment("John Doe", "1234-5678-9012-3456", "123", "12/28");
        context.setPaymentStrategy(creditCard);
        context.executePayment(500.00);

        // Pay using PayPal
        PaymentStrategy payPal = new PayPalPayment("john.doe@example.com", "securepassword123");
        context.setPaymentStrategy(payPal);
        context.executePayment(80.50);
    }
}
