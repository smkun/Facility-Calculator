This project is a Facility Fee Freight Calculator built using HTML, CSS, JavaScript, and jQuery. The calculator allows users to input weights for different types of materials (FE, NF, and Cat) and calculates the total weights and corresponding facility fees based on the selected region.

The project consists of the following files:

1. `index.html`: The main HTML file that defines the structure of the calculator interface.
2. `ffc.css`: The CSS file that styles the calculator interface.
3. `facilityFeeCalculator.js`: The JavaScript file that contains the logic for calculating weights and fees, as well as handling user interactions.

The calculator interface is divided into three sections:

-   FACFER - Facility Fee - FERR: Calculates the total FE weight in pounds and GT, and the corresponding facility fee.
-   FACFER - Facility Fee - NFR: Calculates the total NF weight in pounds and the corresponding facility fee.
-   FACFER - Facility Fee - CAT: Calculates the total Cat count and the corresponding facility fee.

The user can select a region from a dropdown menu, which determines the prices per unit for each material type. The prices are stored in the `regions` object in the JavaScript file.

The project heavily relies on jQuery for DOM manipulation and event handling. jQuery is used to dynamically generate input fields based on the total number of materials for each type (FE, NF, and Cat), update the calculated values, and handle user interactions such as clicking the "Calc" buttons and changing the selected region.

The JavaScript code is organized into functions that handle specific tasks, such as redrawing the input fields, clearing the calculations, setting prices based on the selected region, and calculating the weights and fees for each material type.

The CSS file provides styling for the calculator interface, including the background image, layout, and formatting of the input fields and result displays.

To run the project, simply open the `index.html` file in a web browser. Make sure that the `ffc.css`, `facilityFeeCalculator.js`, and any referenced background images are in the same directory as the HTML file.

Overall, this project demonstrates the use of HTML, CSS, JavaScript, and jQuery to create an interactive calculator interface for calculating facility fees based on material weights and selected regions.

Here's a sample `README.md` file for the project:

```
# Facility Fee Freight Calculator

The Facility Fee Freight Calculator is a web-based tool that allows users to calculate facility fees for different types of materials (FE, NF, and Cat) based on their weights and the selected region.

## Features

- Input weights for FE, NF, and Cat materials
- Select a region to determine the prices per unit for each material type
- Calculate total weights and corresponding facility fees for each material type
- Dynamically generate input fields based on the total number of materials for each type
- Clear the calculations and redraw the input fields

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery

## Getting Started

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. Select a region from the dropdown menu.
4. Enter the weights for each material type in the corresponding input fields.
5. Click the "Calc" button for each material type to calculate the total weights and facility fees.
6. To clear the calculations and start over, click the "Clear Sheet" button.

## File Structure

- `index.html`: The main HTML file that defines the structure of the calculator interface.
- `ffc.css`: The CSS file that styles the calculator interface.
- `facilityFeeCalculator.js`: The JavaScript file that contains the logic for calculating weights and fees, as well as handling user interactions.

## Dependencies

- jQuery: The project uses jQuery for DOM manipulation and event handling. The jQuery library is included via a CDN link in the HTML file.

## Customization

- To add or remove regions and their corresponding prices, modify the `regions` object in the `facilityFeeCalculator.js` file.
- To change the background image or styling of the calculator interface, modify the `ffc.css` file.

```
