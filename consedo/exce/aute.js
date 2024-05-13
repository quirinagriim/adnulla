// Get the ScriptProperties object
var scriptProperties = PropertiesService.getScriptProperties();

// Set some script properties
scriptProperties.setProperty('API_KEY', '123456789');
scriptProperties.setProperty('URL', 'https://www.example.com // Get some script properties
var apiKey = scriptProperties.getProperty('API_KEY');
var url = scriptProperties.getProperty('URL');

// Use the script properties in your code
var response = UrlFetchApp.fetch(url + '?key=' + apiKey);
var data = JSON.parse(response.getContentText());
