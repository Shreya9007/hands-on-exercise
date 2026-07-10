public class TestForecasting {
    public static void main(String[] args) {
        double presentValue = 1000.0; // Initial investment
        double growthRate = 0.05;     // 5% annual growth rate
        int years = 10;               // 10 years forecast

        System.out.println("Present Value: $" + presentValue);
        System.out.println("Annual Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Forecast Period: " + years + " years");
        System.out.println();

        // Recursive result
        double recursiveResult = Forecasting.calculateFutureValueRecursive(presentValue, growthRate, years);
        System.out.println("Future Value (Recursive): $" + String.format("%.2f", recursiveResult));

        // Iterative result
        double iterativeResult = Forecasting.calculateFutureValueIterative(presentValue, growthRate, years);
        System.out.println("Future Value (Iterative): $" + String.format("%.2f", iterativeResult));
    }
}
