class FetchError extends Error {
    /**
     * 
     * @param {string} message 
     */
    constructor(message) {
        super(message);
    }
    /**
     * 
     * @param {Response} response
     */
    set response(response) {
        this._response = response;
    }

    /**
     * 
     * @return {Response} 
     */
    get response() {
        return this._response || new Response();
    }

    /**
     * 
     * @param {number} status
     */
    set status(status) {
        this._status = status;
    }

    /**
     * 
     * @return {number} 
     */
    get status() {
        return this._status || 0;
    }
}
/**
 * 
 * @param {RequestInfo} input 
 * @param {RequestInit|undefined} init 
 */
const safeFetch = function (input, init) {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch(input, init);
            if (!response.ok) {
                let err = new FetchError("HTTP status code: " + response.status);
                err.response = response;
                err.status = response.status;
                throw err;
            }
            resolve(response);
        } catch (e) {
            reject(e);
        }
    });
};

export default safeFetch;