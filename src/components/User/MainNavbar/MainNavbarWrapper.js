import styled from "styled-components";

const MainNavbarWrapper = styled.section`
  padding: 43px 0;
  .rows {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;

    .list-card {
      background: #dedede;
      padding: 10px 20px;
      border-radius: 10px;
      color: black;
      &.active {
        background: #ffe755;
      }
    }
  }
`;

export default MainNavbarWrapper;
