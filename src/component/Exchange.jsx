import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoexchangeApi';
import Loader from './loder';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  console.log(data);
  const exchangesList = data;
  // Note: To access this endpoint you need premium plan
  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>24h Trade Volume Normalized</Col>
        <Col span={6}>Trust Score</Col>
      </Row>

      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>
                      </Text>
                      <Avatar className='exchange-image' src={exchange.image} />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>
                      ${millify(exchange.trade_volume_24h_btc)}
                    </Col>
                    <Col span={6}>
                      {millify(exchange.trade_volume_24h_btc_normalized)}
                    </Col>
                    <Col span={6}>{millify(exchange.trust_score)}</Col>
                  </Row>
                }
              >
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <p style={{ display: 'flex' }}>
                    <h4>Country</h4>={exchange.country}
                  </p>
                  <p style={{ display: 'flex' }}>
                    <h4>Year Established</h4>={exchange.year_established}
                  </p>
                </div>
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
