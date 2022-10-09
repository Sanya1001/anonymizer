function giveToken(e) {
var form = FormApp.openById('form-id');
const token = form.getResponses().length;

const recipient = e.response.getRespondentEmail();
const subject = "Token";
const body = 'Dear Participant,\n\nThank you for participating in our project! Your token is '+ token.toString() + '. This will be used to communicate your resultant object back to you. This is an automated response.'
                                                                                                                                      
GmailApp.sendEmail(recipient, subject, body);

}
