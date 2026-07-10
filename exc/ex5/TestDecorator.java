public class TestDecorator {
    public static void main(String[] args) {
        System.out.println("--- Scenario 1: Base Email Notifier ---");
        Notifier emailNotifier = new EmailNotifier();
        emailNotifier.send("System maintenance starting in 10 minutes.");
        System.out.println();

        System.out.println("--- Scenario 2: Email + SMS Notifier ---");
        Notifier emailAndSms = new SMSNotifierDecorator(new EmailNotifier());
        emailAndSms.send("Critical system alert!");
        System.out.println();

        System.out.println("--- Scenario 3: Email + SMS + Slack Notifier ---");
        Notifier allChannels = new SlackNotifierDecorator(new SMSNotifierDecorator(new EmailNotifier()));
        allChannels.send("Emergency: Server down!");
    }
}
