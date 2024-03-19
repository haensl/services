const { Response } = require('node-fetch');
const { headers, statusCodes } = require('@haensl/http');
const mimetypes = require('@haensl/mimetypes');
const errorService = require('./');

describe('error service', () => {
  describe('attach()', () => {
    let error;

    beforeEach(() => {
      error = new Error('Something failed.');
    });

    describe('HTTP response metadata', () => {
      let response;

      beforeEach(async () => {
        response = new Response('Fail', {
          status: statusCodes.internalServerError,
          headers: {
            [headers.contentType]: mimetypes.text
          }
        });

        error = await errorService.attachResponseToError(response, error);
      });

      it('attaches the headers', () => {
        expect(error.response.headers['content-type'])
          .toEqual(mimetypes.text);
      });

      it('attaches status', () => {
        expect(error.response.status)
          .toEqual(statusCodes.internalServerError);
      });

      it('attaches statusText', () => {
        expect(error.response.statusText)
          .toEqual('Internal Server Error');
      });

      it('attaches body text', () => {
        expect(error.response.body)
          .toEqual('Fail');
      });
    });
  });
});

