import styled from "styled-components";

const StyledButton = styled.button`
  background: #f0f0f0;
  padding: 10px 16px;
  border-radius: 10px;
  border: 0;
  span {
    color: #3c3c3c;
  }
  ${(props) => {
    switch (props.variant) {
      case "green":
        return `
        background:#f9e752;
        color: #000000;
        padding:5px 8px;
        border-radius:6px;
        font-weight:500;
        span{
            background:#FFf;
          };
        `;
      case "white":
        return `
        background: #f0f0f0;
        height:50px;
        color: #000;
        span{
          background:#ffffff;
        }
        `;
    }
  }};
`;

export default StyledButton;
