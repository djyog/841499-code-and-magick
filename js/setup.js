'use strict';

var WIZARDS_NUMBER = 4;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandomDescription = function (arrayName) {
  var randomDescription = arrayName[Math.floor(Math.random() * arrayName.length)];
  return randomDescription;
};

var getNewWizard = function () {
  var wizards = [];
  for (var i = 0; i < WIZARDS_NUMBER; i++) {
    var wizardName = getRandomDescription(WIZARD_NAMES) + ' ' + getRandomDescription(WIZARD_SURNAMES);
    var wizardCoatColor = getRandomDescription(COAT_COLORS);
    var wizardEyesColor = getRandomDescription(EYES_COLORS);
    wizards.push({name: wizardName, coatColor: wizardCoatColor, eyesColor: wizardEyesColor});
  }
  return wizards;
};

getNewWizard();

var renderWizard = function (wizard) {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderNewWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');

  for (var j = 0; j < wizards.length; j++) {
    fragment.appendChild(renderWizard(wizards[j]));
  }
  similarListElement.appendChild(fragment);
};

renderNewWizards(getNewWizard());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
