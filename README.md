# Circle Geometry Utils

This npm package provides a set of utility functions for performing various calculations related to circles, including area, perimeter, circumference, diameter, sector area, arc length, and segment area. It also includes a unit conversion function to convert the radius from one unit to another.

## Installation

To install the package, run the following command:

npm install circle-geometry-utils-hkrk

## Usage

First, import the required functions from the package:

```javascript
const {
  circleProperties,
  convertUnit,
  sectorArea,
  arcLength,
  segmentArea,
} = require('circle-geometry-utils-hkrk');



Circle Properties
To get an object containing various circle properties (radius, area, perimeter, circumference, and diameter), use the circleProperties function:

const radius = 5; // in centimeters
const circleData = circleProperties(radius);
console.log(circleData);
// Output: { radius: 5, area: 78.53981633974483, perimeter: 31.41592653589793, circumference: 31.41592653589793, diameter: 10 }



You can also specify the unit of the input radius:

const radiusInInches = 10;
const circleData = circleProperties(radiusInInches, 'in');



Unit Conversion
To convert the radius from one unit to another, use the convertUnit function:

const radiusInCm = convertUnit(10, 'in', 'cm');
console.log(radiusInCm); // Output: 25.4



Sector Area
To calculate the area of a sector, use the sectorArea function:

const radius = 5;
const angle = Math.PI / 4; // in radians
const sectorAreaValue = sectorArea(radius, angle);
console.log(sectorAreaValue); // Output: 9.817477042468103



Arc Length
To calculate the length of an arc, use the arcLength function:

const radius = 5;
const angle = Math.PI / 3; // in radians
const arcLengthValue = arcLength(radius, angle);
console.log(arcLengthValue); // Output: 5.235987755982989



Segment Area
To calculate the area of a segment, use the segmentArea function:

const radius = 5;
const angle = Math.PI / 6; // in radians
const segmentAreaValue = segmentArea(radius, angle);
console.log(segmentAreaValue); // Output: 6.495190528383289



Error Handling
If an invalid radius value is provided (non-numeric or negative), the functions will throw an error with the message "Radius must be a positive number". If an invalid unit is provided to the convertUnit function, it will throw an error with the message "Invalid unit".

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.
// https://github.com/kaami419/my-npm-pkg-for-circles

License
This project is licensed under the MIT License.
```
