// PS. We still write blocking code in js (since js is sync and single-threaded language) but thanks to the browser, it provides some nice api's so that we can offload async operations and write non-blocking code.

// Async functions get offloading so they will be executed after all immediate tasks completed regardless of how much time it takes!
// event loop register callback, when it completes the task, it execute callback

// we run our immediate task first, after execute cb

// read file (async method) example (event loop will offload it)
