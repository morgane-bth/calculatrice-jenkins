const { Builder, By } = require('selenium-webdriver');

async function test_addition() {
  //Crée une nouvelle instance du navigateur Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //On accede au site local
    await driver.get('http://localhost:8081');

    //trouver les champs du formulaire
    let number1Field = await driver.findElement(By.id('number1'));
    let number2Field = await driver.findElement(By.id('number2'));
    let calculateButton = await driver.findElement(By.id('calculate'));

    //Test Addition
    //entrer des valeurs
    await number1Field.sendKeys(10);
    await number2Field.sendKeys(5);

    //Choix de l'operation, ici addition 
    let addOption = await driver.findElement(By.css('option[value="add"]'));
    await addOption.click();

    //soumettre le formulaire
    await calculateButton.click();

    //Vérifier le resultat de l'addition
    let resultElement = await driver.findElement(By.id('result-number'));
    let resultText = await resultElement.getText();
    console.log(resultText);

    //Conversion du texte en entier
    let resultInt = parseInt(resultText, 10);

    //Vérifier le résulat attendu
    if (resultInt === 15) {
      console.log('Test Addition : Réussi !');
      console.log('Le resultat attendu est : ' + resultInt);
    } else {
      console.log('Test échoué.')
      console.log('Le resultat attendu est : ' + resultInt);
    }


  } finally {
    //Ferme le navigateur
    await driver.quit();
  }
}

async function test_soustraction() {
  //Crée une nouvelle instance du navigateur Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //On accede au site local
    await driver.get('http://localhost:8081');

    //trouver les champs du formulaire
    let number1Field = await driver.findElement(By.id('number1'));
    let number2Field = await driver.findElement(By.id('number2'));
    let calculateButton = await driver.findElement(By.id('calculate'));

    //Test Soustraction
    //entrer des valeurs
    await number1Field.sendKeys(50);
    await number2Field.sendKeys(30);

    //Choix de l'operation, ici soustraction 
    let subtractOption = await driver.findElement(By.css('option[value="subtract"]'));
    await subtractOption.click();

    //soumettre le formulaire
    await calculateButton.click();

    //Vérifier le resultat de la soustraction
    let resultElement = await driver.findElement(By.id('result-number'));
    let resultText = await resultElement.getText();
    console.log(resultText);

    //Conversion du texte en entier
    let resultInt = parseInt(resultText, 10);

    //Vérifier le résulat attendu
    if (resultInt === 20) {
      console.log('Test Soustraction : Réussi !');
      console.log('Le resultat attendu est : ' + resultInt);
    } else {
      console.log('Test échoué.')
      console.log('Le resultat attendu est : ' + resultInt);
    }


  } finally {
    //Ferme le navigateur
    await driver.quit();
  }
}

async function test_division_par_zero() {
  //Crée une nouvelle instance du navigateur Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //On accede au site local
    await driver.get('http://localhost:8081');

    //trouver les champs du formulaire
    let number1Field = await driver.findElement(By.id('number1'));
    let number2Field = await driver.findElement(By.id('number2'));
    let calculateButton = await driver.findElement(By.id('calculate'));

    //Test Division
    //entrer des valeurs
    await number1Field.sendKeys(10);
    await number2Field.sendKeys(0);

    //Choix de l'operation, ici division 
    let divideOption = await driver.findElement(By.css('option[value="divide"]'));
    await divideOption.click();

    //soumettre le formulaire
    await calculateButton.click();

    //Vérifier le resultat de la soustraction
    let resultElement = await driver.findElement(By.id('result-number'));
    let resultText = await resultElement.getText();
    console.log(resultText);

    //Conversion du texte en entier
    // let resultInt = parseInt(resultText, 10);

    //Vérifier le résulat attendu
    if (resultText === 'Division par zéro impossible.') {
      console.log('Test Division par zéro : Réussi !');
      console.log('Le resultat attendu est : ' + resultText);
    } else {
      console.log('Test échoué.')
      console.log('Le resultat attendu est : ' + resultText);
    }


  } finally {
    //Ferme le navigateur
    await driver.quit();
  }
}

async function test_entree_non_valide() {
  //Crée une nouvelle instance du navigateur Chrome
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    //On accede au site local
    await driver.get('http://localhost:8081');

    //trouver les champs du formulaire
    let number1Field = await driver.findElement(By.id('number1'));
    let number2Field = await driver.findElement(By.id('number2'));
    let calculateButton = await driver.findElement(By.id('calculate'));

    //Test Division
    //entrer des valeurs
    await number1Field.sendKeys('');
    await number2Field.sendKeys(2);

    //Choix de l'operation, ici multiplication 
    let multiplyOption = await driver.findElement(By.css('option[value="multiply"]'));
    await multiplyOption.click();

    //soumettre le formulaire
    await calculateButton.click();

    //Vérifier le resultat de la soustraction
    let resultElement = await driver.findElement(By.id('result-number'));
    let resultText = await resultElement.getText();
    console.log(resultText);

    //Conversion du texte en entier
    // let resultInt = parseInt(resultText, 10);

    //Vérifier le résulat attendu
    if (resultText === 'Veuillez entrer des nombres valides.') {
      console.log('Test Entrée non valide : Réussi !');
      console.log('Le resultat attendu est : ' + resultText);
    } else {
      console.log('Test échoué.')
      console.log('Le resultat attendu est : ' + resultText);
    }


  } finally {
    //Ferme le navigateur
    await driver.quit();
  }
}


(async function test() {

  //Appel des fonctions
  await test_addition();
  await test_soustraction();
  await test_division_par_zero();
  await test_entree_non_valide();
})();