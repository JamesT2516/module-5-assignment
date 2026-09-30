# Front-End Web Development Portfolio

This project is my ongoing portfolio for the Front-End Web Development course.

I started the portfolio using semantic HTML5 and then added CSS to improve the layout, colours, typography, and overall presentation. In Module 4, I developed the website further by making it responsive across mobile, tablet, and desktop screen sizes.

For Module 5, I introduced JavaScript to add behaviour and interactivity to the website. This is the first stage of the project where the page responds to user actions using JavaScript.

## Module Progression

The portfolio has developed as I have worked through the course:

- HTML5 for webpage structure and semantic content
- CSS for colours, typography, spacing, and styling
- Flexbox and CSS Grid for layouts
- Media queries for responsive design
- CSS transitions and hover effects
- JavaScript for behaviour and interactivity
- DOM manipulation and event handling
- Browser testing and debugging
- Git and GitHub for version control

## Responsive Design Approach

I used a mobile-first approach for the responsive design.

The base CSS is designed for smaller screens first. Media queries are then used to adjust the layout as the available screen size increases.

The main breakpoints are:

- Mobile: base styles below 768px
- Tablet: 768px and above
- Desktop: 1024px and above

CSS Grid and Flexbox are both used in the project.

On smaller screens, the navigation uses a two-column Grid layout so the links remain easy to use without taking up too much vertical space.

On tablet and desktop screens, the navigation changes to Flexbox and displays the links horizontally.

The main content also changes to a two-column Grid layout on larger screens while the About Me and Contact Me sections span the full available width.

## Module 5 JavaScript Interaction

For Module 5, I created a floating **Let's Connect** contact message.

The popup appears automatically when the webpage loads.

It gives the visitor two choices:

- Close the popup using the × button
- Select Contact Me to move directly to the Contact Me section of the page

On tablet and desktop screens, the message floats on the right-hand side of the webpage.

On smaller mobile screens, it moves to the bottom of the screen so that it does not cover too much of the page content.

The popup also uses CSS transitions so that it appears and disappears smoothly.

## How the JavaScript Works

The JavaScript is stored in a separate `script.js` file and linked to the HTML using the `defer` attribute.

I used `getElementById()` to select the popup, its buttons, and the Contact Me section from the DOM.

I created functions to control the behaviour of the popup:

- `showContactPopup()` displays the popup
- `hideContactPopup()` hides the popup
- `goToContactSection()` closes the popup and moves the visitor to the Contact Me section

Event listeners are used to trigger these functions.

The `load` event displays the popup when the page has loaded.

The `click` event is used for both the close button and the Contact Me button.

The Contact Me button uses JavaScript to select the Contact section and move to it using `scrollIntoView()`.

This helped me understand how functions, events, and DOM manipulation can work together to make a webpage interactive.

## Why I Chose This Interaction

I wanted the JavaScript feature to be relevant to the portfolio instead of adding an interaction only for the sake of the assignment.

A contact message gives the visitor a clear way to get in touch while also demonstrating the JavaScript concepts I have been learning.

I also chose a custom popup instead of a basic browser alert because it fits the design of the portfolio and gives the visitor more control over the interaction.

## Challenges and Decisions

One of the main challenges was making sure the popup worked correctly when the website was opened locally from my computer.

My first version used a normal link to move to the Contact Me section. During testing, Chrome displayed a security error because the webpage was being opened directly using a local `file:///` address.

To solve this, I changed the Contact Me link to a button and used JavaScript with `scrollIntoView()` to move to the Contact section instead.

I also tested an `aria-hidden` attribute when hiding the popup. Chrome displayed a warning because the close button could still have keyboard focus when its parent element became hidden.

I removed the unnecessary JavaScript changes to `aria-hidden` and kept the popup visibility controlled through CSS classes instead.

These problems helped me understand the importance of testing JavaScript in the browser Console and checking more than whether something only appears to work visually.

## Testing and Debugging

I used Chrome DevTools to test the JavaScript interaction.

I tested that:

- The popup appears when the webpage loads
- The × button closes the popup
- The Contact Me button closes the popup
- The Contact Me button moves the visitor to the correct section
- The interaction works on a mobile-sized screen
- The browser Console does not show JavaScript runtime errors

I also used the browser Console while troubleshooting the interaction and corrected the issues that appeared during testing.

## Skills I Am Building

Through this project, I am currently building experience with:

- Semantic HTML5
- CSS styling and the Box Model
- Responsive web design
- Flexbox and CSS Grid
- Media queries and mobile-first design
- CSS transitions and interactive states
- JavaScript variables and constants
- JavaScript functions
- Event listeners
- DOM selection and manipulation
- Basic conditionals, loops, arrays, and objects
- Browser DevTools and debugging
- Git and GitHub version control

## Project Files

The project currently contains:

- `index.html` – the structure and content of the portfolio
- `styles.css` – the visual design and responsive layout
- `script.js` – the Module 5 JavaScript interaction
- `images/` – images used by the portfolio
- `README.md` – documentation of the project and my learning process

## What I Learned

Module 5 helped me understand the difference between creating a webpage that is only structured and styled and creating one that can respond to the visitor.

HTML provides the structure, CSS controls the presentation, and JavaScript can respond to events and change what happens on the page.

I also learned that testing and debugging are an important part of JavaScript development. A feature can look like it is working while the browser Console still shows a problem, so checking DevTools helped me find and correct issues that I would otherwise have missed.

I will continue developing this portfolio as I progress through the course and learn more front-end development skills.