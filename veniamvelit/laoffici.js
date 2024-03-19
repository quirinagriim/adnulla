// Get the contract address from a script property
const scriptProperties = PropertiesService.getScriptProperties();
const contractAddress = scriptProperties.getProperty('ADDRESS');
if (contractAddress) {
  // Do something with the contract address
} else {
  // Handle the case when the script property is missing
}
