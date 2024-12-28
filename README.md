This project consists of an NGO donation recording portal with two main parts - the admin side and the user side. The admin can create new users, create events (donation types) and view donations. A user is able to submit a donation, which includes designating the donation type, amount, donor details (address, email, etc) and such, which are recorded to the database. This application does not perform any actual payments or financial transactions and is intended for record keeping purposes. 

Some of the technologies used in this application are Angular, Java, Spring Boot, Microservices, HTML, Typescript, REST API, and others.

To run this program, you can do the following:

1. Create a new project in VS Code and copy the contents of the src folder in "NgoPortal" folder into the src folder of the new project.
2. Navigate to the folder for the new project and run it using "ng serve"
3. Open the backend projects in Eclipse IDE
4. First, run DiscoveryServerMain found in "MicroserviceDiscoveryServer" project as a Java application
5. Once that is running, run the respective Main programs for each of the microservices and the API gateway as Java Applications (these should all be in a package called "com.example")
6. Once all of the above are running successfully, go to "http://localhost:4200/" to view the application.

To use the application, you will need to create an Admin user in the User table with the Admin role. This can be done using PgAdmin or via CLI, whichever is preferred. The Admin role is able to create new users within the application once logged in, including regular users. Note that the interface for a regular user is completely different from the interface for the Admin role.


Please note that you do not need to use VS Code or Eclipse IDE if you are more comfortable using a different method, but those are the IDEs used to create this project. 

You may additionally need to install PostgreSQL, Angular 17, Java 17, and others in order to successfully run and use this application.

Also note that the terms "Event" and "Donation Type" (or variations of these) are used interchangably. These refer to the same thing. Generally, Donation Type is preferred to avoid confusion with keywords in some coding languages.
