import React, { useState,useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/Cryptoapi'
import Loader from './loder'
const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100;
    const {data:cryptosList,isFetching}=useGetCryptosQuery(count);
    const [cryptos,setCryptos]=useState([]);
    const [SearchItem, setSearchItem] = useState(``);
    useEffect(() => {
        // setCryptos(cryptosList?.data?.coins);
        const filteredData=cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(SearchItem.toLowerCase()));
        setCryptos(filteredData);
      }, [cryptosList,SearchItem]);
    // console.log(cryptos);
    if(isFetching)return <Loader/>;
  return (
   <>
   {!simplified&&(<div className="search-crypto">
    <Input placeholder='Search Cryptocurrency' onChange={(e)=>setSearchItem(e.target.value)}></Input>
   </div>)}
   <Row gutter={[32,32]} className="crypto-card-cointainer">
    {
        cryptos?.map((currency)=>(
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}
            >
                <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                < Card title={`${currency.rank}.${currency.name}`} 
                extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
                
                
                > 
               <p>Price:{millify(currency.price)}</p>
               <p>Market Cap:{millify(currency.marketCap)}</p>
               <p>Daily Change:{millify(currency.change)}</p>
              
                </Card>
                
                </Link>
            </Col>
        ))
    }
   </Row>
   
   
   </>
  )
}

export default Cryptocurrencies