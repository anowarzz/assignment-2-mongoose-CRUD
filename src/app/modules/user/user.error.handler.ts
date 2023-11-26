// eslint-disable-next-line @typescript-eslint/no-explicit-any
const zodErrorResponse = (error: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorDetails = error.errors.map((err: any) => ({
    path: err.path.join('.'),
    message: err.message,
  }));
  return {
    success: false,
    message: 'Something went wrong',
    error: errorDetails,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mongoErrorResponse = (error: any) => {
  const duplicateField = Object.keys(error.keyPattern)[0];
  const errorMessage = `${duplicateField} must be unique.`;

  return {
    success: false,
    message: 'Something went wrong',
    error: errorMessage,
  };
};

export const ErrorHandlers = {
  zodErrorResponse,
  mongoErrorResponse,
};
