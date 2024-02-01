import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class A1 {

    public static void main(String[] args) {

        
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("PostgreSQL JDBC driver not found.");
            e.printStackTrace();saurav=# ;
saurav=# CREATE TABLE person (
saurav(#     PID SERIAL PRIMARY KEY,
saurav(#     name VARCHAR(255) NOT NULL,
saurav(#     gender VARCHAR(10),
saurav(#     birth_year INTEGER
saurav(# );
CREATE TABLE
saurav=# INSERT INTO person (name, gender, birth_year) VALUES
saurav-#     ('Ravi Kumar', 'Male', 1992),
saurav-#     ('Priya Patel', 'Female', 1988),
saurav-#     ('Amit Sharma', 'Male', 1995);
INSERT 0 3
saurav=# 


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

        
        System.out.println("PID\tName\tGender\tBirth Year");
        try {
            while (resultSet.next()) {
                int pid = resultSet.getInt("PID");
                String name = resultSet.getString("name");
                String gender = resultSet.getString("gender");
                int birthYear = resultSet.getInt("birth_year");
                System.out.printf("%d\t%s\t%s\t%d%n", pid, name, gender, birthYear);
            }
        } catch (Exception e) {
            System.out.println("Result display failed.");
            e.printStackTrace();
            return;
        }saurav=# ;
saurav=# CREATE TABLE person (
saurav(#     PID SERIAL PRIMARY KEY,
saurav(#     name VARCHAR(255) NOT NULL,
saurav(#     gender VARCHAR(10),
saurav(#     birth_year INTEGER
saurav(# );
CREATE TABLE
saurav=# INSERT INTO person (name, gender, birth_year) VALUES
saurav-#     ('Ravi Kumar', 'Male', 1992),
saurav-#     ('Priya Patel', 'Female', 1988),
saurav-#     ('Amit Sharma', 'Male', 1995);
INSERT 0 3
saurav=# 



        
        try {
            resultSet.close();
            statement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

/*
saurav=# ;
saurav=# CREATE TABLE person (
saurav(#     PID SERIAL PRIMARY KEY,
saurav(#     name VARCHAR(255) NOT NULL,
saurav(#     gender VARCHAR(10),
saurav(#     birth_year INTEGER
saurav(# );
CREATE TABLE
saurav=# INSERT INTO person (name, gender, birth_year) VALUES
saurav-#     ('Ravi Kumar', 'Male', 1992),
saurav-#     ('Priya Patel', 'Female', 1988),
saurav-#     ('Amit Sharma', 'Male', 1995);
INSERT 0 3
saurav=# 
*/


