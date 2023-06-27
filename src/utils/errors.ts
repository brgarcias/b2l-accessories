export function FormValidationError(message = '') {
  this.name = 'FormValidationError';
  this.message = message;
  this.status = 500;
}
