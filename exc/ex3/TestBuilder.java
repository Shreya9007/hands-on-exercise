public class TestBuilder {
    public static void main(String[] args) {
        // Creating a high-end gaming computer
        Computer gamingComputer = new Computer.Builder()
                .setCPU("Intel Core i9")
                .setRAM("32GB")
                .setStorage("1TB SSD")
                .setGraphicsCardEnabled(true)
                .setBluetoothEnabled(true)
                .build();

        // Creating an office computer with basic specs and no graphics card
        Computer officeComputer = new Computer.Builder()
                .setCPU("Intel Core i5")
                .setRAM("8GB")
                .setStorage("256GB SSD")
                .setGraphicsCardEnabled(false)
                .setBluetoothEnabled(true)
                .build();

        // Print configurations
        System.out.println("Gaming Computer Configuration:");
        System.out.println(gamingComputer);
        System.out.println();

        System.out.println("Office Computer Configuration:");
        System.out.println(officeComputer);
    }
}
