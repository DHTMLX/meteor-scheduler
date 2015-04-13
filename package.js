Package.describe({
  name: 'dhtmlx:scheduler',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'dhtmlxScheduler is an event calendar that allows adding a Google-like scheduler on a web page.',
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/DHTMLX/meteor-scheduler.git",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
    api.addFiles(
	[
	    "dhtmlx_scheduler/codebase/dhtmlxscheduler.js",
	    "dhtmlx_scheduler/codebase/dhtmlxscheduler.css"
	],
	"client"
    );

    var imagesFolder = "dhtmlx_scheduler/codebase/";
    api.addFiles(getFilesFromFolder(imagesFolder + "imgs"), "client");
    api.addFiles(getFilesFromFolder(imagesFolder + "imgs_dhx_terrace"), "client");
    api.addFiles(getFilesFromFolder(imagesFolder + "imgs_flat"), "client");
    api.addFiles(getFilesFromFolder(imagesFolder + "imgs_glossy"), "client");
    api.export("scheduler", "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dhtmlx:scheduler');
  api.addFiles('scheduler-tests.js');
});

function getFilesFromFolder(folder) {
    var fs = Npm.require("fs"),
        path = Npm.require("path");

    var fullPathToFolder = path.resolve(".", folder),
        files = fs.readdirSync(fullPathToFolder);

    for(var key in files)
        files[key] = folder + path.sep + files[key];

    return files;
}
