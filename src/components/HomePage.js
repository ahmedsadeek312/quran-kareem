import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
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
      {/* <button onClick={handleAPI2}>Api2</button> */}
      <div style={{ marginTop: "5%" }}>
        <h1>هذا الموقع هو صدقه جاريه علي روح الحاج أبومسلم</h1>
        <h3>لا تنسوه في دعائكم</h3>
      </div>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="https://www.hqogg.net/wp-content/uploads/2022/04/%D8%A3%D8%AD%D9%85%D8%AF_%D8%A7%D9%84%D8%B9%D8%AC%D9%85%D9%8A.jpg"
        />
        <Card.Body>
          <Card.Title>أحمد العجمي</Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia801901.us.archive.org/zip_dir.php?path=/29/items/jam3_11.zip&formats=VBR MP3"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/ahmedAlagmy">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "8rem" }}
          src="data:image/jpeg;base64,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"
        />
        <Card.Body>
          <Card.Title>مشاري راشد العفاسي</Card.Title>

          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia800500.us.archive.org/zip_dir.php?path=/20/items/fm_002_20150413_0654.zip&formats=VBR MP3"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/mosharyRashed">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.nquran.com/news_images/att18.jpg"
          style={{ height: "8rem" }}
        />
        <Card.Body>
          <Card.Title>عبدالباسط عبدالصمد</Card.Title>

          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia803100.us.archive.org/zip_dir.php?path=/30/items/ABDEL-BASIT.ABDEL-SAMAD.MUJAWAD.FULL.HQ.BY-MAHMOUD-ZIED.zip&formats=VBR MP3"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/Abdulbasit">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="data:image/jpeg;base64,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"
        />
        <Card.Body>
          <Card.Title>محمود خليل الحصرى</Card.Title>

          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia800201.us.archive.org/8/items/TvQuran.com__Al-HussaryZip/TvQuran.com__Al-Hussary.zip"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/husarymujawwad">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "8rem" }}
          src="https://www.arabpage.net/wp-content/uploads/2014/12/%D8%A7%D9%84%D8%B4%D9%8A%D8%AE-%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86-%D8%A7%D9%84%D8%B3%D8%AF%D9%8A%D8%B3.jpg"
        />
        <Card.Body>
          <Card.Title> عبدالرحمن السديس</Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia804700.us.archive.org/zip_dir.php?path=/29/items/sudais_2.zip&formats=VBR MP3"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/abdurrahmaansudais">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="data:image/jpeg;base64,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"
        />
        <Card.Body>
          <Card.Title> أبوبكر الشاطرى </Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia800208.us.archive.org/3/items/TvQuran.com__ShatriZip/TvQuran.com__Shatri.zip"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/shaatree">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHozX_sIkBbl-rLX8bfPZScfd2zhURbIo4Ew&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>علي بن عبدالرحمن الحذيفي</Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia600208.us.archive.org/9/items/TvQuran.com__Ali-AlhuthaifiZip/TvQuran.com__Ali-Alhuthaifi.zip"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/hudhaify">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpd6i7o565JBnWiP6yFrfUOl9jDMkNlMPF5Q&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>ماهر المعيقلي</Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia800307.us.archive.org/27/items/TvQuran.com__MaherZip/TvQuran.com__Maher.zip"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/mahermuaiqly">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="data:image/jpeg;base64,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"
        />
        <Card.Body>
          <Card.Title>محمد صديق المنشاوي</Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia800203.us.archive.org/28/items/TvQuran.com__Al-MinshawiZip/TvQuran.com__Al-Minshawi.zip"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/minshawi">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJfohgGRESOvFmik19jm3pUFyYnnUMQx_7w&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>محمد جبريل</Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia800204.us.archive.org/35/items/TvQuran.com__JibrelZip/TvQuran.com__Jibrel.zip"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/muhammadjibreel">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="myCards" style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "8rem" }}
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL4ih4kWdaKe6jtpNQ47GcRGXXqSI_aFsqH-zwOSPR7CfdWaP-x_Q2CKoBJnUoHqoFAg&usqp=CAU"
        />
        <Card.Body>
          <Card.Title>سعود الشريم</Card.Title>
          <div>
            <Button
              onClick={() => {
                window.open(
                  "https://ia800302.us.archive.org/22/items/TvQuran.com__Al-ShuraimZip/TvQuran.com__Al-Shuraim.zip"
                );
              }}
              style={{ marginLeft: "10%", marginTop: "1rem" }}
              variant="primary"
            >
              تحميل
            </Button>
            <Link to="/saoodshuraym">
              <Button style={{ marginTop: "1rem" }} variant="success">
                إستماع
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default HomePage;
