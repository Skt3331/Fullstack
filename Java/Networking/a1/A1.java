import java.net.*;
import java.io.*;
import java.util.Date;

public class A1 {

    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        Socket socket = serverSocket.accept();

        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        out.println(new Date().toString());

        socket.close();
        serverSocket.close();
    }
}                                                                     