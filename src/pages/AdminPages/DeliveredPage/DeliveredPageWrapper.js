import styled from "styled-components";

const DeliveredPageWrapper = styled.section`
  .applications-title {
    h2 {
      padding: 0;
      margin: 0;
    }
    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      color: #5e6366;
    }
  }
  .applications-table {
    .all-price {
      display: flex;
      padding: 0 10px;
      justify-content: space-between;
    }
  }
  th {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1 px;
    color: #919699;
    white-space: nowrap;
  }
  td {
    white-space: nowrap;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.4px;
  }
`;

export default DeliveredPageWrapper;
