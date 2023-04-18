import styled from "styled-components";

const AdminPageWrapper = styled.section`
  display: flex;

  aside {
    width: 400px;
    min-height: 100vh;
    .aside-row {
      display: flex;
      flex-direction: column;
      position: sticky;
      gap: 20px;
      text-align: center;
      img {
        width: 300px;
        height: 80px;
      }
      .list-group {
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        a {
          text-decoration: none;
        }
        .list-card {
          &.active {
            background: #ffe755;
          }
          transition: all 0.5s ease;
          padding: 5px 10px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 15px;
          text-align: start;
          color: #fff;
          h5 {
            padding: 0;
            margin: 0;
            color: #000000d7;
          }
          span {
            color: #5e6366;
            font-size: 14px;
          }
        }
      }
    }
  }
  .rightSide {
    flex: 1;
    header {
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .hamburger {
          margin-top: 20px;
          background: black;
          display: inline-block;
          position: relative;
          height: 3px;
          width: 30px;
        }
        .hamburger:before {
          background: #000;
          content: "";
          position: absolute;
          top: -10px;
          width: 30px;
          height: 3px;
        }
        .hamburger:after {
          background: #000;
          content: "";
          position: absolute;
          top: 10px;
          width: 30px;
          height: 3px;
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
            .user-name {
              padding: 0;
              margin: 0;
            }
          }
        }
      }
    }
    main {
    }
  }
`;

export default AdminPageWrapper;
