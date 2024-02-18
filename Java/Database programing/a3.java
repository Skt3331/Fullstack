import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class a3 {

    public static void main(String[] args) {
       
        String url = "jdbc:postgresql://localhost:5432/saurav";
        String username = "postgres";
        String password = "";

        try {
      
            Class.forName("org.postgresql.Driver");

         
            Connection connection = DriverManager.getConnection(url, username, password);

            
           // createCountryTable(connection);

      
          //  insertCountryData(connection);

           
            displayWestRegionCountries(connection);

         
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
/*
    private static void createCountryTable(Connection connection) throws Exception {
        String createTableSQL = "CREATE TABLE Country (" +
                "Name VARCHAR(255) PRIMARY KEY," +
                "Continent VARCHAR(255)," +
                "Capital VARCHAR(255)," +
                "Region VARCHAR(255)" +
                ")";
        
        try (PreparedStatement preparedStatement = connection.prepareStatement(createTableSQL)) {
            preparedStatement.executeUpdate();
        }
        
    }

    private static void insertCountryData(Connection connection) throws Exception {
        String insertDataSQL = "INSERT INTO Country (Name, Continent, Capital, Region) VALUES (?, ?, ?, ?)";

        try (PreparedStatement preparedStatement = connection.prepareStatement(insertDataSQL)) {
            
            preparedStatement.setString(1, "India");
            preparedStatement.setString(2, "Asia");
            preparedStatement.setString(3, "New Delhi");
            preparedStatement.setString(4, "South");
            preparedStatement.executeUpdate();

            preparedStatement.setString(1, "United States");
            preparedStatement.setString(2, "North America");
            preparedStatement.setString(3, "Washington, D.C.");
            preparedStatement.setString(4, "North");
            preparedStatement.executeUpdate();

            
        }
    } */

    private static void displayWestRegionCountries(Connection connection) throws Exception {
        String querySQL = "SELECT * FROM Country ";

        try (PreparedStatement preparedStatement = connection.prepareStatement(querySQL);
             ResultSet resultSet = preparedStatement.executeQuery()) {

            System.out.println("Countries in the West Region:");
            System.out.println("------------------------------");

            while (resultSet.next()) {
                String name = resultSet.getString("Name");
                String continent = resultSet.getString("Continent");
                String capital = resultSet.getString("Capital");
                String region = resultSet.getString("Region");

                System.out.printf("Name: %s, Continent: %s, Capital: %s, Region: %s%n",
                        name, continent, capital, region);
            }
        }
    }
}

