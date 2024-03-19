/**
 * Attaches HTTP Response meta data to an error.
 *
 * @param error Error: The error to attach metainformation to.
 * @param response Response: HTTP response data to extrapolate.
 *
 * @return The updated Error object.
 */
export const attachResponseToError = async (response, error) => {
  if (response) {
    error.response = {
      headers: {},
      status: response.status,
      statusText: response.statusText,
      body: typeof response.text === 'function' ? await response.text() : undefined,
      ...error.response
    };

    try {
      for(const entry of response.headers.entries()) {
        error.response.headers[entry[0]] = entry[1];
      }
    } catch (error) {
      error.response.headers = JSON.parse(JSON.stringify(response.headers));
    }
  }

  return error;
};

export default {
  attachResponseToError
};
