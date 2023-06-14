/// <reference types='cypress-xpath' />

import "cypress-xpath/src/index";

export class MonitorPage {
  // * Elements

  getMonitores = () => cy.get("[class='hrefch']");

  // * Methods
  selectRandomMonitor() {
    let number = Math.floor(Math.random() * 6); //with this fuction we select all the items (monitors)
    this.getMonitores().eq(number).click(); // and with the command .eq(randomNumber) we select a random one
  }
}
