// Encrypted secrets for clues
const secrets = {
base64_1: "UFBPUlRBTF9BQ0NFU1NfR1JBTlRFRA==", // PORTAL_ACCESS_GRANTED
caesar_7: "Aopz pz h zhfily av dvysk!", // This is a secret to world!
base64_2: "L2FkbWluP3VzZXI9YWRtaW4mcGFzcz1sZXRtZWlu" // /admin?user=admin&pass=letmein
};

// Console Easter Egg
window.addEventListener('DOMContentLoaded', () => {
window.decrypt = function() {
function caesarDecrypt(str, shift) {
return str.replace(/[A-Za-z]/g, function(c) {
let code = c.charCodeAt(0);
let base = (code >= 97) ? 97 : 65;
return String.fromCharCode(((code - base - shift + 26) % 26) + base);
});
}
document.getElementById('console').innerHTML +=
"\n> Decrypted Base64: " + atob(secrets.base64_1) +
"\n> Decrypted Caesar: " + caesarDecrypt(secrets.caesar_7, 7) +
"\n> Decrypted Path: " + atob(secrets.base64_2);
};
console.log("%cTry typing decrypt() in the console. Need help? Google 'Base64 decode' and 'Caesar cipher'.", "color:#60e9ff;font-size:1.1em;");
});

// Google Drive Picker
const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';
const API_KEY = 'YOUR_GOOGLE_API_KEY';
const APP_ID = 'YOUR_GOOGLE_APP_ID';
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly';

function onApiLoad() {
gapi.load('auth', {'callback': onAuthApiLoad});
gapi.load('picker');
}

function onAuthApiLoad() {
document.getElementById('driveBtn').onclick = function() {
window.gapi.auth.authorize(
{
'client_id': CLIENT_ID,
'scope': SCOPES,
'immediate': false
},
handleAuthResult
);
};
}

function handleAuthResult(authResult) {
if (authResult && !authResult.error) {
createPicker(authResult.access_token);
}
}

function createPicker(token) {
var picker = new google.picker.PickerBuilder()
.addView(google.picker.ViewId.DOCS)
.setOAuthToken(token)
.setDeveloperKey(API_KEY)
.setAppId(APP_ID)
.setCallback(function(data) {
if (data.action == google.picker.Action.PICKED) {
const file = data.docs[0];
document.getElementById('console').innerHTML +=
`\n> Picked file: ${file.name} (${file.url})`;
}
})
.build();
picker.setVisible(true);
}

// Load Google APIs
window.onload = function() {
if (window.gapi) onApiLoad();
};
