<!-- 1:  Advanced Prototype Hierarchy ---------------------------------------------- -->

- Advanced Prototype Hierarchy
  You are designing a simulation for a zoo. Create a prototype named Animal with properties name and species. Implement a method makeSound() that displays a generic animal sound. Extend the Animal prototype to create specific animal prototypes like Lion, Elephant, and Snake. Each specialized animal should override the makeSound() method with a species-appropriate sound. Additionally, implement a method describe() that displays detailed information about the animal.

<!-- Task 2: Composition and Aggregation ---------------------------------------------- -->

- Task 2: Composition and Aggregation
  You are developing a music player application. Create a prototype named Song with properties title, artist, and duration. Implement a method play() that displays a message indicating the song is playing. Then, create a prototype named Playlist that can hold an array of Song objects. Implement methods for adding and removing songs from the playlist, as well as a playAll() method that plays each song in the playlist in sequence.

<!-- Task 3: Interface and Polymorphism ---------------------------------------------- -->

- Task 3: Interface and Polymorphism
  You are building a messaging application. Create an interface prototype named MessageSender with a method sendMessage(). Then, create two separate prototypes, EmailSender and SMSSender, that implement the MessageSender interface. Each specialized sender should override the sendMessage() method to display the appropriate message delivery method (e.g., "Sending email to..."). Finally, create an array of sender objects and demonstrate polymorphism by invoking the sendMessage() method on each sender.

<!-- Task 4: Abstraction ---------------------------------------------- -->

- Task 4: Abstraction
  You are tasked with building a simple vehicle management system for a transportation company. Implement a prototype named Vehicle with properties make, model, and year. Create a method getDetails() that returns a formatted string with the vehicle's make, model, and year.
  Next, extend the Vehicle prototype to create specialized prototypes for Car, Truck, and Motorcycle. Each specialized vehicle should have additional properties that are specific to its type (e.g., numDoors for Car, cargoCapacity for Truck, engineType for Motorcycle).
  Override the getDetails() method in each specialized vehicle prototype to include the type-specific properties in the formatted string. Ensure that the getDetails() method in the base Vehicle prototype remains generic.
  Finally, create instances of each specialized vehicle and demonstrate the abstraction principle by invoking the getDetails() method on each vehicle. This task will encourage students to design a hierarchy that demonstrates abstraction by exposing only relevant details at each level of specialization.

Note: Remember, abstraction allows you to focus on essential features while hiding unnecessary complexities. In this task, students will need to determine what properties and methods are essential at each level of the hierarchy and how to present those details in a meaningful way using abstraction.
