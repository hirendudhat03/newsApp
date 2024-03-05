/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// component
import Loader from '../../components/loader';
import Container from '../../components/container';
import Card from '../../components/card';
import ErrorScreen from '../errorScreen';
// redux
import {getNews} from '../../redux/api';
import {clearError} from '../../redux/slice/newsSlice';

const Tech = ({navigation}) => {
  const [news, setNews] = useState([]);

  const techNews = useSelector(state => state.newsReducer.tech);
  const errorMessage = useSelector(state => state.newsReducer.error);
  const loading = useSelector(state => state.newsReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (techNews.length > 0) {
      setNews(techNews);
    } else {
      fetchData();
    }
  }, [techNews]);

  const fetchData = () => {
    dispatch(clearError());
    dispatch(getNews({query: 'tech'}));
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
export default Tech;
