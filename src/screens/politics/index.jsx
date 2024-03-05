/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// components
import Container from '../../components/container';
import Loader from '../../components/loader';
import Card from '../../components/card';
import ErrorScreen from '../errorScreen';
// Redux
import {getNews} from '../../redux/api';
import {clearError} from '../../redux/slice/newsSlice';

const Politics = ({navigation}) => {
  const [news, setNews] = useState([]);

  const politicsNews = useSelector(state => state.newsReducer.politics);
  const errorMessage = useSelector(state => state.newsReducer.error);
  const loading = useSelector(state => state.newsReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (politicsNews.length > 0) {
      setNews(politicsNews);
    } else {
      fetchData();
    }
  }, [politicsNews]);

  const fetchData = () => {
    dispatch(clearError());
    dispatch(getNews({query: 'politics'}));
  };

  if (errorMessage) {
    return <ErrorScreen errorMessage={errorMessage} onRetry={fetchData} />;
  }

  return (
    <Container>
      <Loader visible={loading} />
      <Card data={news} navigation={navigation} loading={loading} />
    </Container>
  );
};
export default Politics;
