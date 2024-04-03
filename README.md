To run this program, you can do the following:

1. Create a new project in VS Code and copy the contents of the src folder in "NgoPortal" folder into the src folder of the new project.
2. Navigate to the folder for the new project and run using "ng serve"
3. Open the backend projects in Eclipse IDE
4. First, run DiscoveryServerMain found in "MicroserviceDiscoveryServer" project as a Java application
5. Once that is running, run the respective Main programs in each of the microservices and the api gateway as Java Applications
6. Once all of the above are running successfully, go to "http://localhost:4200/" to view the application.

To use the application, you will need to create an Admin user in the User table with the Admin role. This can be done using PgAdmin or via CLI, whichever is preferred. The Admin role is able to create new users within the application once logged in, including regular users. Note that the interface for a regular user is completely different from the interface for the Admin role.


Please note that you do not need to use VS Code or Eclipse IDE if you are more comfortable using a different method, but note that the frontend may require some additional files which are included by creating a new project, since only the src folder is included in this repository. 

You may additionally need to install PostgreSQL, Angular 17, Java 17, and possibly others in order to successfully run and use this application.

Also note that the terms "Event" and "Donation Type" (or variations of these) are used interchangably. These refer to the same thing. Generally, Donation Type is preferred to avoid confusion with keywords.
