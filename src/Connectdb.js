// Import required packages
const sql = require('mssql');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Configuration for local database connection
const config = {
  user: 'your_username', // Update with your SQL Server username
  password: 'your_password', // Update with your SQL Server password
  server: 'localhost', // Update if your SQL Server instance is not hosted locally
  database: 'your_database' // Update with the name of your database
};

// Function to connect to the database
async function connectToDatabase() {
  try {
    // Prompt user for username and password
    rl.question('Enter SQL Server username: ', (username) => {
      rl.question('Enter SQL Server password: ', async (password) => {
        // Override config with user input
        config.user = username;
        config.password = password;

        // Attempt to connect to the database
        await sql.connect(config);
        console.log('Connected to the database successfully.');

        // Close readline interface
        rl.close();
      });
    });
  } catch (error) {
    console.error('Error occurred while connecting to the database:', error.message);
  }
}

// Call function to connect to the database
connectToDatabase();
