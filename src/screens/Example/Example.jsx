import './Example.css';

import React from 'react';
import { useSelector } from 'react-redux';

const Example = ({ label }) => {
  const user = useSelector((store) => store.user);

  return (
    <div>
      {user?.first_name} {user?.email}
    </div>
  );
};

export default Example;
