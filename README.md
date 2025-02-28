# Countdown Timer Project

## Overview

The **Countdown Timer** is a stylish, dynamic, and modern web application designed to count down to a user-specified event or occasion. Built using HTML, CSS, and JavaScript, it features an intuitive interface with animated elements, a futuristic design, and a responsive layout. The timer displays days, hours, minutes, and seconds remaining until the event, with a celebratory message and an optional sound when the countdown reaches zero.

This project is ideal for event tracking, personal milestones, or as a reusable component in larger web applications.

---

## Features

- **User Input**: Enter an event name, date, and time through clean, styled input fields.
- **Real-Time Countdown**: Displays the remaining time in days, hours, minutes, and seconds, updating every second.
- **Dynamic Animations**: Numbers pulse with a glowing effect when they change, enhancing visual engagement.
- **Stylish Design**: 
  - Dark theme with an animated gradient background.
  - Neon green accents and the futuristic "Orbitron" font.
  - Circular time units with glowing borders.
- **Modern Interactions**: 
  - Start button glows and changes color on hover.
  - Smooth fade-in/fade-out transitions for the event name, countdown, and completion message.
- **Responsive Layout**: Adapts to mobile devices by stacking time units vertically on smaller screens.
- **Completion Feedback**: Displays a celebratory message and plays an optional beep sound when the countdown finishes.

---

## Technologies Used

- **HTML**: Structures the input fields, countdown display, and message area (`index.html`).
- **CSS**: 
  - Styling for layout, colors, and animations (transitions, keyframes, and transforms) (`style.css`).
  - Flexbox for centered alignment and responsive design.
  - Google Fonts ("Orbitron") for typography.
- **JavaScript**: 
  - Handles user input validation, countdown logic, and DOM updates (`script.js`).
  - Manages animations and sound playback.

---

## Setup Instructions

1. **Clone or Download**:
   - Create a folder for the project (e.g., `countdown-timer`).
   - Save the provided files (`index.html`, `style.css`, `script.js`) in this folder.

2. **Add Audio (Optional)**:
   - Place a `beep.mp3` file in the same directory to enable the completion sound. Alternatively, update the `<audio src="beep.mp3">` in `index.html` with a URL to an online audio file (e.g., `https://example.com/beep.mp3`).
   - If no audio file is added, the timer will still function, but the sound won’t play.

3. **Open in a Browser**:
   - Open `index.html` in a web browser (e.g., Chrome, Firefox).

4. **Test the Timer**:
   - Enter an event name, select a future date and time, and click "Start Countdown" to begin.

---

## Usage Guide

1. **Input Event Details**:
   - **Event Name**: Type the name of your event (e.g., "New Year").
   - **Date**: Select a future date using the date picker.
   - **Time**: Choose a time using the time picker.

2. **Start the Countdown**:
   - Click the "Start Countdown" button.
   - If any field is empty or the date/time is in the past, an alert will prompt you to correct it.

3. **Watch the Countdown**:
   - The timer displays the remaining time in circular units.
   - Numbers pulse with a neon glow as they update.

4. **Completion**:
   - When the countdown reaches zero, the timer fades out, and a message (e.g., "New Year is here!") fades in.
   - An optional beep sound plays if an audio file is provided.

5. **Restart**:
   - Enter new details and click "Start Countdown" again to reset and begin a new countdown.

---

## File Structure
countdown-timer/
├── index.html     # Main HTML file
├── style.css      # CSS styling
├── script.js      # JavaScript logic
└── beep.mp3       # Optional audio file for completion sound
text

---

## Code Highlights

### HTML (`index.html`)
- **Inputs**: `<input>` elements for event name, date, and time with clear labels.
- **Countdown Display**: A `<div>` with nested `<span>` elements for days, hours, minutes, and seconds.
- **Audio**: An `<audio>` tag for the optional beep sound.

### CSS (`style.css`)
- **Background**: Animated gradient using `@keyframes gradient`.
- **Time Units**: Circular design with `border-radius: 50%` and neon green borders.
- **Animations**: 
  - `.animate` class scales numbers and adds a glow effect.
  - Transitions for opacity and transform properties ensure smooth changes.

### JavaScript (`script.js`)
- **Event Listener**: Listens for the "Start Countdown" button click to initiate the timer.
- **Countdown Logic**: Calculates time differences and updates the DOM every second.
- **Validation**: Ensures inputs are filled and the target date is in the future.
- **Animation Control**: Adds/removes the `.animate` class to trigger number pulses.

---

## Potential Improvements

- **Custom Themes**: Add a theme toggle (e.g., light/dark mode) with different color schemes.
- **Sound Options**: Allow users to enable/disable or customize the completion sound.
- **Progress Bar**: Include a circular progress ring around each time unit to visualize remaining time.
- **Persistent Storage**: Save events in `localStorage` to reload them on page refresh.
- **Timezone Support**: Add an option to select a specific timezone for the event.

---

## Screenshots

*(Add screenshots by capturing the timer in action and linking them, e.g., `![Countdown](screenshot.png)`)*

- **Initial State**: Input fields with a glowing start button.
- **Countdown Active**: Circular time units with pulsing numbers.
- **Completion**: Faded-in celebratory message.

---

## Credits

- **Built By**: Dhruv Singh
- **Font**: "Orbitron" from Google Fonts
