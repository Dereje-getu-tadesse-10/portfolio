const webpack = require("webpack");
const path = require("path");

// animation
let config = {
    mode: 'development',
    entry: "./src/anim.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./distAnim.js"
    }
}


// projet json fecth
let configB = {
    mode: 'development',
    entry: "./src/projets.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./dist.js"
    }
}
// labs json fetch
let configC = {
    mode: 'development',
    entry: "./src/labs.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./distLabs.js"
    }
}
// api fecth
let configD = {
    mode: 'development',
    entry: "./src/api.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./distBlog.js"
    }
}
// scroll animation
let configE = {
    mode: 'development',
    entry: "./src/scroll.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "./distScroll.js"
    }
}


module.exports = [
    config, configB, configC, configD, configE
]