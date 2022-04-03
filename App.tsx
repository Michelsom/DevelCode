import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import {AppRoutes} from './src/routes/app.routes';

export default function App() {
  
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
