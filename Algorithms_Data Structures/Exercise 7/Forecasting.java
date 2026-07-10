public class Forecasting {

    // Recursive approach to calculate future value
    public static double calculateFutureValueRecursive(double presentValue, double growthRate, int years) {
        // Base case: 0 years remaining
        if (years == 0) {
            return presentValue;
        }
        // Recursive case
        return calculateFutureValueRecursive(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    // Iterative approach (optimized to avoid recursion overhead/stack overflow)
    public static double calculateFutureValueIterative(double presentValue, double growthRate, int years) {
        double futureValue = presentValue;
        for (int i = 0; i < years; i++) {
            futureValue *= (1 + growthRate);
        }
        return futureValue;
    }
}
