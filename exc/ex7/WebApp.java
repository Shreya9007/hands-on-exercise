public class WebApp implements Observer {
    private String name;

    public WebApp(String name) {
        this.name = name;
    }

    @Override
    public void update(String stockName, double price) {
        System.out.println("Web App [" + name + "] Dashboard Update - Stock: " + stockName + " is now $" + price);
    }
}
