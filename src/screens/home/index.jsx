/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
// components
import Container from '../../components/container';
import Card from '../../components/card';
import Loader from '../../components/loader';
import ErrorScreen from '../errorScreen';
// helper
import {COLORS, FONTS} from '../../helper';
// redux
import {getNews} from '../../redux/api';
import {clearError} from '../../redux/slice/newsSlice';

const Home = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [input, setInput] = useState('');

  const latestNews = useSelector(state => state.newsReducer.latest);
  const errorMessage = useSelector(state => state.newsReducer.error);
  const loading = useSelector(state => state.newsReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (latestNews.length > 0) {
      setNews(latestNews);
    } else {
      fetchData();
    }
  }, [latestNews]);

  const fetchData = () => {
    handleClear();
    dispatch(clearError());
    dispatch(getNews({query: 'trending'}));
  };

  const onSubmitEditing = async () => {
    if (input.length > 0) {
      const response = await dispatch(getNews({query: input}));
      if (response.payload.status === 'ok') {
        setNews(response.payload.articles);
      }
    }
  };

  const handleClear = () => {
    setInput('');
    setNews(latestNews);
  };

  if (errorMessage) {
    return <ErrorScreen errorMessage={errorMessage} onRetry={fetchData} />;
  }

  return (
    <Container>
      <Loader visible={loading} />
      {/* ----- Search ----- */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search here..."
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={onSubmitEditing}
        />
        {input.length > 0 && (
          <TouchableOpacity style={styles.searchButton} onPress={handleClear}>
            <Ionicons name={'close-outline'} color={COLORS.black} size={22} />
          </TouchableOpacity>
        )}
      </View>
      <Card data={news} navigation={navigation} loading={loading} />
    </Container>
  );
};
export default Home;

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: '5%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    elevation: 10,
    marginVertical: '3%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '3%',
  },
  input: {
    flex: 1,
    fontFamily: FONTS.Regular,
    color: COLORS.black,
  },
  searchButton: {
    paddingLeft: '2%',
  },
});
