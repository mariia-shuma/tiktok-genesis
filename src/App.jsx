import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import { Row, Col } from 'antd';

import { ThemeProvider } from 'styled-components';

import Feed from './components/Feed/Feed';
import UserInfo from './components/UserProfile/UserInfo';

import { darkTheme, lightTheme } from './api/themes/Theme';
import GlobalStyles from './api/themes/globalStyles';
import useDarkMode from './api/themes/useDarkmode';
import Toggle from './api/themes/Toggle';

const App = function App() {
  const [theme, themeToggler] = useDarkMode();
  // const themeToggler = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Toggle theme={theme} toggleTheme={themeToggler} />
      <Row type="flex" justify="center">
        <Col>
          <BrowserRouter>
            <Routes>
              <Route path="/feed" element={<Feed />} />
              <Route path="/userProfile/:name" element={<UserInfo />} />
            </Routes>
          </BrowserRouter>
        </Col>
      </Row>
    </ThemeProvider>
  );
};
export default App;
