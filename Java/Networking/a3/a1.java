import java.io.*;
import java.net.*;

public class a1 {

    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        Socket socket = serverSocket.accept();

        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String fileName = in.readLine();

        File file = new File(fileName);
        if (!file.exists()) {
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            out.println("Error: File not found");
        } else {
            FileInputStream fileInputStream = new FileInputStream(file);
            BufferedReader fileReader = new BufferedReader(new InputStreamReader(fileInputStream));

            String fileLine;
            while ((fileLine = fileReader.readLine()) != null) {
                PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                out.println(fileLine);
            }
            fileReader.close();
            fileInputStream.close();
        }

        socket.close();
        serverSocket.close();
    }
}