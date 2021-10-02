"use strict";

const resources = require("./resources.js");

const runScripts = () => {
    const activeResources = resources.filter((resource) => resource.active);
    activeResources.forEach((resource) => {
        require(resource.path);
        console.log(`${resource.name} loaded`);
    });
    console.log(`${activeResources.length} resources loaded`);
};

const runServer = () => {
    try {
        runScripts();
    } catch (error) {
        console.log(error.message);
    }
};

runServer();
