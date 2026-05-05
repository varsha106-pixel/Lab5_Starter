# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!
Varsha Jawadi, Alex Twano
https://varsha106-pixel.github.io/Lab5_Starter/expose.html
https://varsha106-pixel.github.io/Lab5_Starter/explore.html

Fill in your answers in your README.md

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   I would not use a unit test to test the message feature of amessaging application. Unit tests are used to test isolated functions but a message feature has many interacting components. The UI, network, and database must work together to send the message succefully. Unit tests don't do well at testing how many parts work together.

3) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes. This feature is simple and isolated which is perfect for a unit test. It doesn't depend on any other component and has a clear input and expected output.
