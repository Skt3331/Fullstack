import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class a4 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
      

        try {
       String url = "jdbc:postgresql://localhost:5432/saurav";
        String username = "postgres";
        String password = "";
            Class.forName("org.postgresql.Driver");

         
            Connection connection = DriverManager.getConnection(url, username, password);
            System.out.print("Enter employee ID: ");
            int id = scanner.nextInt();

            System.out.print("Enter employee name: ");
            scanner.nextLine();
            String name = scanner.nextLine();

            System.out.print("Enter employee salary: ");
            double salary = scanner.nextDouble();

            String sql = "INSERT INTO Employee (ID, name, salary) VALUES (?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(sql);
            preparedStatement.setInt(1, id);
            preparedStatement.setString(2, name);
            preparedStatement.setDouble(3, salary);

            int rowsAffected = preparedStatement.executeUpdate();
            System.out.println(rowsAffected + " row(s) inserted.");

        } catch (Exception e) {
            e.printStackTrace();
        }

        scanner.close();
    }
}
