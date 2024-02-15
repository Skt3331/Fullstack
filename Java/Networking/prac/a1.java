import java.util.*;
import java.net.*;
import java.io.*;

public class a1{
    public static void main(String[] args)
{
    try{
    InetAddress ip= InetAddress.getByName("wwww.google.com");
    System.out.println(ip.getHostAddress());
   System.out.println( ip.getHostName());

    }
    catch(Exception e)
    {
        System.out.println(e);
        
    }
}
}