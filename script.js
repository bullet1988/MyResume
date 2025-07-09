const secrets = {
  base64_1: "UFBPUlRBTF9BQ0NFU1NfR1JBTlRFRA==", // PORTAL_ACCESS_GRANTED
  caesar_7: "Aopz pz h zhfily av dvysk!", // This is a secret to world!
  base64_2: "L2FkbWluP3VzZXI9YWRtaW4mcGFzcz1sZXRtZWlu" // /admin?user=admin&pass=letmein
};

window.decrypt = function() {
  function caesarDecrypt(str, shift) {
    return str.replace(/[A-Za-z]/g, c => {
      let base = c.charCodeAt(0) >= 97 ? 97 : 65;
      return String.fromCharCode(((c.charCodeAt(0) - base - shift + 26) % 26) + base);
    });
  }
  document.getElementById('console').innerHTML += `
  <br>> Base64 Decrypted: ${atob(secrets.base64_1)}
  <br>> Caesar Decrypted: ${caesarDecrypt(secrets.caesar_7, 7)}
  <br>> Admin Path: ${atob(secrets.base64_2)}
  `;
};

const responses = {
  hello: "Hey Analyst. You're cleared for recon.",
  decrypt: "Try running decrypt(). Base64 and Caesar are key.",
  help: "Scan logs, check headers, and look behind the curtain."
};

document.getElementById('chatInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    const input = e.target.value.toLowerCase();
    const reply = responses[input] || "🤖 SentinelX doesn’t understand that yet.";
    document.getElementById('chatlog').innerHTML += `<div>> ${input}</div><div>< ${reply}</div>`;
    e.target.value = '';
  }
});
