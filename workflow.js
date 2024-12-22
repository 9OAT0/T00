const fs = require('fs');
const path = require('path');

// Helper Functions
const convertAgeToBuddhistEra = (age) => 543 + (2024 - age);
const convertGradeToRank = (grade) => {
    const gradeToRank = {
        'A': 'High Distinction',
        'B+': 'Distinction',
        'B': 'Distinction',
        'C+': 'Good',
        'C': 'Good',
        'D+': 'Normal',
        'D': 'Normal',
        'F': 'Failed',
    };
    return gradeToRank[grade] || 'Unknown';
};

// Function to read and process the file
const processFile = (filePath) => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log('File content:', data);

        // Example processing
        const lines = data.split('\n');
        const nameLine = lines.find(line => line.startsWith('Name'));
        const ageLine = lines.find(line => line.startsWith('Age'));
        const gradeLine = lines.find(line => line.startsWith('Software Testing Grade'));

        // Extract values (trim spaces around ":")
        const name = nameLine?.split(':')[1]?.trim();
        const age = parseInt(ageLine?.split(':')[1]?.trim(), 10);
        const grade = gradeLine?.split(':')[1]?.trim();

        const buddhistEra = convertAgeToBuddhistEra(age);
        const rank = convertGradeToRank(grade);

        console.log(`Name: ${name}`);
        console.log(`Buddhist Era: ${buddhistEra}`);
        console.log(`Software Testing Rank: ${rank}`);
    } catch (err) {
        console.error('Error reading file:', err.message);
    }
};

// Define file path
const filePath = path.join('D:/TeamB/output', 'textfile.txt');

// Process the file
processFile(filePath);

module.exports = { convertAgeToBuddhistEra, convertGradeToRank, processFile };
