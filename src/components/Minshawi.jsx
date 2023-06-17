import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Minshawi = () => {
  const [ayat, setAyat] = useState([]);
  const [ayasrc, setAyaSrc] = useState([]);
  var [text, setText] = useState([" إضغط علي السورة للإستماع إليها"]);
  useEffect(() => {
    fetch("https://api.alquran.cloud/v1/quran/ar.minshawi")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.surahs);
        setAyat(data.data.surahs);
      });
  }, []);
  var i = 0;
  var [index, setIndex] = useState(i);
  return (
    <div className="container">
      <div className="player">
        <div className="ayah">{text[index]}</div>
        <audio
          src={ayasrc[index]}
          onEnded={() => {
            if (index < ayasrc.length) {
              return setIndex((index += 1));
            }
          }}
          className="quranPlayer"
          controls
          autoPlay
        ></audio>
        <div className="buttons">
          <Link to="/">
            <div className="icon home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              </svg>
            </div>
          </Link>
          <div className="icon play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
            </svg>
          </div>
          <div className="icon prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="surahs">
        <div className="sura">
          {ayat.map((aya, index) => (
            <div
              onClick={() => {
                setIndex(0);
                fetch(
                  `https://api.alquran.cloud/v1/surah/${index + 1}/ar.minshawi
                    `
                )
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(
                      data.data.ayahs.map((el) => {
                        return el.audio;
                      })
                    );
                    console.log(
                      data.data.ayahs.map((el) => {
                        return el.text;
                      })
                    );
                    setText(
                      data.data.ayahs.map((el) => {
                        return el.text;
                      })
                    );
                    setAyaSrc(
                      data.data.ayahs.map((el) => {
                        return el.audio;
                      })
                    );
                  });
              }}
              className="sura-lonely"
            >
              <p>{aya.name}</p>
              <p>{aya.englishName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Minshawi;
