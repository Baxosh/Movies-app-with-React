import { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Images from './common/Images'

//Styles
import styled from 'styled-components'

//Images
import imgLogo from '../Images/Logos/Logo.png'

// Create a NavbarContainer component that'll render an <nav> tag with some styles

const NavbarContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  background-color: #ccc;

  img {
    width: 100%;
    height: auto;
  }

  a {
    width: 100px;
    height: 60px;
    line-height: 2;
    align-items: center;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    
  }

  ul li a {
    padding: 0;
    height: auto;
    color: #6610f2;
  }

  ul li button { 
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
  }

  ul li button i {
    display: flex; 
    flex-wrap: wrap;
    border: none;
    background: transparent;
    margin: 8px 5px 0 0;
    padding: 0;
  }
  ul li button i:hover {
    border: none;
    outline: none;
    box-shadow: 0 0 8px #ccc;
  }
  
`

export default class Navbar extends Component {
  render() {
    const { user } = this.props
    return (
      <NavbarContainer>
        <Link to="/">
          <Images src={imgLogo} alt="Logo Movies app" width="70" height="50" />
        </Link>
        <ul>
          <li>
            <button type="submit">
              <i class="fa fa-search"></i>
            </button>
          </li>
          {user && (
            <>
              <li>
                <NavLink className="nav-link" to="/profile">
                  {user.name}
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/logOut">
                  Log Out
                </NavLink>
              </li>
            </>
          )}
          {!user && (
            <>
              <li>
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/Register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </NavbarContainer>
    )
  }
}
