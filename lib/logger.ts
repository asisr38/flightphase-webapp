import fs from 'fs/promises';
import path from 'path';

// Define log directory path
const LOG_DIR = path.join(process.cwd(), 'logs');
const INQUIRY_LOG_FILE = path.join(LOG_DIR, 'inquiries.log');
const ERROR_LOG_FILE = path.join(LOG_DIR, 'errors.log');

// Ensure the logs directory exists (runs once, non-blocking)
fs.mkdir(LOG_DIR, { recursive: true }).catch((err) => {
  console.error('Error creating logs directory:', err);
});

// Log levels
enum LogLevel {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR',
}

// Logger interface
interface Logger {
  info(message: string, data?: unknown): void;
  warn(message: string, data?: unknown): void;
  error(message: string, error?: unknown): void;
}

// Format log entry
const formatLogEntry = (level: LogLevel, message: string, data?: unknown): string => {
  const timestamp = new Date().toISOString();
  const dataString = data ? `\n${JSON.stringify(data, null, 2)}` : '';
  return `[${timestamp}] [${level}] ${message}${dataString}\n`;
};

// Write to log file asynchronously (fire-and-forget — errors are swallowed so
// a failed disk write never crashes the request handler)
const writeToLogFile = (filePath: string, entry: string): void => {
  fs.appendFile(filePath, entry).catch((err) => {
    console.error(`Error writing to log file ${filePath}:`, err);
  });
};

// Create logger instance
export const logger: Logger = {
  info(message: string, data?: unknown) {
    const entry = formatLogEntry(LogLevel.INFO, message, data);
    writeToLogFile(INQUIRY_LOG_FILE, entry);
    console.log(`[INFO] ${message}`, data ?? '');
  },

  warn(message: string, data?: unknown) {
    const entry = formatLogEntry(LogLevel.WARN, message, data);
    writeToLogFile(INQUIRY_LOG_FILE, entry);
    console.warn(`[WARN] ${message}`, data ?? '');
  },

  error(message: string, error?: unknown) {
    const entry = formatLogEntry(LogLevel.ERROR, message, error);
    writeToLogFile(ERROR_LOG_FILE, entry);
    console.error(`[ERROR] ${message}`, error ?? '');
  },
};

export default logger;
