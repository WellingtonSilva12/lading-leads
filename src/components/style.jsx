import styled from 'styled-components'

export const Container = styled.section`
  height: 100vh;
  display: flex;

  .container-left {
    width: 100%;
    background-color: black;
    padding: 0 38px;
    color: white;
    img {
      margin-top: 50px;
      margin-bottom: 92px;
      height: 92px;
    }
    h1 {
      font-size: 24px;
      color: #08c05e;
      margin-bottom: 9px;
    }
    h2 {
      font-size: 14px;
      margin-bottom: 9px;
    }
    p {
      font-size: 14px;
      margin-bottom: 50px;
      line-height: 150%;
    }
    label {
      display: block;
      margin-bottom: 18px;
      font-size: 14px;
      color: #a8a8a8;
      font-weight: bold;
    }
    input {
      position: absolute;
      border: none;
      border-left: 5px solid #08c05e;
      padding-left: 10px;
      font-size: 14px;
      height: 48px;
      width: 798px;
      box-shadow: 5px 5px 5px #00000056;
      outline: none;
      color: #535353;
    }
    button {
      position: relative;
      left: 750px;
      height: 48px;
      width: 48px;
      background-color: #8257e5;
      color: #fff;
      border: none;
    }

    a {
      margin-top: 50px;
      display: flex;
      align-items: center;
      color: #8257e5;
      font-size: 14px;
      font-weight: bold;
      text-decoration: none;
    }
  }
  .container-right {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 70% 100%;
    }
  }
`
