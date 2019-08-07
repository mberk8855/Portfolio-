// Dependencies
// =============================================================
var express = require('express');
var path = require('path');

// Routes
// =============================================================

module.exports = function(app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------
  
    app.get("/contact", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/contact.html"));
    });
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    // If no matching route is found default to home
    app.get("/portfolio", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/portfolio.html"));
    });
  };
  