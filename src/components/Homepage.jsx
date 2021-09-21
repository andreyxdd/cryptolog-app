import React from 'react'
import millify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const {Title} = Typography;

const  Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  
  const GlobalStats = data?.data?.stats;
  

  if(isFetching) return 'Loading...';

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={GlobalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exhcanges" value={millify(GlobalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(GlobalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(GlobalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(GlobalStats.totalMarkets)}/></Col>
      </Row>
    </>
  )
}

export default Homepage;
