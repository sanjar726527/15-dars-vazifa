import styled from "styled-components";

const BasketWrapper = styled.section`
  header {
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: max-content;
        padding: 10px 0;
        img {
          height: 70px;
        }
      }
      .searchbar {
        position: relative;
        padding: 10px 0;
        display: flex;
        width: 300px;
        align-content: center;
        justify-content: center;
        height: 70px;
        .search-icon {
          position: absolute;
          top: 28px;
          right: 15px;
        }
      }
      .user-login {
        .dropdown-toggle {
          display: flex;
          background: transparent;
          border: none;
          color: black;
          justify-content: center;
          align-items: center;
          height: 40px;
          &::after {
            content: none !important;
          }
          .user-avatar {
            margin-bottom: 15px;
            border: 2px solid #000;
            padding: 1px 1px 0;

            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .basketPage {
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    .basket-footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .basket-main {
      width: 100%;
    }

    .basket-rows {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      .basket-card {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 400px;
        .cart-item {
          flex: 1;
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
        }
        .cart-image {
          position: relative;

          span {
            position: absolute;
            right: -10px;
            top: -10px;
            color: #ffffff;
            background: #ef2d2d;
            padding: 5px 10px;
            border-radius: 20px;
          }
        }
        .cart-info {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }
        img {
          width: 200px;
          height: 130px;
          border-radius: 10px;
        }
      }
    }
    .btn {
      width: max-content;
    }
  }
  footer {
    background: #2c2c2c;
    height: 300px;
    a {
      color: #dedede;
    }
    .card-footer {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      p {
        color: #dedede;
        white-space: nowrap;
      }
      .icons {
        display: flex;
        align-items: start;
        flex-direction: row;
        gap: 35px;
        .icon {
          fill: #dedede;
        }
      }
    }
    .row {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 5px;
    }
  }
`;
export default BasketWrapper;
