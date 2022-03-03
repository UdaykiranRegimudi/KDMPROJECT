import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
        return(
            <div className="background">
            <nav className="navbar navbar-expand-lg ">
              <img
                src="https://kdmengineers.com/wp-content/uploads/2021/12/KMDLogoHorizontal-R-300x169.png"
                alt="logo"
                className="uday logo"
              />
              <button
                className="navbar-toggler uday"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSu.
                pportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon uday">uday</span>
              </button>
        
              <div
                className="collapse navbar-collapse uday"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto ">
                 { this.props.auth.isAuthenticated ? 
                    this.props.auth.user.email === "sireesha.kattula@kdmengineers.com" || 
                    this.props.auth.user.email === "lakshmana.kattula@kdmengineers.com" ||
                    this.props.auth.user.email === "annemvikramreddy@gmail.com" ||
                    this.props.auth.user.email === "vikramreddy.annem@kdmengineers.com"||
                    this.props.auth.user.email === "vijaya.kattula@kdmengineers.com" ? 
                    <Link to="/testAPIs">
                    <li className="nav-item active mr-4 ml-5">
                        <a className="nav-link uday2">
                        <img
                            src="https://img.icons8.com/ios-filled/2x/blood-sample--v2.gif"
                            alt="img"
                            className="logoSmall"
                        />
                        Test APIs <span className="sr-only"></span>
                        </a>
                    </li>
                    </Link>
                    : null
                : null
                }
                { this.props.auth.isAuthenticated ? 
                    this.props.auth.user.email === "sireesha.kattula@kdmengineers.com" || 
                    this.props.auth.user.email === "lakshmana.kattula@kdmengineers.com" ||
                    this.props.auth.user.email === "annemvikramreddy@gmail.com" ||
                    this.props.auth.user.email === "vikramreddy.annem@kdmengineers.com"||
                    this.props.auth.user.email === "vijaya.kattula@kdmengineers.com" ? 
                    <Link to ="/order">
                    <li className="nav-item dropdown mr-4">
                    <a
                      className="nav-link dropdown-toggle uday2"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://img.icons8.com/ios/72/create-order--v2.gif"
                        alt="img"
                        className="logoSmall"
                      />
                      Create Order
                    </a>
                    <div
                      className="dropdown-menu background1"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item uday" >
                        Action
                      </a>
                      <a className="dropdown-item uday" >
                        Another action
                      </a>
                      <div className="dropdown-divider">
                        <h1>uday</h1>
                      </div>
                      <a className="dropdown-item uday" >
                        Something else here
                      </a>
                    </div>
                  </li>
                  </Link>
                    : null
                : null
                }
                { this.props.auth.isAuthenticated ?
                        this.props.auth.user.email === "ramesh.lingoji@kdmengineers.com" || 
                        this.props.auth.user.email === "subhashini.kunchala@kdmengineers.com" || 
                        this.props.auth.user.email === "sireesha.kattula@kdmengineers.com" ||
                        this.props.auth.user.email === "annemvikramreddy@gmail.com" ||
                        this.props.auth.user.email === "vikramreddy.annem@kdmengineers.com"||
                        this.props.auth.user.email === "drbsrao@kdmengineers.com" ||
                        this.props.auth.user.email === "lakshmana.kattula@kdmengineers.com" ||
                        this.props.auth.user.email === "customercare@gmail.com" ||
                        this.props.auth.user.email === "vijaya.kattula@kdmengineers.com" ?
                        <Link to="/listorder">
                    <li className="nav-item dropdown mr-4">
                    <a
                      className="nav-link dropdown-toggle uday2"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://img.icons8.com/ios/72/todo-list--v2.gif"
                        alt="img"
                        className="logoSmall"
                      />
                      List Orders
                    </a>
                    <div
                      className="dropdown-menu background1"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item uday" >
                        Action
                      </a>
                      <a className="dropdown-item uday">
                        Another action
                      </a>
                      <div className="dropdown-divider">
                        <h1>uday</h1>
                      </div>
                      <a className="dropdown-item uday" >
                        Something else here
                      </a>
                    </div>
                  </li>
                  </Link>
                        : null
                : null
                    }

                    { this.props.auth.isAuthenticated ? 
                        this.props.auth.user.email === "sireesha.kattula@kdmengineers.com" ||
                        this.props.auth.user.email === "lakshmana.kattula@kdmengineers.com" ||
                        this.props.auth.user.email === "vijaya.kattula@kdmengineers.com" ||
                        this.props.auth.user.email === "saikumar.b@kdmengineers.com"||
                        this.props.auth.user.email === "srikanth.s@kdmengineers.com"||
                        this.props.auth.user.email === "sailatha.k@kdmengineers.com"||
                        this.props.auth.user.email === "srinivas.b@kdmengineers.com"||
                        this.props.auth.user.email === "annemvikramreddy@gmail.com"||
                        this.props.auth.user.email === "vikramreddy.annem@kdmengineers.com"||
                        this.props.auth.user.email === "chandrasekhar.s@kdmengineers.com"||
                        this.props.auth.user.email === "drbsrao@kdmengineers.com" ?
                        <Link to="/listjob">
                        <li className="nav-item dropdown mr-4">
                    <a
                      className="nav-link dropdown-toggle uday2"
                     
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://img.icons8.com/dusk/2x/list--v2.gif"
                        className="logoSmall"
                        alt="img"
                      />
                      List Jobs
                    </a>
                    <div
                      className="dropdown-menu background1"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item uday" >
                        Action
                      </a>
                      <a className="dropdown-item uday" >
                        Another action
                      </a>
                      <div className="dropdown-divider">
                        <h1>uday</h1>
                      </div>
                      <a className="dropdown-item uday" >
                        Something else here
                      </a>
                    </div>
                  </li>
                  </Link>
                        : null
                    : null
                    }
                </ul>
                <form className="form-inline my-2 my-lg-0">
                {this.props.auth.isAuthenticated? 
                  <button
                    className="btn btn-outline-danger m-3 p-2 uday1"
                    type="button"
                    onClick={this.handleLogout}
                  >
                    Log Out
                  </button>:
                  <button
                    className="btn btn-outline-danger m-3 p-2 uday1"
                    type="button"
                    onClick={this.toggleModal}
                  >
                    Log In
                  </button>}
                </form>
              </div>
            </nav>
            <Modal className="login-modal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} className="uday">Login - KDM's Lab Application</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username" className="uday">Email</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password" className="uday">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <div className="justify-content-center">
                            <Button className="submit-btn btn-success" type="submit" value="submit"><strong>Login</strong></Button>
                            </div>
                        </Form>
                    </ModalBody>
                </Modal>
            <div className="headCard">
              <h1 className="head">Welcome to KDM LAB Application</h1>
              {this.props.auth.isAuthenticated ?<p className="head">{this.props.auth.user.email}</p>:<p className='head'>Integrity, Customer Delight, Social Commitment.</p>}
            </div>
          </div>
        );
    }
}

export default Header;