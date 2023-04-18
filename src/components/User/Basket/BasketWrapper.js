import styled from "styled-components";

const BasketWrapper = styled.section`
  background: white;
  width: 600px;
  max-width: 60%;
  border-radius: 10px;
  color: black;
  .basket-row {
    display: flex;
    flex-wrap: wrap;

    .productPrice {
      padding: 20px;
      display: flex;
      align-items: center;
    }
    .basketButton {
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      flex: 1;
      background: #f9e752;
      width: 200px;
      max-width: 100%;
      padding: 10px;
      .basketIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
  }
`;

export default BasketWrapper;
