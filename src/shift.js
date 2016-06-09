var Shift = function (fn) {

    this.blobURL = _createBlob(fn);
    this.worker = _createWorker(fn, this.blobURL);

};

Shift.prototype.start = function () {
    
    this.worker.postMessage(undefined);

}

Shift.prototype.release = function () {

    console.log('release');
    console.log(this.blobURL);

    this.blobURL = window.URL.revokeObjectURL(this.blobURL);

}

function _createBlob (fn) {

    var blob = new Blob([ "self.onmessage = " + fn.toString() ]);

    return window.URL.createObjectURL(blob);

}

function _createWorker (fn, blobURL) {

    return new Worker(blobURL); 

}

// module.exports = Shift;
