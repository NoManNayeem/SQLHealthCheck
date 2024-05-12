
# SQL Server Monitoring Dashboard

This project is an Electron and Flask-based application designed to monitor the health and statistics of Microsoft SQL Server. It provides a user-friendly dashboard to display crucial server information, helping in the efficient management of SQL Server instances.

## Features

- Connect and verify the status of your SQL Server instance.
- Display key server information including server name, edition, version, and product level.
- User-friendly Electron GUI for easy interaction.

## Installation

Follow these steps to install and run the SQL Server Monitoring Dashboard:

### Prerequisites

- [Node.js and npm](https://nodejs.org/en/download/) (Node.js 14+ and npm 6+ recommended)
- [Python](https://www.python.org/downloads/) (Python 3.7+ recommended)
- pip (Python package installer, should come with Python installation)

### Cloning the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/NoManNayeem/SQLHealthCheck.git
cd SQLHealthCheck
```

### Installing Dependencies

Install the Node.js and Python dependencies:

```bash
npm install
```

This command will also trigger the `postinstall` script that installs Python packages required by the Flask application.

### Running the Application

To start the application, use the following command:

```bash
npm start
```

This will launch the Electron application which in turn starts the Flask backend automatically.

## Usage

Once the application is running:
- The main window will display the greeting message and server information if the connection to the SQL Server is successful.
- Navigate through the UI to interact with different features provided by the dashboard.

## Contributing

Contributions are welcome! Please feel free to submit pull requests, create issues for bugs and feature requests, and provide feedback to improve the application.

## License

This project is open source and available under the ISC License.

## Acknowledgments

- Thanks to all contributors who have helped in building and enhancing this application.
- Special thanks to the Electron and Flask communities for their powerful and flexible frameworks.

## Contact

For more information, contact me on [GitHub](https://github.com/NoManNayeem).
