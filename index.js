"use strict";
var fs = require('fs');
/**
 * Checks to ensure that the filepath exists. Resolves or rejects a Promise
 *
 * @param  String
 * @return Promise<string>
 */
function default_1(filepath) {
    return new Promise(function (resolve, reject) {
        fs.access(filepath, function (err) {
            if (!err)
                resolve(filepath);
            else
                reject(new Error('File does not exist'));
        });
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=index.js.map