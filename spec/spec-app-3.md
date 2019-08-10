# App-3-spec

Context:
This is a full-stack, Universal(Isomorphic) application built to demonstrate working knowledge of React(Hooks)-ContextAPI-VanillaCSS-Next front-end + Node-Express-Apollo-MongoDB back-end technology stack.
The project will be holiday rentals booking app,- allowing the user to post/rent properties various properties. It will feature register/login functionality, private messaging between users, integrated payments, review/comment functionality. The properties will be listed on an interactive map, which will also be integrated with the search functionality.

## Functional spec:

Functionality:

- User register/login/update functionality.
- Personalized home pages for logged in users.
- Protected private pages functionality.
- Private messaging functionality.
- Property Post/Rent functionality.
- Review/Comment functionality.
- On-map listing display
- Property search.
- Payments functionality.
- Responsive/Animated front-end design.

Site pages and their functions:

```sh
Home                # Landing page/map view/search
|
|- Register/login   # Register/login functionality
|
|- User info*       # User account info/updates
|
|- User messages*   # User messages page
|
|- Bookings*        # User bookings and payments
|
|- Reviews          # Reviews
|
|- About/Contacts   # Information about the company/contacts
|
|- .....

* - These pages are private and require user login.
```

## Design spec:

TDB

## Technical spec:

### Front End

Views:

- Rect(Hooks)
- Next

State management:

- ContextAPI

Styling:

- Custom vanilla CSS for styling.

### Back End

API design:

- GraphQL

Server:

- Node with Express and Apollo.

Database:

- MongoDB with Mongoose.
