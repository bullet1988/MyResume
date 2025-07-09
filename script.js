body {
  margin: 0;
  padding: 0;
  background: url('ai-art-background.jpg') center/cover no-repeat;
  color: #e0e6ed;
  font-family: 'Segoe UI', Arial, sans-serif;
  position: relative;
  overflow: hidden;
}
::selection {
  background: #60e9ff;
  color: #181c24;
}

header {
  text-align: center;
  padding: 2rem 1rem;
  background-color: rgba(0,0,0,0.8);
  box-shadow: 0 2px 8px #000;
}

h1 {
  color: #60e9ff;
  font-size: 2.8rem;
  letter-spacing: 2px;
}

nav a {
  margin: 0 1rem;
  text-decoration: none;
  color: #ff4d4d;
  font-weight: bold;
  transition: color 0.3s ease;
}
nav a:hover {
  color: white;
}

main {
  max-width: 700px;
  margin: 2rem auto;
  background-color: rgba(24,28,36,0.9);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px #000;
}

.alert {
  background: #ffb347;
  color: #232a34;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 2rem;
  font-weight: bold;
}

.console, .chatbot {
  background: #10141a;
  border-left: 4px solid #60e9ff;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Fira Mono', monospace;
  margin-top: 2rem;
  overflow-x: auto;
}

#chatInput {
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;
  background: #181c24;
  border: none;
  color: #60e9ff;
  font-size: 1rem;
}

#matrix {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #60e9ff;
  font-size: 20px;
  pointer-events: none;
  z-index: -1;
}
