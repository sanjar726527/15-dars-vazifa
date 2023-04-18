import styled from "styled-components";

const MainHeaderWrapper = styled.section`
  background: #ffec00;
  height: 546px;
  max-width: 1444px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  .rows {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: relative;
    padding: 0;
    .item {
      img {
        width: 80%;
        height: 60%;
      }
    }
  }
`;

export default MainHeaderWrapper;
