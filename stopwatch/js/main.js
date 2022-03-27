// Use strict
"use strict";

function Stopwatch() {

    // Define private variables
    let duration = 0
    let startDate = 0
    let endDate = 0
    let isActive = false

    // Revert all variables to initial values
    this.reset = function() {
        duration = 0
        startDate = 0
        endDate = 0
        isActive = false
    }
    
    // Start timer
    this.start = function() {
        if (isActive) throw new Error("Stopwatch has already started.")
        startDate = Date.now()
        isActive = true
    }

    // Stop timer
    this.stop = function() {
        if (!isActive) throw new Error("Stopwatch is not started.")
        endDate = Date.now()
        duration += (endDate - startDate)/1000
        isActive = false 
    }

    // Show duration (Read-only)
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        }
    })

}