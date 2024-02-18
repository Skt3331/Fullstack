import java.sql.*;
import java.io.*;

public class Q6
{
  public static void main(String args[])
  {
    try
    {
	  Class.forName("org.postgresql.Driver");
	  Connection conn=null ; 
	  Statement stmt=null; 

       Connection con = DriverManager.getConnection("jdbc:postgresql:fo110","postgres", "");


	  if(con==null)
		System.out.println("Connection Failed");
	  else
		System.out.println("Connection Successfull");
	
      stmt=con.createStatement();
	 stmt.executeUpdate("UPDATE Course set no_of_student=1000 where department='BCA_Science' ");

	  stmt.close();
	  con.close();
	}

	catch(ClassNotFoundException e)
	{
		System.out.println("Class not found"+e);
	}	
	catch(SQLException e)
	{
		System.out.println("SQL Error"+e);
		
	}
	catch(Exception e)
	{
		System.out.println("Error"+e);
		
	}

  }
}