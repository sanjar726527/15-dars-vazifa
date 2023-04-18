import styled from "styled-components";

const MainTemplateWrapper = styled.section`
  color: black;
  .productCard {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    width: 100%;
    .card-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      gap: 10px;
      .card {
        width:100%;
        padding: 10px;
        position: relative;
        width: 260px;
        overflow: hidden;
        &:hover {
          .active {
            max-width: 238px;
            width: 100%;
            background: #42424285;
            padding: 10px 30px;
            opacity: 1;
          }
        }
        .active {
          position: absolute;
          z-index: 10;
          opacity: 0;
          top: 109px;
          text-align: end;
          border-radius: 0 0 10px 10px;
        }
        img {
          height: 156px;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        h3 {
          font-size: 20px;
          font-weight: 500;
          line-height: 1.2rem;
        }
        p {
          font-weight: 500;
          color: #707070;
        }
      }
    }
  }
`;

export default MainTemplateWrapper;
