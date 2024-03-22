import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      
        <App />
  
    </BrowserRouter>

);