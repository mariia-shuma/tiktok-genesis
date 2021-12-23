import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Row, Col } from 'antd';
import Feed from './components/Feed/Feed';
import UserInfo from './components/UserProfile/UserInfo';

const App = function App() {
  return (
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
  );
};
export default App;
