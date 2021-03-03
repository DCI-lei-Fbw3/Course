## Exercise: Implementing Routes

We need to extend our Store Management Application with several views/pages: a login screen, a registration form, a products page and product details pages


Please use React Router (react-router-dom) to create those pages with specific paths and implement a navigation that prevents a full reload:
- Frontpage: /
- Login: /login
- Registration /register
- Products: /products
- Product Details: /products/:articleNo


## BONUS:
1. If you open a path that does not exist, we want to display a "page not found" error. How can we do that?
2. How can we use our navigation to indicate what page we currently looking at?
3. Some paths may change over the time. If a user tries to access the old path /old-product-list that we changed to /new-product-list the other day, how can we make sure that they do not end up with a "page not found" error?
4. Is there a way to redirect to the login screen when the user is not logged in?
