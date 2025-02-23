import React, { useEffect, useState } from 'react';

import StudyBar from './StudyBar';
import { Outlet } from 'react-router-dom';


export default function Services() {

  
 return (
  <>
<StudyBar/>
<Outlet/>

  </>
)
}
