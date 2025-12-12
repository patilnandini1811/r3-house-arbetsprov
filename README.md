# React + Vite + Tailwind CSS
House Figma to Responsive React Build

This is my implementation of the “House” assignment.
The goal was to recreate the desktop design from Figma and then interpret how the layout should behave on mobile. I focused on keeping the look clean, readable, and as close to the design as possible.



# About the Design
Desktop

- The desktop version follows the Figma sketch:

- Hero section with large background image

- Text placed on top using layered positioning

- Custom angled button using CSS clip-path

- Two-column content block

- Gallery section with overlay titles

- Footer with the large decorative “HOUSE” text

# Mobile

There was no mobile design in the Figma file, so I created my own interpretation. I adjusted text sizes, added more spacing, stacked sections vertically, and made the buttons slightly smaller on small screens. The idea was simply to keep the same look and feel, but in a way that works comfortably on a phone.

# Tech Choices

- React + Vite
I chose React for the component structure and Vite for a fast, simple setup.

- Tailwind CSS
Tailwind made it easy to match the spacing and layout from Figma and to handle responsive behavior without needing much custom CSS.

- Custom Button Component
The angled button shape is created using clip-path. The component accepts children and className, which makes it easy to reuse with different text and colors across the project.

# How to Run
npm install
npm run dev

# Build for Production
npm run build

# Project Structure 
src/
components/
assets/

App.jsx
main.jsx

# Author
Nandini Patil
Frontend developer