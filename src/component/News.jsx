import React from 'react';
import { Select, Typography, Avatar, Row, Col, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptonewsApi';
import { useEffect,useState } from 'react';
import Loder from './loder'
const { Text, Title } = Typography;
const { Option } = Select;
const demoImage = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT85_j5ufH9tJ7PW5i6W_CbxfFxm0MNXYgfue6CXGbH1kN0jHB3nUzRwgmejjRZkFniSOZ_A_76YRuDOpN91U5V'
const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency'});
 const  [News, setNews] = useState();
useEffect(()=>{
setNews(cryptoNews);

},[cryptoNews])
  // if (!News?.value) return <Loder/>;
  console.log(News);
  return (
    // <>
    // NEWS
    // </>
    <Row gutter={[24, 24]}>
  {News?.items?.map((news) => (
    <Col xs={24} sm={12} lg={8} key={news.url}>
      <Card hoverable className="news-card">
        <a href={news?.newsUrl} target="_blank" rel="noopener noreferrer">
          <div className="news-image-container">
            <Title className="news-title" level={4}>{news?.title}</Title>
            <img src={news?.images[0].thumbnail} alt="image" />
          </div>
          <p>{news?.snippet}</p>
          <div className="provider-container">
            <div>
              <Avatar src={news?.images?.thumbnail[0] || demoImage} alt="news" />
              <Text className="provider-name">{news?.publisher}</Text>
            </div>
            
          </div>
        </a>
      </Card>
    </Col>
  ))}
</Row>

  );
};

export default News;
