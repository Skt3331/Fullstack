

import java.sql.*;

public class A5 {
  public static void display(ResultSet rs) throws SQLException {
    System.out.print("PID = " + rs.getInt(1) + "  ");
    System.out.print("name = " + rs.getString(2) + "  ");
    System.out.print("gender = " + rs.getString(3) + "  ");
    System.out.print("Birth Year = " + rs.getInt(4) + " \n");
  }

  public static void main(String args[]) {
    try {
      Class.forName("org.postgresql.Driver");
      Connection con = DriverManager.getConnection("jdbc:postgresql:saurav", "postgres", "");

      if (con == null)
        System.out.println("Connection Failed");
      else
        System.out.println("Connection Successful");

      Statement stmt = con.createStatement();
      System.out.println("\n\n----------- Person born in year 1986 -----------\n");
      ResultSet rs = stmt.executeQuery("SELECT * from Person where birthyear=1986 ");  // 1st query

      while (rs.next()) {
        display(rs);
      }

	 System.out.println("\n\n----------- Person born in year 2002-2005 -----------\n");
      rs = stmt.executeQuery("SELECT * from Person where gender='female' and birthyear between 2000 and 2005");  // 2nd query
      while (rs.next()) {
        display(rs);
      }

      con.close();
    } catch (ClassNotFoundException ex) {
      System.out.println("Class not found");
    } catch (SQLException ex1) {
      System.out.println("SQL Error" + ex1);
    } catch (Exception ex2) {
      System.out.println("Error");
    }
  }
}



// -- Create the Person table
// CREATE TABLE Person (
//     PID SERIAL PRIMARY KEY,
//     name VARCHAR(255),
//     gender VARCHAR(10),
//     birthyear INT
// );

// -- Insert some sample Indian data into the Person table
// INSERT INTO Person (name, gender, birthyear) VALUES
// ('Rahul Gupta', 'male', 1985),
// ('Priya Patel', 'female', 1990),
// ('Aarav Singh', 'male', 2002),
// ('Sneha Sharma', 'female', 1995),
// ('Vikram Malhotra', 'male', 1988);
