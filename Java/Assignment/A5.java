import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class A5 {
    public static void main(String[] args) {
        String url = "jdbc:postgresql://localhost:5432/saurav";
        String username = "postgres";
        String password = "";

        try {
            // Ensure the JDBC driver is loaded (not required in JDBC 4.0 and later)
            Class.forName("org.postgresql.Driver");

            // Establish a connection to the PostgreSQL database
            try (Connection connection = DriverManager.getConnection(url, username, password)) {
                // Query 1: Persons born in 1986
                String sql1 = "SELECT * FROM Person WHERE birth_year = 1986";
                try (Statement statement1 = connection.createStatement();
                     ResultSet resultSet1 = statement1.executeQuery(sql1)) {
                    System.out.println("Persons born in 1986:");
                    while (resultSet1.next()) {
                        printPersonDetails(resultSet1);
                    }
                }

                // Query 2: Females born between 2000-2005
                String sql2 = "SELECT * FROM Person WHERE gender = 'female' AND birth_year BETWEEN 2000 AND 2005";
                try (Statement statement2 = connection.createStatement();
                     ResultSet resultSet2 = statement2.executeQuery(sql2)) {
                    System.out.println("\nFemales born between 2000-2005:");
                    while (resultSet2.next()) {
                        printPersonDetails(resultSet2);
                    }
                }
            }
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }
    }

    private static void printPersonDetails(ResultSet resultSet) throws SQLException {
        System.out.println("ID: " + resultSet.getInt("ID") +
                ", Name: " + resultSet.getString("name") +
                ", Gender: " + resultSet.getString("gender") +
                ", Birth Year: " + resultSet.getInt("birth_year"));
    }
}

