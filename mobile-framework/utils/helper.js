const STEP_VARS = require('../../test_data/variables_localization/steps_variables.json');

function localizeStepVariable(string) {
  if (string.startsWith(`=>`)){
    string = string.substring(2);
    return STEP_VARS[string][browser.config.market] || STEP_VARS[string]['UK'];
  } else {
    return string;
  }
}

module.exports = {localizeStepVariable}