function onMethodChange() {
    const calcMethod = document.getElementById("calcMethod").value;
    const toolDiameter = parseFloat(document.getElementById("toolDiameter").value);
    const feedRate = parseFloat(document.getElementById("feedRate").value);
    // Perform force calculations based on the selected method (Merchant or Lee Shaffer)
    // Replace the following line with your actual force calculation logic
    const forces = calculateForces(calcMethod, toolDiameter, feedRate);

    const forceOutputElement = document.getElementById("forceOutput");
    if (forces) {
        forceOutputElement.textContent = `Forces: ${forces}`;
    } else {
        forceOutputElement.textContent = "Invalid inputs or calculation method.";
    }
}

// Replace this dummy function with your actual force calculation logic
function calculateForces(method, toolDiameter, feedRate) {
    if (method === "merchant") {
        // Merchant theory calculation
        // Replace this with your merchant theory calculation logic
        return `Merchant Theory: Tool Diameter: ${toolDiameter}, Feed Rate: ${feedRate}`;
    } else if (method === "leeShaffer") {
        // Lee Shaffer theory calculation
        // Replace this with your Lee Shaffer theory calculation logic
        return `Lee Shaffer Theory: Tool Diameter: ${toolDiameter}, Feed Rate: ${feedRate}`;
    } else {
        return null; // Invalid method selected
    }
}
