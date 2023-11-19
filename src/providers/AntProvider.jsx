import { ConfigProvider } from 'antd';
  
const AntProvider = ({ children }) => (

  <ConfigProvider theme={{ token: { colorPrimary: '#1D5ECD' } }}>
    {children}
  </ConfigProvider>
);

export default AntProvider;