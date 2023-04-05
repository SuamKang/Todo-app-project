import React, {useState} from "react";
import styled from "styled-components";
import WeatherHead from "../component/Weather/WeatherHead";
import WeatherInsert from "../component/Weather/WeatherInsert";
import axios from "axios";


// 간단한 날씨 viewer

const Weather = () => {

    const [inputCity, setInputCity] = useState(''); // 날씨지역 입력상태
    const onChange = (e) => {
        setInputCity(e.target.value)
    }

    // 날씨api요청
    const API_KEY = `1d79eee35f35f4c7affa821694dee19c`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${API_KEY}`; // 쿼리에 받아줄 도시 이름 상태값 지정

    // 날씨 api요청
    const searchWeather = async () => {
            try{
             const response = await axios.get(url); 
             console.log(response)
            } 
            catch(err){
                throw new Error('Cannot found response')
            }
    }


    return(
        <WeatherBlock>
            <WeatherHead/>
            <WeatherInsert inputCity={inputCity} onChange={onChange} onClick={searchWeather}/>
        </WeatherBlock>
    )
}


export default Weather;


const WeatherBlock = styled.div`
  width: 520px;
  height: 750px;
  position: relative; // todo 템플릿을 부모위치로 설정하기위해
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 2 5 rgba(0,0,0, .5);
  margin: 96px auto 32px;
  display: flex; 
  flex-direction: column;
`;