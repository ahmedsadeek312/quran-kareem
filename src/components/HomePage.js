import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import card_data from "../Data";
const HomePage = () => {
  // function handleAPI2() {
  //   fetch("https://api.alquran.cloud/v1/edition?format=audio") // audios ... correct
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data.data);
  //     });
  // }

  return (
    <>
      {card_data.map((el) => {
        return (
          <Card className="myCards" style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "8rem" }}
              variant="top"
              src={el.img_src}
            />
            <Card.Body>
              <Card.Title>{el.name_arabic}</Card.Title>
              <div>
                <Button
                  onClick={() => {
                    window.open(`${el.download_link}`);
                  }}
                  style={{ marginLeft: "10%", marginTop: "1rem" }}
                  variant="primary"
                >
                  تحميل
                </Button>
                <Link to={el.name_english}>
                  <Button style={{ marginTop: "1rem" }} variant="success">
                    إستماع
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        );
      })}
      {/* <button onClick={handleAPI2}>Api2</button> */}
    </>
  );
};

export default HomePage;
