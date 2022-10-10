function showDialog() {
  console.log('Executing');
  var form = FormApp.openById('form-id');
  msg = form.getConfirmationMessage();
  const token = form.getResponses().length +1;
  msg = 'Thank you filling out this survey! Your token is '+ String(token)+ '. Please remember to screenshot this to claim your merch if this token wins.';
  form.setConfirmationMessage(msg);
}
