from flask import Flask, jsonify
import pyodbc

# Initialize the Flask application
app = Flask(__name__)

# Connection string
connection_string = 'DRIVER={ODBC Driver 17 for SQL Server};SERVER=NAYEEMISLAM;Trusted_Connection=yes;'

# Define routes
@app.route('/')
def hello():
    return "Hello from Flask!"

@app.route('/connect')
def connect():
    try:
        # Attempt to connect to the SQL Server
        with pyodbc.connect(connection_string, timeout=10):  # Adding a timeout for the connection attempt
            return "Connected Successfully"
    except Exception as e:
        # Return the error message and a 500 internal server error status
        return str(e), 500


@app.route('/server-info')
def server_info():
    try:
        with pyodbc.connect(connection_string) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT 
                    CONVERT(nvarchar(255), SERVERPROPERTY('MachineName')) AS ServerName,
                    CONVERT(nvarchar(255), SERVERPROPERTY('Edition')) AS Edition,
                    CONVERT(nvarchar(255), SERVERPROPERTY('ProductVersion')) AS Version,
                    CONVERT(nvarchar(255), SERVERPROPERTY('ProductLevel')) AS ProductLevel
            """)
            row = cursor.fetchone()
            if row:
                columns = [column[0] for column in cursor.description]
                data = dict(zip(columns, row))
                return jsonify(data)
            else:
                return jsonify({"error": "No data found"}), 404
    except Exception as e:
        app.logger.error(f"Failed to fetch server information: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

# Check if the run is from the main module and not an imported module
if __name__ == '__main__':
    # Run the app in debug mode for development
    app.run(debug=True)
