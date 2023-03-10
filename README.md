# Canary TRAP

## _Exposing and Prevention of Information Leakage_

## _Traceable deterrence_

Canary TRAP prevents and exposes information leakages, by leaving visually undetectable but traceable footprints to the naked eye in the digital documents.

## Technologies Used

Main:

1. React - for frontend.
2. Redux - for State management
3. MongoDB / Mongoose- the database for the backend.
4. Express - for the middleware.
5. Multer - middleware to transport image buffer between frontend & backend
6. JIMP - for pixel manipulation
7. nodemailer - for automated email + attaching IMGs to email.

Other smaller packages: 8. Axios - for fetching 9. Tailwind - for styling. 10. React router - routing to different pages, for the NavBar. 11. jsonwebtoken - to enable JWT token 12. jwt-decode - for decoding JWT tokens 13. UUID - for unique ID 14. bcrypt - encryption for password 15. dotenv - for private enviroment variables 16. heroicons - for icons 17. buffer - for use images buffer

## Hierarchy

![Hierarchy screenshot](/public/img/wireframe.png)

## User Flow / Stories

#### Demo

![DEMO](/public/img/demo.gif)

##### Creating documents

- **Upload** "Confidential" documents.
- **Input**: Quantity of distribution & Names
- ✨Magic ✨
- **Recieve** each new altered document from your email

##### Exposing LEAKS

- **Upload** Leaked Documents
- ✨Magic ✨
- Gives u a **result** of who it matches.

## General Approach

1. Started out by drawing out the hierarchy of the site
2. Identify all the endpoint needed
3. Build out the core backend components
4. Build check to ensure backend working, as arrays are too large to display on MongoDB
5. Built the barebone forms, and inputs on the frontend and link up the backend to ensure functionality
6. Build frontend + routing
7. Add in CSS

## Limitations & Future work

- Add in additional features e.g PDF conversion compatability)
- Add in capabilites to allow image tracebility even if image is cropped / skewed. (Current feature only work on full image)
- use matrix package for better computational efficiency.
- redo database schema, for better stripping of redundant infomation being fed to frontend, which can result in slower initial loading time, and rendering of state.

## References

Website initial template: Provided and thank to [Creative Tim](https://www.creative-tim.com/?ref=mtk)
