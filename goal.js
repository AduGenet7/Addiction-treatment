// Get the h1 element
const heading = document.querySelector('h1');

// Add event listener to the heading
heading.addEventListener('mouseover', () => {
  // Change the text color to white when hovered over
  heading.style.color = 'white';
});

heading.addEventListener('mouseout', () => {
  // Change the text color back when hovered out
  heading.style.color = '#707070';
});



    // Get the button element
    const saveButton = document.querySelector('#saveButton');
  
    // Add event listener to the button
    saveButton.addEventListener('click', () => {
      // Show an alert message when the button is clicked
      alert('Your goal is set!');
    });
 

