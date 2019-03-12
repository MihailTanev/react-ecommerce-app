import React, { Component } from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook } from "react-icons/fa";
export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com`
      },
      {
        id: 2,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `https://www.instagram.com`
      }
    ]
  };
  render() {
    return (
      <FooterWrapper>
        <div className="title">cam-store</div>
        <div className="icons">
          {this.state.icons.map(item => (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          Copyright &copy; 2019 All Rights Reserved
          <br />
          www.visualminds.org
        </p>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: var(--mainBlue);
  .icons {
    width: 5rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: var(--mainWhite);
    font-size: 1.3rem;
    &:hover {
      color: var(--mainYellow);
    }
  }
  .copyright {
    color: var(--mainWhite);
    text-align: center;
    margin: 1rem 0;
    line-height: 1.5rem;
    @media (max-width: 568px) {
      font-size: 0.9rem;
    }
  }
  .title {
    text-align: center;
    width: 10rem;
    color: var(--mainYellow);
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    border-color: var(--mainYellow);
    @media (max-width: 568px) {
      font-size: 1rem;
      width: 8rem;
    }
  }
`;
