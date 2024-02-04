import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './component/Navbar';
import Homepage from './component/Homepage';
import Exchange from './component/Exchange';
import Cryptocurrencies from './component/Cryptocurrencies';
import CryptoDetails from './component/CryptoDetails';
import News from './component/News';
import './App.css';
const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar></Navbar>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />}></Route>
              <Route exact path='/exchange' element={<Exchange />}></Route>
              <Route
                exact
                path='/cryptocurrencies'
                element={<Cryptocurrencies />}
              ></Route>
              <Route
                exact
                path='/crypto/:coinId'
                element={<CryptoDetails />}
              ></Route>
              <Route exact path='/news' element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title
            level={5}
            style={{ color: 'white', textAlign: 'center' }}
          >
            Cryptoverse <br />
            All Right Reserved
          </Typography.Title>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchange'>Exchange</Link>
            <Link to='/news'>News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
