import React from 'react'
import { Button,Menu,Typography,Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined } from '@ant-design/icons'
import icon from '../Image/cryptocurrency.png'
const Navbar = () => {
  return (
   <div className="nav-container">
    <div className="logo-container">
        <Avatar src={icon} size='large'></Avatar>
        <Typography.Title level={2}>
            <Link to="/">Cryptoverse</Link>
        </Typography.Title>
    </div>
    <Menu theme='dark'>
        <Menu.Item icon={<HomeOutlined/>}>
            <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
            <Link to='/cryptocurrencies'>Cryptocurrenices</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to='/exchange'>Exchange</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
            <Link to='/news'>News</Link>
        </Menu.Item>
    </Menu>
   </div>
  )
}

export default Navbar