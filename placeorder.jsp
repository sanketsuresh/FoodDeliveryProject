<%@ page import="java.sql.*, java.util.*, javax.servlet.http.*, javax.servlet.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%
    HttpSession session = request.getSession(false);

    if (session == null || session.getAttribute("email") == null) {
        response.sendRedirect("login.jsp");
        return;
    }

    String email = (String) session.getAttribute("email");
    ArrayList<String> cart = (ArrayList<String>) session.getAttribute("cart");

    if (cart == null || cart.isEmpty()) {
        out.println("<h2>Your cart is empty.</h2>");
        return;
    }

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/fooddb", "root", "Sanket@123");

        PreparedStatement ps = con.prepareStatement("INSERT INTO orders (email, items) VALUES (?, ?)");
        ps.setString(1, email);
        ps.setString(2, String.join(", ", cart));
        ps.executeUpdate();

        // Clear cart
        session.setAttribute("cart", new ArrayList<String>());

        response.sendRedirect("ordersuccess.jsp");
        con.close();
    } catch (Exception e) {
        out.println("Error: " + e.getMessage());
    }
%>

