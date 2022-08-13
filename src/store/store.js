import { configureStore } from '@reduxjs/toolkit';
import reducer from './project';



const store = configureStore(
    {reducer}
  );

export default store; 