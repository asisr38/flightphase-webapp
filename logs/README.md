# FlightPhase Logs Directory

This directory is used to store log files for the FlightPhase application.

## Contents

- `inquiries.log`: Contains logs related to inquiry submissions and processing.
- `errors.log`: Contains error logs from throughout the application.

## Purpose

This directory provides a simple file-based logging solution. In a production environment, you might want to consider more robust logging solutions like:

- Centralized logging services (e.g., Loggly, Papertrail)
- Log aggregation tools (e.g., ELK stack)
- Application monitoring services (e.g., Sentry, New Relic)

## Note

This README file is committed to the repository to ensure the `logs` directory is created, but the actual log files (*.log) should be ignored by git. 