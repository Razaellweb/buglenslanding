import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure initial theme is dark on first paint
const docEl = document.documentElement;
if (docEl.classList.contains('light-mode')) {
  docEl.classList.remove('light-mode');
}
docEl.classList.add('dark-mode');

createRoot(document.getElementById("root")!).render(<App />);
