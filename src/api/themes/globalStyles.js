import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
  transition: all 0.50s linear;
}
.ant-card{
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border:  ${({ theme }) => theme.cardBorderColor};
}
.ant-card-actions{
  background: ${({ theme }) => theme.body};
  border:none;
}
.ant-card-actions > li{
  color:#aaa;
}
.ant-card-actions > li > span > .anticon{
  color:#aaa;
}

.ant-card-meta-title{
  color: ${({ theme }) => theme.text};
}

.ant-descriptions-title {
  color: ${({ theme }) => theme.text};
}

.ant-descriptions-item-label{
  color: ${({ theme }) => theme.text};
}
.ant-descriptions-item-content{
  color: ${({ theme }) => theme.text};
}
`;
export default GlobalStyles;
