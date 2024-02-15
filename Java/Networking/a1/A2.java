import java.net.*;
import java.io.*;

public class A2{

    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 8080);

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String date = in.readLine();

        System.out.println("The server's date and time is: " + date);

        socket.close();
    }
}