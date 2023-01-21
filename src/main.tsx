import React from 'react'
import ReactDOM from 'react-dom/client'
import { AmplifyProvider } from '@aws-amplify/ui-react';
import App from './App';
import './index.css';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AmplifyProvider>
       < App />
    </AmplifyProvider>,
)
