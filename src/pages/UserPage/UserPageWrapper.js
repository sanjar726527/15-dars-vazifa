import styled from "styled-components";

const UserPageWrapper = styled.section`
  position: relative;
  a {
    text-decoration: none;
  }

  header {
    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .logo {
        width: max-content;
        padding: 10px 0;
        img{
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
            border: 2px solid #000;
            padding: 1px 1px 0;

            border-radius: 50%;
            margin-right: 10px;
          }
          .user-name{
            margin: 0;
          }
        }
      }
    }
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    justify-content: center;
    main {
      .top-to-btm {
        position: relative;
        .icon-position {
          position: fixed;
          bottom: 40px;
          right: 25px;
          z-index: 14;
        }
        .icon-style {
          border: 0;
          border-radius: 50%;
          background: #ffffff;
          height: 50px;
          width: 50px;
          color: #f9e752;
          cursor: pointer;
          animation: move 3s ease-in-out infinite;
          transition: all 0.5s ease-in-out;
        }
        .icon-style:hover {
          animation: none;
        }
      }
    }
  }
  .basket {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: sticky;
    bottom: 10px;
    z-index: 12;
  }
  .basketModal {
    position: fixed;
    cursor: pointer;
    z-index: 15;
    top: 0px;
    width: 100%;
    height: 100%;
    background: #30303044;
    .modalCard {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      border-radius: 10px;
      width: 90%;
      margin: 20px auto;
      background: #ffffff;
      text-align: start;
    }
    .card-image {
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      max-height: 200px;
      img {
        width: 100%;
      }
      span {
        position: absolute;
        right: 15px;
        top: 5px;
      }
    }
    .card-title {
      width: 100%;
      padding: 20px;

      .quantity {
        height: 150px;
        overflow-y: scroll;
        background: #dedede;
      }
      .btn {
        width: 20%;
      }
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

export default UserPageWrapper;
