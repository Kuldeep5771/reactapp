
import React from 'react';
import './App.css';
import './bootstrap.min.css';


import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cow from './cow.jpg';
import Deep from './deep.js';
import Cat from './cat.jpg';
import G1 from './assets/g1.PNG';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Sharma from './sharma.js';
import LoginForm from './loginform.js';
import Enquiryform from './enquiryform.js';



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Contact from './contact.js';






function App() {
  return (
    <div className="App">
      <header className="App-header">
        About indian Cricket players Name and Data
        <Deep name="Nathan" age={27} occupation="Software Developer"></Deep>

        <LoginForm></LoginForm>
      </header>



      <Router>
        <div>
          <h2>Welcome in Cricket Ground</h2>
          <nav className="flex-column navbar navbar-expand-lg navbar-dark bg-dark  ">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
              <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
              <li><Link to={'/enquiryform'} className="nav-link">Enquiryform</Link></li>
              <li><Link to={'/loginform'} className="nav-link">LoginForm</Link></li>
            </ul>
          </nav>
          <hr />
         
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/enquiryform' component={Enquiryform} />
            <Route path='/loginform' component={LoginForm} />
          </Switch>
        </div>
      </Router>




      <body>
        <section>

          <div className="container">
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </Table>

          </div>
        </section>

        <section>

          <button>hello cricket lovers</button>
        </section>

        <section>

          <Container>
            <Row>
              <Col>
                <img src={Cow}></img>
              </Col>
              <Col><Deep name="Yesh" age="30" occupation="Team Leader"></Deep>

                <p>Cow is the Animal.The Cow is a domestic as well a beneficient animal.
                  It is a very innocent and loyal animal and can easily be tamed or domesticated. It has four limbs,
                  two horns, two eyes and ears with a big nose, and a long bushy tail. It is a herbivore and likes to eat
                  green plants, leaves, grass, husk, etc</p>
              </Col>
            </Row>
          </Container>
        </section>

        <section>


          <Container>
            <Row>
              <CardDeck>
                <Sharma img={G1} title="GANESHA LAXMI MARBLE  SET" pack="White Box packing" mrp="600 rs" offer="399 rs"></Sharma>
                <Sharma img={Cat} title="Cat for sale" pack="open packing" mrp="800rs" offer="499rs"></Sharma>
                <Sharma></Sharma>
                <Sharma></Sharma>

              </CardDeck>
            </Row>
            <br></br>
            <Row>
              <CardDeck>
                <Sharma img={G1} title="GANESHA LAXMI MARBLE  SET" pack="White Box packing" mrp="600 rs" offer="399 rs"></Sharma>
                <Sharma img={Cat} title="Cat for sale" pack="open packing" mrp="800rs" offer="499rs"></Sharma>
                <Sharma></Sharma>
                <Sharma></Sharma>

              </CardDeck>
            </Row>
          </Container>
        </section>
        <br></br>
        <section>

          <Container>

            <Enquiryform></Enquiryform>


          </Container>
        </section>





        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link href="/contact">9306369488</Nav.Link>
            <Nav.Link eventKey="Contact">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>


      </body>
    </div>

  );
}


export default App;
