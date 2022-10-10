# Google Form Anonymizer with Unique Token Generation

### Part 1 (code.gs)
- You have to enable collect email addresses on this one.
- It will email the token number to the respondent's email.
- Go to the connected spreadsheet and create a new one without the email column.
- Hide original sheet to ensure anonymity of process.

### Part 2 (Code2.gs)
- This is token generation without collecting emails.
- This is the updated version which is completely anonymous.
- Have respondents screenshot the confirmation message to keep proof of their token.
- Drawback: It is **completely** anonymous so if respondents forget the token, there is no way for the developer to track/ determine.

### Features:
Apps Scripts does not let us manipulate the UI of a form after submission. It also only works in edit-only mode, which makes it difficult to dynamically update the form during viewing. This project bypasses the drawback and updates the confirmation message in edit-only mode which affects the next viewing of the form everytime it is submitted.
