public class TestCommand {
    public static void main(String[] args) {
        Light livingRoomLight = new Light("Living Room");

        Command lightOn = new LightOnCommand(livingRoomLight);
        Command lightOff = new LightOffCommand(livingRoomLight);

        RemoteControl remote = new RemoteControl();

        // Turn on light
        remote.setCommand(lightOn);
        remote.pressButton();

        // Turn off light
        remote.setCommand(lightOff);
        remote.pressButton();
    }
}
