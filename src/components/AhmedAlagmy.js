import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AhmedAlagmy = () => {
  const [ayat, setAyat] = useState([]);
  const [ayasrc, setAyaSrc] = useState([]);
  var [text, setText] = useState([" إضغط علي السورة للإستماع إليها"]);
  useEffect(() => {
    fetch("https://quran-endpoint.vercel.app/quran")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setAyat(data.data);
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
        </div>
      </div>
      <div className="surahs">
        <div className="sura">
          {ayat.map((aya, index) => (
            <div
              onClick={() => {
                setIndex(0);
                fetch(`https://quran-endpoint.vercel.app/quran/${index + 1}`)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(
                      data.data.ayahs.map((el) => {
                        return el.audio.url;
                      })
                    );
                    console.log(
                      data.data.ayahs.map((el) => {
                        return el.text.ar;
                      })
                    );
                    setText(
                      data.data.ayahs.map((el) => {
                        return el.text.ar;
                      })
                    );
                    setAyaSrc(
                      data.data.ayahs.map((el) => {
                        return el.audio.url;
                      })
                    );
                  });
              }}
              className="sura-lonely"
            >
              <p>{aya.asma.ar.long}</p>
              <p>{aya.asma.en.short}</p>
              <svg
                onClick={() => {
                  fetch(`https://quran-endpoint.vercel.app/quran/${index + 1}`)
                    .then((response) => response.json())
                    .then((data) => {
                      console.log(data.data.recitation.full);
                      window.open(data.data.recitation.full);
                    });
                }}
                className="download icon"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AhmedAlagmy;
