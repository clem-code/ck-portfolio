import './App.css';
import { Jumbotron, Carousel, Image, Container, Col, Row, Media, Nav, Navbar, Figure, Modal, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [modalSRC, updateModalSRC] = useState('');
  const [modalTag, updateModalTag] = useState('');

  function handleClose() {
    setShow(false);
  }
  function handleShow(event) {
    setShow(true);
    updateModalTag(event.target.id)
    updateModalSRC(event.target.src)
  }



  const carouselStyle1 = {
    background: "black", border: "solid 30px black", fontFamily: "Chivo", color: "white", textAlign: "left", fontSize: "18px"
  }
  const navbar = { color: "#105C99", fontFamily: "Inconsolata", fontSize: "18px" }


  return (
    <div className="App">
      <Navbar bg="light" expand="md" sticky="top" >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#aboutCarousel" style={navbar}>About</Nav.Link>
            <Nav.Link href="#skillsHead" style={navbar}>Skills</Nav.Link>
            <Nav.Link href="#portfolioCarousel" style={navbar}>Portfolio</Nav.Link>
            <Nav.Link href="#contact" style={navbar}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron fluid id='hero'>
        <h1 id='word1' className='heroText'>Clement</h1><h1 id='word2' className='heroText'>Knox</h1><h1 className='subtitle'>Software Engineer</h1>
      </Jumbotron>
      <Container fluid className='carouselContainer' id="aboutCarousel">
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Carousel fluid controls={false} >
              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container className='carouselContainer' fluid>
                  <Row >
                    <Col>
                      <Media>
                        <Image src='https://i.imgur.com/Ob5KoGZ.jpg' roundedCircle className='carouselImage align-self-center'></Image>
                      </Media>
                    </Col>
                    <Col>
                      <p className="carouselText">I’m a fullstack developer, with experience in JavaScript, React, Python and Flask and familiar with Agile and Kanban methodologies. After spending my twenties working in publishing, I recently graduated from General Assembly’s twelve-week Software Engineering Intensive course in London and before that I completed a shorter course at CodeNation. Software development satisfies my love of building things and tackling complex problems incrementally. </p>
                    </Col>
                  </Row>
                </Container>
                <Carousel.Caption>
                  <h3 className="carouselText caption">About</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container>
                  <Row>
                    <Col><p className="carouselText"> I’m also a writer and photographer, and I’m passionate about using storytelling and design to create immersive and enjoyable user experiences. Outside of work I like travelling and learning languages. My French is pretty good and I took Japanese to A-Level. Currently I’m teaching myself Italian!</p></Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image id='Himare / Albania / 2019' onClick={handleShow} src='https://i.imgur.com/DYp886U.jpg' thumbnail className='carouselImage' />
                      <p className="carouselText">Click Image To Expand</p>
                    </Col>
                    <Col>
                      <Image id='Naples / Italy / 2019' onClick={handleShow} src='https://i.imgur.com/1LfJTaZ.jpg' thumbnail className='carouselImage' />
                      <p className="carouselText">Click Image To Expand</p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container>
                  <Row>
                    <Col></Col>
                    <Col className="d-flex justify-content-center">
                      <Image src='https://i.imgur.com/KjlEnzX.jpg' rounded className='carouselImage' />
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col></Col>
                    <Col xs={10}><p className="carouselText" style={{ textAlign: "center" }}>I worked in publishing for many years and met some big characters!<br /><br />Meeting writers and famous people was a cool part of my job.</p></Col>
                    <Col></Col>
                  </Row>
                </Container>
              </Carousel.Item >
              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container>
                  <Row>
                    <Col><p className="carouselText">Along the way I also published a book myself...<br /><br />Writing led me to coding. The two are very similar: they both require a lot of forethought, patience, and attention to detail. <br /><br />Debugging code is easier than debugging a 160,000 word book though! <br /> <br />You can hear me talk about my book to the <i>New York Times</i> <a href="https://www.nytimes.com/2020/02/14/books/review/podcast-seduction-clement-knox-delicacy-group-text-liz-egan.html">here</a> and can learn more about it <a href="https://www.newstatesman.com/strange-antics-seduction-clement-knox-curious-history-sex-kate-lister-review">here</a>, <a href="https://www.thetimes.co.uk/article/strange-antics-by-clement-knox-review-seduction-qw0sxm9fj">here</a>, and <a href="https://www.amazon.co.uk/Strange-Antics-Seduction-Clement-Knox-ebook/dp/B07TZXHFFH/ref=sr_1_2?dchild=1&keywords=clement+knox&qid=1616439636&sr=8-2">here</a>!</p></Col>
                    <Col className="d-flex justify-content-center">

                      <Image src='https://i.imgur.com/Yj21x5o.jpg' rounded className='carouselImage' />
                    </Col>
                  </Row>
                </Container>
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} id='modal'>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: 'Inconsolata' }}>{`${modalTag}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image id='modalIMG' src={`${modalSRC}`} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" style={{ fontFamily: 'Inconsolata' }} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Jumbotron>
        <Row>
          <Col></Col>
          <Col>
            <p className='Blazing' id="skillsHead">Skills</p><br />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <p className='skillsText'><span className="spanSkills">Frontend:</span> React, JavaScript, HTML, CSS, Bulma, Sass, Semantic UI React, Bootstrap<br />
              <span className="spanSkills">Backend:</span> MongoDB, Mongoose, Express, Python, Flask, Node.js, SQLAlchemy<br />
              <span className="spanSkills">Testing:</span > Jest, Mocha, Chai, Supertest<br />
              <span className="spanSkills">Other:</span> RESTful APIs, Webpack, Github, version control, pair-programming, authentications and permissions<br />
              <span className="spanSkills">Public speaking:</span> in previous roles I’ve had to deal with press queries, give media interviews, and speak at company meets and industry gatherings.<br />
              <span className="spanSkills">Languages:</span> intermediate French, beginner Italian<br />
              <span className="spanSkills">What's next:</span> TypeScript, Unit-Testing, Data Visualization</p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6} id='iconBank'>
            <Row className="justify-content-between">
              <Figure><Figure.Image className="techIcon" src="https://img.icons8.com/ios-filled/100/000000/javascript.png" /> <Figure.Caption className=" ">JavaScript</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://img.icons8.com/cute-clipart/128/000000/react-native.png" /> <Figure.Caption className=" ">React</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://img.icons8.com/color/96/000000/html-5.png" /> <Figure.Caption className=" ">HTML</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://img.icons8.com/color/96/000000/python.png" /> <Figure.Caption className=" ">Python</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://img.icons8.com/nolan/96/heroku.png" /> <Figure.Caption className=" ">Heroku</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://www.clipartkey.com/mpngs/m/145-1450089_python-flask-icon.png" /> <Figure.Caption className=" ">Flask</Figure.Caption></Figure>
            </Row>
            <Row className="justify-content-between">
              <Figure><Figure.Image className="techIcon" src="https://webpack.js.org/icon-square-small-slack.9281492bb267314634b4.png" /> <Figure.Caption className=" ">Webpack</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://cdn.iconscout.com/icon/free/png-256/sass-2752078-2284895.png" /> <Figure.Caption className=" ">SASS</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://www.chiapakmun.com/static/media/reactbootstrap.f65a1f54.png" /> <Figure.Caption className=" ">Bootstrap</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://img.icons8.com/color/96/000000/css3.png" /> <Figure.Caption className=" ">CSS</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://img.icons8.com/color/96/000000/postgreesql.png" /> <Figure.Caption className=" ">PostGreSQL</Figure.Caption></Figure><Figure><Figure.Image className="techIcon" src="https://react.semantic-ui.com/logo.png" /> <Figure.Caption className=" ">Semantic UI React</Figure.Caption></Figure>
            </Row>
            <Row className="justify-content-between">
              <Figure><Figure.Image className="techIcon" src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" /> <Figure.Caption className=" ">MongoDB</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" /> <Figure.Caption className=" ">Github</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://devskiller.com/wp-content/plugins/devskiller-catalog/assets/images/dvsk-skill-mocha.8fa6217e.png" /> <Figure.Caption className=" ">Mocha</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://seeklogo.com/images/J/jest-logo-F9901EBBF7-seeklogo.com.png" /> <Figure.Caption className=" ">Jest</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://miro.medium.com/max/808/1*-rRVJ7pa3DUFN4Bul4e_CA.png" /> <Figure.Caption className=" ">Bulma</Figure.Caption></Figure>
              <Figure><Figure.Image className="techIcon" src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" /> <Figure.Caption className=" ">NodeJS</Figure.Caption></Figure>
            </Row></Col>
          <Col></Col>
        </Row>
      </Jumbotron>

      <Container className='carouselContainer' >
        <Row>
          <Col></Col>
          <Col xs={10}>
            <Carousel id="portfolioCarousel" fluid controls={false}>
              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container className='carouselContainer' fluid>
                  <Row >
                    <Col className="caption">
                      <Media className="carouselImage" >
                        <video autoPlay controls style={{ maxHeight: "250px" }}>
                          <source src="https://i.imgur.com/xh3gJ9e.mp4" type="video/mp4" />
                        </video>
                      </Media>
                    </Col>
                    <Col>
                      <p className="carouselText">Given one week to build a grid-based game using vanilla JavaScript, HTML, and CSS, I built Hunt For the Red October. Adapted from the arcade classic Pacman, this submarine-themed game was a brilliant way to get familiar with the fundamentals of JavaScript. I was particularly pleased to be able to program the enemy submarines to be able to hunt Pacman using a sonar system I developed all by myself!</p>
                    </Col>
                  </Row>
                </Container>
                <Carousel.Caption>
                  <h3 className="carouselText ">Project 1: Hunt For The Red October</h3>
                  <h5 className="carouselText"><a rel="noreferrer" target="_blank" href="https://github.com/clem-code/project-1/blob/main/README.md">README</a></h5>
                  <h5 className="carouselText">Deployed <a rel="noreferrer" target="_blank" href="https://clem-code.github.io/project-1/">here</a></h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container className='carouselContainer' fluid>
                  <Row >
                    <Col className="caption">
                      <Media className="carouselImage">
                        <video autoPlay controls style={{ maxHeight: "250px" }}>
                          <source src="https://i.imgur.com/wuooNKb.mp4" type="video/mp4" />
                        </video>
                      </Media>
                    </Col>
                    <Col>
                      <p className="carouselText">Code_Poetry was a voluntary, weekend-long solo project. This was my very first-time working alone using React and APIs. I made a small app that allowed the user to set randomly generated poems from the PoetryDB API against art selected from the V&A API to make unique cards that could be downloaded courtesy of the HTML2Canvas library I found after some research online!</p>
                    </Col>
                  </Row>
                </Container>
                <Carousel.Caption>
                  <h3 className="carouselText ">Project 1.5: Code_Poetry</h3>
                  <h5 className="carouselText"><a rel="noreferrer" target="_blank" href="https://github.com/clem-code/project-1.5/blob/main/README.md">README</a></h5>
                  <h5 className="carouselText">Deployed <a rel="noreferrer" target="_blank" href="https://clem-code.github.io/project-1.5/">here</a></h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container className='carouselContainer' fluid>
                  <Row >
                    <Col className="caption">
                      <Media className="carouselImage">
                        <video autoPlay controls style={{ maxHeight: "250px" }}>
                          <source src="https://i.imgur.com/3d20hyh.mp4" type="video/mp4" />
                        </video>
                      </Media>
                    </Col>
                    <Col>
                      <p className="carouselText">Joe and I were given 48 hours to build a SPA of our choice using one or more third-party APIs with the added condition that we had to pair-program the whole thing! With him in Sussex and me in London, we planned, researched, and implemented a simple, clean app which let users search for films. Film_Finder was built using React, React Router, SASS, Bulma, and the FilmDB and New York Times APIs.</p>
                    </Col>
                  </Row>
                </Container>
                <Carousel.Caption>
                  <h3 className="carouselText ">Project 2: Film_Finder</h3>
                  <h5 className="carouselText"><a rel="noreferrer" target="_blank" href="https://github.com/clem-code/project-2#readme">README</a></h5>
                  <h5 className="carouselText">Deployed <a rel="noreferrer" target="_blank" href="https://clem-code.github.io/project-2/">here</a></h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container className='carouselContainer' fluid>
                  <Row >
                    <Col className="caption">
                      <Media className="carouselImage">
                        <video autoPlay controls style={{ maxHeight: "250px" }}>
                          <source src="https://i.imgur.com/VL2i6xM.mp4" type="video/mp4" />
                        </video>
                      </Media>
                    </Col>
                    <Col>
                      <p className="carouselText">Stepladder was my first full-stack, fully-tested project deployed on Heroku. Using a MERN stack, we built a clone of Glassdoor in a week building our own back-end which powered a front-end that allowed job-hunters to browse for jobs and review companies and recruiters to list companies and post jobs. In the process we learnt a lot about permission and authentications and got some experience using BCrypt and JSON Web Tokens. I built the map page, the all jobs and the individual job pages and wrote the entire suite of tests using Mocha, Chai, and Supertest.</p>
                    </Col>
                  </Row>
                </Container>
                <Carousel.Caption>
                  <h3 className="carouselText ">Project 3: Stepladder</h3>
                  <h5 className="carouselText"><a rel="noreferrer" target="_blank" href="https://github.com/clem-code/project-3/blob/main/README.md">README</a></h5>
                  <h5 className="carouselText">Deployed <a rel="noreferrer" target="_blank" href="https://stepladder2021.herokuapp.com/">here</a></h5>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className='carouselItem' style={carouselStyle1}>
                <Container className='carouselContainer' fluid>
                  <Row >
                    <Col className="caption">
                      <Media className="carouselImage">
                        <video autoPlay controls style={{ maxHeight: "250px" }}>
                          <source src="https://i.imgur.com/Alj6xdA.mp4" type="video/mp4" />
                        </video>
                      </Media>
                    </Col>
                    <Col>
                      <p className="carouselText">Folio was my second full-stack app deployed on Heroku. The three of us built a trading app that allowed users to browse, research, and invest in stocks and cryptocurrencies, and then review their holdings in a portfolio. I built the research pages (including data visualizations built using React Viz) and the trading page. The back-end was built with Flask, Python, and PostGreSQL giving us some experience of relational databases.</p>
                    </Col>
                  </Row>
                </Container>
                <Carousel.Caption>
                  <h3 className="carouselText ">Project 4: Folio</h3>
                  <h5 className="carouselText"><a rel="noreferrer" target="_blank" href="https://github.com/clem-code/project-4#readme">README</a></h5>
                  <h5 className="carouselText">Deployed <a rel="noreferrer" target="_blank" href="https://foliotrading.herokuapp.com/">here</a></h5>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col></Col>
        </Row>
      </Container>
      <Container>
        <p id="contact">Contact</p>
        <Row>
          <Col>
            <Image id="contactIMG" className="balloon" style={{ maxHeight: "250px", margin: "50px" }} thumbnail src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd19-10080-ae-wallart.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=df2486f66ca02e16ebfc96881f1d7c0c' />
          </Col>
          <Col className="contactList">
            <Row >
              <a rel="noreferrer" target="_blank" href="mailto:cagtknox@gmail.com"><Figure><Figure.Image className="contactIcon" src="https://icons.iconarchive.com/icons/johnathanmac/mavrick/96/Mail-icon.png" /> <Figure.Caption className=" ">Email</Figure.Caption></Figure></a>
            </Row>
            <Row >
              <a rel="noreferrer" target="_blank" href="https://github.com/clem-code"><Figure><Figure.Image className="contactIcon" src="https://cdn3.iconfinder.com/data/icons/sociocons/256/github-sociocon.png" /> <Figure.Caption >Github</Figure.Caption></Figure></a>
            </Row>
            <Row >
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/clement-knox-155717201/"><Figure id="linkedin"><Figure.Image className="contactIcon" src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-flat.png" />
                <Figure.Caption className=" ">LinkedIn</Figure.Caption></Figure></a>
            </Row>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
