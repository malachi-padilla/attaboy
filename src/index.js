import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import { GlobalStyles } from './GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Routes>
					<Route path='/' element={<App />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
