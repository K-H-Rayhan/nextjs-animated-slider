const fs = require('fs');
const path = require('path');

// Replace 'storyKeris.txt' with the path to your text file
const textFilePath = path.join(__dirname, 'storyKeris.txt');
const jsonFilePath = path.join(__dirname, 'storyContentKeris.json');

fs.readFile(textFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the text file:', err);
        return;
    }

    // Replace carriage return and newline characters with a unique token
    const formattedData = data.replace(/\r?\n|\r/g, ' ');

    // Split the text by the unique token to create an array of paragraphs
    const paragraphs = formattedData.split('  ').filter(Boolean); // Two spaces denote new paragraphs
    const jsonData = JSON.stringify(paragraphs, null, 2);

    fs.writeFile(jsonFilePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing the JSON file:', err);
            return;
        }
        console.log('JSON file was successfully created!');
    });
});
