function main() {
  var ui = DocumentApp.getUi();
  var email = ui.prompt("enter email: ");
  var g = DocumentApp.getActiveDocument();
  g.addEditor(email.getResponseText());
  MailApp.sendEmail({
    to: email.getResponseText(),
    subject: "document take over",
    htmlBody: "here is the link:" +
        g.getUrl(),
  });
}
