import {
  
    RadiusUprightOutlined,
  } from '@ant-design/icons';
  import React, { useMemo } from 'react';
  import { Button, Divider, Space, notification } from 'antd';
  const Context = React.createContext({
    name: 'Default',
  });
  const Notification = ({contextHolder}) => {
   
    const contextValue = useMemo(
      () => ({
        name: 'Added successfully',
      }),
      [],
    );
    return (
      <Context.Provider value={contextValue}>
        {contextHolder}
      </Context.Provider>
    );
  };
  export default Notification;