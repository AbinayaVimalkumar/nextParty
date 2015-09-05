'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Welcome = new Module('welcome');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Welcome.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Welcome.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Welcome.menus.add({
    title: 'welcome example page',
    link: 'welcome example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Welcome.aggregateAsset('css', 'welcome.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Welcome.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Welcome.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Welcome.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Welcome;
});
