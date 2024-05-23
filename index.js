const validateRadius = (radius) => {
  if (typeof radius !== "number" || radius <= 0) {
    throw new Error("Radius must be a positive number");
  }
  return radius;
};

const circumference = (radius) => 2 * Math.PI * radius;

const diameter = (radius) => 2 * radius;

const area = (radius) => Math.PI * radius * radius;

const perimeter = (radius) => 2 * Math.PI * radius;

const convertUnit = (radius, fromUnit, toUnit) => {
  const conversionFactors = {
    cm: 1,
    m: 100,
    in: 2.54,
    ft: 30.48,
  };

  if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors)) {
    throw new Error("Invalid unit");
  }

  const convertedRadius =
    (radius * conversionFactors[fromUnit]) / conversionFactors[toUnit];
  return convertedRadius;
};

const sectorArea = (radius, angle) => {
  const validatedRadius = validateRadius(radius);
  return (angle / (2 * Math.PI)) * area(validatedRadius);
};

const arcLength = (radius, angle) => {
  const validatedRadius = validateRadius(radius);
  return (angle / (2 * Math.PI)) * circumference(validatedRadius);
};

const segmentArea = (radius, angle) => {
  const validatedRadius = validateRadius(radius);
  return (
    area(validatedRadius) * (angle / (2 * Math.PI)) -
    sectorArea(validatedRadius, angle)
  );
};

const circleProperties = (radius, unit = "cm") => {
  const validatedRadius = validateRadius(radius);
  const convertedRadius = convertUnit(validatedRadius, unit, "cm");
  return {
    radius: convertedRadius,
    area: area(convertedRadius),
    perimeter: perimeter(convertedRadius),
    circumference: circumference(convertedRadius),
    diameter: diameter(convertedRadius),
  };
};

module.exports = {
  circleProperties,
  convertUnit,
  sectorArea,
  arcLength,
  segmentArea,
};
