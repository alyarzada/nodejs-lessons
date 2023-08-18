Example 1: Event Loop in Node.js

Imagine you are building a web server using Node.js that needs to handle multiple incoming requests concurrently. Explain how the Node.js event loop enables this by demonstrating the following:

Create a simple HTTP server using the http module.
Set up routes for different URLs, such as /home and /about.
For each route, simulate a non-blocking I/O operation, like reading a file asynchronously.
Observe how the event loop allows the server to handle multiple requests without blocking, ensuring that the application remains responsive even during I/O operations.

<!-- ---------------------------------- -->

Example 2: Working with Events in a File Watcher

Build a Node.js program that watches a directory for file changes and emits events based on the changes detected:

Use the fs and events modules.
Create an event emitter that monitors a directory for file changes (additions, deletions, modifications).
Emit specific events like "fileAdded", "fileDeleted", and "fileModified" when changes occur.
Implement event listeners to respond to these events by logging relevant information about the changed files.

<!-- ---------------------------------- -->

Example 3: Custom Event Emitter for a User Registration System

Design a user registration system using custom event emitters to simulate the user signup process:

Create a custom event emitter class for user registration using the events module.
Define events like "userRegistered" and "emailSent" to track the registration process.
Implement event listeners for each event:
When a user is registered, emit the "userRegistered" event.
When the user registration is successful, emit the "emailSent" event.
Simulate the registration process by emitting events and observing the order in which the events are triggered.
