# Cheat Sheet

1. Initialize project and structure
2. Set up dev enviroment
3. Install and set up express
    - add static middleware
    - add body parser
    - add routes
4. Add static resources
5. Add views folder with ready htmls
6. Add express-handlebars view engine
    - instal
    - add to express
    - config extentsion
    - add main layout
    - add partials folder
    - render home page
    - fix static paths
    - fix navigation to home
    - render home page
7. Add controllers folder with controller
8. Connect batabase
    - instal mongoose
    - connect
9. Authentication
    - add user controller
    - add controller to routes
    - fix header navigation to login, register and logout
    - render login page
    - render register page
10. Add user model
    - add unique index for username
    - validate repeate password
11. Modify login and register forms
12. Add login and regiser post actions
13. Add user manager
    - require in user controller
    - add login method
    - add register method
    - validate if user already exists
14. Hash password
    - install bcrypt
    - hash password
15. Login
    - find user by username
    - validate password with hash
16. Generate jwt token
    - install jsonwebtoken
    - promisify jsonwebtoken
    - create secret
    - generate token in manager.login
17. Return token in cookie
    - install cookie parser
    - config cookie parser
    - set cookie with token
18. Logout
19. Authentication middleware
    - create base middleware
    - use middleware
    - implement auth middleware
    - attach decoded token to request
    - handle invalid token
20. Authorization middleware
21. Dynamic navigation
    - add conditional in main layout
    - add to res locals
22. Error handling
    - add global error handler
