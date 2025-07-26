<%@ page import="java.util.*" %>
<%@ page session="true" %>

<%
    String item = request.getParameter("item");
    String priceStr = request.getParameter("price");
    String quantityStr = request.getParameter("quantity");

    if(item == null || priceStr == null || quantityStr == null) {
        response.sendRedirect("menu.jsp");
        return;
    }

    int price = Integer.parseInt(priceStr);
    int quantity = Integer.parseInt(quantityStr);

    List<Map<String, Object>> cart = (List<Map<String, Object>>) session.getAttribute("cart");
    if(cart == null) {
        cart = new ArrayList<>();
    }

    Map<String, Object> cartItem = new HashMap<>();
    cartItem.put("item", item);
    cartItem.put("price", price);
    cartItem.put("quantity", quantity);
    cart.add(cartItem);

    session.setAttribute("cart", cart);
    response.sendRedirect("menu.jsp?msg=added");
%>

