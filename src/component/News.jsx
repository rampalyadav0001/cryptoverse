import React from 'react';
import { Select, Typography, Avatar, Row, Col, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptonewsApi';
import { useEffect, useState } from 'react';
import Loader from './loder';

const { Text, Title } = Typography;

const demoImage = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT85_j5ufH9tJ7PW5i6W_CbxfFxm0MNXYgfue6CXGbH1kN0jHB3nUzRwgmejjRZkFniSOZ_A_76YRuDOpN91U5V';

const News = ({ simplified }) => {
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery();
  const [news, setNews] = useState(undefined);

  useEffect(() => {
    if (cryptoNews?.data) {
      setNews(cryptoNews.data);
    }
  }, [cryptoNews]);

  if (isFetching) return <Loader />;

  // Check if news is undefined before accessing its properties
  let displayNews = news;

  if (simplified && news !== undefined) {
    displayNews = news.slice(0, 10);
  }

  return (
    <Row gutter={[24, 24]}>
      {displayNews?.map((newsItem) => (
        <Col xs={24} sm={12} lg={8} key={newsItem.url}>
          <Card hoverable className="news-card">
            <a href={newsItem?.url} target="_blank" rel="noopener noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{newsItem?.title}</Title>
                <img style={{ width: '150px', height: '100px' }} src={newsItem?.thumbnail || demoImage} alt="image" />
              </div>
              <p>{newsItem?.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={newsItem?.thumbnail || demoImage} alt="news" />
                </div>
                <Text>{moment(newsItem?.createdAt).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
