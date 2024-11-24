# DogaTan.github.io

# Education Appointment Form

This project is a simple web application designed to allow users to fill out and submit an education appointment form. The application includes navigation to supplementary pages and uses external stylesheets for a cohesive design.

---

## Features
- **Dynamic Dropdowns**: Fills city, course type, and area code dropdowns using mock API data.
- **Input Validation**:
  - Ensures fields like name and phone number have valid inputs.
  - Real-time feedback for errors.
- **Responsive Design**: Adapts to various screen sizes using `styles.css`.
- **Sticky Advertisement**: Includes a closable ad banner.
- **Navigation Bar**: Links to **Home**, **Categories**, **About**, and **Contact** pages.
- **Submission Feedback**: A success message is displayed upon form submission.

---

## Files
1. **HTML Files**:
   - **`index.html`**: The main form page where users fill out the appointment form.
   - **`about.html`**: Placeholder page for "About" information (currently empty).
   - **`categories.html`**: Placeholder page for "Categories" (currently empty).
   - **`contact.html`**: Placeholder page for "Contact" (currently empty).
   - **`submitted.html`**: The confirmation page displayed after successful form submission.
2. **CSS Files**:
   - **`styles.css`**: Stylesheet for the entire project, ensuring responsive and aesthetically pleasing design.
3. **JavaScript Files**:
   - **`script.js`**: Contains all JavaScript code for input validation, dynamic dropdown population, and form interactions.
4. **Images Folder**:
   - Contains all the necessary images for the project, such as icons for navigation and feedback (e.g., `Home.png`, `Categories.png`, `successful.png`, etc.).

---

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Mock API for data simulation

---

## Form Validation
The form performs validation for the following fields:
- **Name**: Only allows alphabetical characters.
- **Phone Number**: Must contain exactly 7 digits.
- **Email**: Checks for a valid email format.
- **Dropdowns**: Ensures a valid selection is made for all dropdowns.
- **Checkbox**: Requires agreement to terms and conditions.

Error messages are displayed dynamically beneath invalid fields.

---

## Submission Process
1. Upon successful form validation, the user is redirected to `submitted.html`.
2. The success page confirms that the form has been submitted.

---

## Acknowledgments
- The project uses a mock API to populate dropdowns dynamically.
- Icons and images enhance navigation and user feedback.
- Supplementary pages (`about.html`, `categories.html`, `contact.html`) provide placeholders for future content.
