import java.sql.*;
import java.util.*;
class A7{
	public static void main(String []args){
		String name,area;
		int popn;
		Connection con;
		PreparedStatement ps;
		ResultSet rs;
		Scanner sc=new Scanner(System.in);
		boolean b=true;
		try{
			Class.forName("org.postgresql.Driver");
			con=DriverManager.getConnection("jdbc:postgresql://localhost/saurav","postgres","postgres");
			Statement st=con.createStatement();
			while(b){
				System.out.println("\n\n1-> Insert ");
				System.out.println("2-> Modify ");
				System.out.println("3-> Delete ");
				System.out.println("4-> Search ");
				System.out.println("5-> Veiw all ");
				System.out.println("6-> Insert ");
				System.out.print("\n\n Enter Your Choice :  ");
				int ch=sc.nextInt();
				switch(ch){
					case 1 :	ps=con.prepareStatement("insert into district values(?,?,?);");
							System.out.print("\n\nENter Name:");
							name=sc.next();
							ps.setString(1,name);
							System.out.print("\n\nENter area:");
							area=sc.next();
							ps.setString(2,area);
							System.out.print("\n\nENter population:");
							popn=sc.nextInt();
							ps.setInt(3,popn);
							System.out.println("\nValues Inserted Successfully\n");
							ps.executeUpdate();
							break;
							
						
					case 2 :	System.out.print("\nEnter Column(2->Area,3->Population):");
							int col=sc.nextInt();
							if(col==2){
								ps=con.prepareStatement("update district set area=? where name=?");
								System.out.print("Enter modified area value:");
								area=sc.next();
								ps.setString(1,area);
								System.out.print("Enter name: to change area");
								name=sc.next();
								ps.setString(2,name);
								System.out.println("\nValues Updated Successfully\n");
								ps.executeUpdate();
								}
								
							else if(col==3){
								ps=con.prepareStatement("update district set popn=? where name=?");
								System.out.print("Enter modified population value:");
								popn=sc.nextInt();
								ps.setInt(1,popn);
								System.out.print("Enter name: to change area");
								name=sc.next();
								ps.setString(2,name);
								System.out.println("\nValues Updated Successfully\n");
								ps.executeUpdate();
								}
							break;
							
					
					case 3 :	ps=con.prepareStatement("delete from district where name=?");
							System.out.print("\n\nENter Name:");
							name=sc.next();
							ps.setString(1,name);
							ps.executeUpdate();
							System.out.println("\nValues Deleted Successfully\n");
							break;
					
					case 4 :	ps=con.prepareStatement("select * from district where name=?;");
							System.out.print("\n\nENter Name:");
							name=sc.next();
							ps.setString(1,name);
							rs=ps.executeQuery();
							while(rs.next()){
								System.out.println("\t"+rs.getString(1)+"|\t"+rs.getString(2)+"|\t"+rs.getInt(3));
							}
							break;
					
					case 5 :	ps=con.prepareStatement("select * from district;");
							rs=ps.executeQuery();
							while(rs.next()){
								System.out.println("\t"+rs.getString(1)+"|\t"+rs.getString(2)+"|\t"+rs.getInt(3));
							}
							break;
					
					case 6 :	b=false;
					
					
				}
			}
		}
		catch(Exception e){
			System.out.println(e);
		}
	}
}