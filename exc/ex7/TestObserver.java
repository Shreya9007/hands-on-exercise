public class TestObserver {
    public static void main(String[] args) {
        StockMarket stockMarket = new StockMarket();

        Observer mobileApp1 = new MobileApp("Client A");
        Observer webApp1 = new WebApp("Dashboard B");

        // Registering observers
        stockMarket.registerObserver(mobileApp1);
        stockMarket.registerObserver(webApp1);

        System.out.println("Updating Stock Price (Apple):");
        stockMarket.setStockData("AAPL", 175.50);
        System.out.println();

        System.out.println("Updating Stock Price (Google):");
        stockMarket.setStockData("GOOGL", 142.25);
        System.out.println();

        // Deregistering an observer
        stockMarket.deregisterObserver(mobileApp1);

        System.out.println("Updating Stock Price (Apple) after Client A deregistration:");
        stockMarket.setStockData("AAPL", 178.00);
    }
}
