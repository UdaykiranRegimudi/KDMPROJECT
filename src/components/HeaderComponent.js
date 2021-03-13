import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto">
                            <img className="rounded" src="assets/images/applogo.jpg" alt="kdmlogo" height="40" width="200" />
                        </NavbarBrand>
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav className="mr-auto col-sm-3 offset-2 col-md-6 navbar">
                                <NavItem>
                                    <NavLink className="nav-link text-dark style = {{color:'black'}}" to="/job">
                                    <span className="fa fa-address-card fa-lg"></span> <strong> Create Job</strong>
                                    </NavLink>
                                </NavItem>
                            
                                <NavItem>
                                    <NavLink className="nav-link text-dark style = {{color:'black'}}" to="/listjob">
                                    <span className="fa fa-list fa-lg"></span> <strong> List Jobs</strong>
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline className="modal-btn btn-secondary btn-md" style = {{color:'black'}} onClick={this.toggleModal}>
                                            <strong>Login</strong> 
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.displayName}</div>
                                        <Button outline className="modal-btn btn-secondary btn-md" style = {{color:'black'}} onClick={this.handleLogout}>
                                            <strong>Logout</strong>
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header justify-content-center">
                            <div className="col-12 col-md-6">
                                <h2>Welcome to KDM Lab Application</h2>
                                {this.props.auth.isAuthenticated ?
                                       <div className="navbar-text" style = {{color:'blue'}}>{this.props.auth.user.email}</div> 
                                    : null
                                }
                            </div>
                        </div>
                    </div>
                 </Jumbotron>
                <Modal className="login-modal" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login - KDM's Lab Application</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Email</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <div className="justify-content-center">
                            <Button className="submit-btn btn-block" type="submit" value="submit"><strong>Login</strong></Button>
                            </div>
                        </Form>
                       
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;