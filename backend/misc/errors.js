module.exports = {
    createError: (statusCode, message) => {
      return {
        statusCode: statusCode,
        error: new Error(message),
      };
    },
  
    BAD_REQUEST: '400: Bad Request',
    WRONG_DATA: 'wrond_data: Username or password incorrects',
    UNAUTHORIZED: '401: Unauthorized',
    CORS: 'cors: Unauthorized by CORS error',
    NOT_FOUND: '404: Path not found',
    INTERNAL_SERVER_ERROR: '500: Something went wrong!',
  };
  