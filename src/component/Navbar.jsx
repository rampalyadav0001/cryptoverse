import { React, useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../Image/cryptocurrency.png';

const { Title } = Typography;

const Navbar = () => {
    const location = useLocation(); // This hook gives access to the current URL location
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    // Determine the selected menu item based on the current URL
    const selectedMenuItem = location.pathname;

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size='large'></Avatar>
                <Title level={2}>
                    <Link to="/">Cryptoverse</Link>
                </Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && ( // Render the menu only if activeMenu is true
                <Menu theme='dark' selectedKeys={[selectedMenuItem]} mode="inline">
                    <Menu.Item key="/" icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item key="/cryptocurrencies" icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item key="/exchange" icon={<MoneyCollectOutlined />}>
                        <Link to='/exchange'>Exchange</Link>
                    </Menu.Item>
                    <Menu.Item key="/news" icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    );
};

export default Navbar;
