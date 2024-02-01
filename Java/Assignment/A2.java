import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;

public class A2 {

    public static void main(String[] args) {

        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("PostgreSQL JDBC driver not found.");
            e.printStackTrace();
            return;
        }

        Connection connection = null;
        try {
            connection = DriverManager.getConnection(
                    "jdbc:postgresql://localhost:5432/saurav", "postgres", "");
        } catch (Exception e) {
            System.out.println("Connection failed.");
            e.printStackTrace();
            return;
        }

        Statement statement = null;
        try {
            statement = connection.createStatement();
        } catch (Exception e) {
            System.out.println("Statement creation failed.");
            e.printStackTrace();
            return;
        }

        ResultSet resultSet = null;
        try {
            resultSet = statement.executeQuery("SELECT * FROM Person");
        } catch (Exception e) {
            System.out.println("Query execution failed.");
            e.printStackTrace();
            return;
        }

        ResultSetMetaData resultSetMetaData = null;
        try {
            resultSetMetaData = resultSet.getMetaData();
        } catch (Exception e) {
            System.out.println("ResultSetMetaData creation failed.");
            e.printStackTrace();
            return;
        }

        int columnCount = 0;
        try {
            columnCount = resultSetMetaData.getColumnCount();
        } catch (Exception e) {
            System.out.println("Column count retrieval failed.");
            e.printStackTrace();
            return;
        }
        System.out.println("Number of columns: " + columnCount);

        for (int i = 1; i <= columnCount; i++) {
            try {
                System.out.println("Column " + i + " SQL type: " + resultSetMetaData.getColumnTypeName(i));
            } catch (Exception e) {
                System.out.println("Column " + i + " SQL type retrieval failed.");
                e.printStackTrace();
                return;
            }
        }

        try {
            resultSet.close();
            statement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

