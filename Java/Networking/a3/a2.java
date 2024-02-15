import java.io.*;
import java.net.*;

public class a2 {

    public static void main(String[] args) throws IOException {
        Socket socket = new Socket("localhost", 8080);

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);

        if (args.length != 1) {
            System.out.println("Usage: java FileClient <filename>");
            System.exit(1);
        }

        out.println(args[0]);

        String fileLine;
        while ((fileLine = in.readLine()) != null) {
            System.out.println(fileLine);
        }

        socket.close();
    }
}