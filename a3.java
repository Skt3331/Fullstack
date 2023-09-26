import java.util.*;
class a3
{
public static void main(String args[])
{
Scanner sc=new Scanner(System.in);
int n,rev=0,temp=0;
System.out.println("Enter a number");
n=sc.nextInt();
while(n>0)
{
temp=n%10;
rev=rev*10+temp;
n=n/10;
}
System.out.println("reversed number="+rev);
}
}


