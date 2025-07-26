<%@ page import="java.sql.*, java.util.*" %>
<html>
<head>
    <title>Admin Dashboard</title>
</head>
<body>
    <h2>All Customer Orders</h2>
    <table border="1">
        <tr>
            <th>User Email</th>
            <th>Food Item</th>
            <th>Quantity</th>
            <th>Total Price</th>
        </tr>

        <%
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/fooddb", "root", "Sanket@123");

                Statement stmt = con.createStatement();
                ResultSet rs = stmt.executeQuery("SELECT * FROM orders");

                while(rs.next()) {
        %>
        <tr>
            <td><%= rs.getString("user_email") %></td>
            <td><%= rs.getString("food_item") %></td>
            <td><%= rs.getInt("quantity") %></td>
            <td><%= rs.getDouble("total_price") %></td>
        </tr>
        <%
                }
                con.close();
            } catch(Exception e) {
                out.println("Error: " + e.getMessage());
            }
        %>
    </table>
</body>
</html>

