import React from "react";
import styled from "styled-components";


// 날씨정보 보드
const WeatherBoard = ({info}) => {
    const {name, main, weather} = info; // 해당 날씨데이터 객체정보 가져오기

    // 온도 섭씨온도로 변환
    const tempReal = Math.round((main.temp - 273.15) * 10) / 10;
    const tempMax = Math.round((main.temp_max - 273.15) * 10) / 10;
    const tempMin = Math.round((main.temp_min - 273.15) * 10) / 10;

    return (
        <BoardWrapper>
            <BoardMain> 
                <BoardInner>
                    <div className="city">{name}</div>
                    <div className="temp">{tempReal}℃</div>
                    <div className="sky">{weather[0].main}</div>
                    <div className="tempbox">
                        <div className="temp-max">최고 : {tempMax}℃</div>
                        <div className="temp-min">최저 : {tempMin}℃</div>
                    </div >
                </BoardInner>
            </BoardMain>
            <div className="board-list">
                <ul>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </BoardWrapper>
    )
}


export default WeatherBoard;

const BoardWrapper = styled.div`
    width: 100%;
    padding: 30px 0;
    position: absolute;
    top: 42%;
    left: 0px;
`;

const BoardMain = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    box-sizing: border-box;
    box-shadow: 1px 1px 4px #1c3879;
`;

const BoardInner = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
    .city {
        margin-top: 8px;
        font-size: 23px;
        color: #002B5B;
    }
    .temp {
        margin: 10px 0;
        font-size: 50px;
    }
    .sky {
        margin: 10px 0;
        font-size: 20px;
        color: #002B5B;
    }
    .tempbox {
        width: 50%;
        margin: 10px 0 ;
        display: inline-flex;
        justify-content: space-around;
        color: #002B5B;
        font-weight: 600;
    }
`;