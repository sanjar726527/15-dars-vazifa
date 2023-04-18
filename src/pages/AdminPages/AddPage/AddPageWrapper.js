import styled from "styled-components";

const AddPageWrapper = styled.section`
  padding-bottom: 50px;
  @media (min-width: 576px) {
    .col-sm-3 {
      flex: 0 0 auto;
      width: 100%;
    }
  }
  .addPage-tabs {
    margin-top: 20px;
  }
  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    background-color: #ffec00;
    color: black;
    box-shadow: 1px 5px 7px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    padding: 15px 20px;
  }
  
  .btn {
    box-shadow: 1px 5px 7px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    margin-left: 50%;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    padding: 10px 40px;

    background-color: #ffec00;
    color: black;
  }

  .nav-link {
    color: black;
    font-size: 20px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.4px;
    padding: 15px 20px;
  }
`;

export default AddPageWrapper;
