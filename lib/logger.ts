import fs from 'fs';
import path from 'path';

// Define log directory path
const LOG_DIR = path.join(process.cwd(), 'logs');

// Create logs directory if it doesn't exist
if (!fs.existsSync(LOG_DIR)) {
  try {
    fs.mkdirSync(LOG_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating logs directory:', error);
  }
}

// Log file paths
const INQUIRY_LOG_FILE = path.join(LOG_DIR, 'inquiries.log');
const ERROR_LOG_FILE = path.join(LOG_DIR, 'errors.log');

// Log levels
enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

// Logger interface
interface Logger {
  info(message: string, data?: any): void;
  warn(message: string, data?: any): void;
  error(message: string, error?: any): void;
}

// Format log entry
const formatLogEntry = (level: LogLevel, message: string, data?: any): string => {
  const timestamp = new Date().toISOString();
  const dataString = data ? `\n${JSON.stringify(data, null, 2)}` : '';
  return `[${timestamp}] [${level}] ${message}${dataString}\n`;
};

// Write to log file
const writeToLogFile = (filePath: string, entry: string) => {
  try {
    fs.appendFileSync(filePath, entry);
  } catch (error) {
    console.error(`Error writing to log file ${filePath}:`, error);
  }
};

// Create logger instance
export const logger: Logger = {
  info(message: string, data?: any) {
    const entry = formatLogEntry(LogLevel.INFO, message, data);
    writeToLogFile(INQUIRY_LOG_FILE, entry);
    console.log(`[INFO] ${message}`, data ? data : '');
  },

  warn(message: string, data?: any) {
    const entry = formatLogEntry(LogLevel.WARN, message, data);
    writeToLogFile(INQUIRY_LOG_FILE, entry);
    console.warn(`[WARN] ${message}`, data ? data : '');
  },

  error(message: string, error?: any) {
    const entry = formatLogEntry(LogLevel.ERROR, message, error);
    writeToLogFile(ERROR_LOG_FILE, entry);
    console.error(`[ERROR] ${message}`, error ? error : '');
  },
};

export default logger; 