import React from 'react';
import "./Homecarouselonecss.css";

export default function Homecarouselone(props) {
  return (
    <>
      <div className="container-flow fluid" style={{ paddingTop: "50px" }}>
        {/* <h1 style={{marginTop:"50px"}}>hi my name is anshuman shah</h1> */}
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-4" style={{ paddingLeft: "70px" }}>
                  <h3>First paragraph</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem consequuntur! Quaerat, minus earum. Nesciunt optio nisi nulla nam non velit, totam dolor excepturi, molestias quo eveniet assumenda corrupti nobis veritatis omnis quos facilis.</p>
                  <br /><br />
                  <div class="card" style={{width: "18rem"}}>
                    <img src="..." class="card-img-top" alt="Not Found" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <div class="card-body">
                        <a href="#" class="btn btn-primary" style={{marginRight:"5px"}}>Card link</a>
                        <a href="#" class="btn btn-info">Another link</a>
                      </div>
                  </div>
                </div>

                <div className="col-sm-8">
                  <img src={process.env.PUBLIC_URL + '/deviceimg1.jpg'} className="d-block w-100" alt="not found" style={{ height: "620px", width: "380px" }} />
                </div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p id="imgdesc1">Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-4" style={{ paddingLeft: "80px" }}>
                  <h3>Second paragraph</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem consequuntur! Quaerat, minus earum. Nesciunt optio nisi nulla nam non velit, totam dolor excepturi, molestias quo eveniet assumenda corrupti nobis veritatis omnis quos facilis.</p>
                  <br /><br />
                  <div class="card" style={{width: "18rem"}}>
                    <img src="..." class="card-img-top" alt="Not Found" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <div class="card-body">
                        <a href="#" class="btn btn-primary" style={{marginRight:"5px"}}>Card link</a>
                        <a href="#" class="btn btn-info">Another link</a>
                      </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <img src={process.env.PUBLIC_URL + '/deviceimg2.jpg'} className="d-block w-100" alt="not found" style={{ height: "550px", width: "380px" }} />
                </div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p id="imgdesc2">Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-4" style={{ paddingLeft: "80px" }}>
                  <h3>Third paragraph</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, exercitationem consequuntur! Quaerat, minus earum. Nesciunt optio nisi nulla nam non velit, totam dolor excepturi, molestias quo eveniet assumenda corrupti nobis veritatis omnis quos facilis.</p>
                  <br /><br />
                  <div class="card" style={{width: "18rem"}}>
                    <img src="..." class="card-img-top" alt="Not Found" />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      </div>
                      <div class="card-body">
                        <a href="#" class="btn btn-primary" style={{marginRight:"5px"}}>Card link</a>
                        <a href="#" class="btn btn-info">Another link</a>
                      </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <img src={process.env.PUBLIC_URL + '/deviceimg3.jpg'} className="d-block w-100" alt="not found" style={{ height: "575px", width: "380px" }} />
                </div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p id="imgdesc3">Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
