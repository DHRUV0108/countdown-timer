# Countdown Timer Project Documentation

## Project Overview
For this project, I created a countdown timer that helps users track the time remaining until a specific event or occasion. The timer takes a date and time input from the user and displays the countdown in days, hours, minutes, and seconds. I built this using HTML, CSS, and JavaScript, and it was a great way to dive into how JavaScript handles dates and times.

## Technologies Used
- **HTML:** I used HTML to set up the structure of the page, including a form for entering the event details and a section to show the countdown.
- **CSS:** I added some basic styling to make the page look neat and centered, ensuring it’s easy to read and use.
- **JavaScript:** This was the core of the project, where I handled the logic for calculating and updating the countdown in real-time.

## How I Built It
Here’s how I approached the project step-by-step:

### 1. HTML Structure
I started with a simple HTML file:
- A form with a `datetime-local` input for the event date and time, a text input for an optional event name, and a submit button.
- A hidden `div` to display the countdown, which becomes visible once the user submits the form.

### 2. JavaScript Logic
JavaScript was where the magic happened:
- I added an event listener to the form to capture the user’s input when they hit "Start Countdown."
- I validated the date to make sure it’s not invalid (like if someone enters gibberish).
- If the input is good, the form hides, and the countdown section appears.
- I
