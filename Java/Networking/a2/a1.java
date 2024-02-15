import java.net.*;
import java.util.*;

public class a1 {

    public static void main(String[] args) throws UnknownHostException {
       

        String hostname = args[0];
        InetAddress[] addresses = InetAddress.getAllByName("https://www.blackbox.ai");

        for (InetAddress address : addresses) {
            if (!address.isLoopbackAddress() && !address.isLinkLocalAddress()) {
                System.out.println("Primary IP address of " + hostname + " is: " + address.getHostAddress());
                break;
            }
        }
    }
}