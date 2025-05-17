import React from 'react';

import IntroductionToProgramming from './courses/Fundamental/IntroductionToProgramming';
import ComputerNetworks from './courses/Fundamental/ComputerNetworks';
import DataStructuresAlgorithms from './courses/Fundamental/DataStructuresAlgorithms';
import DistributedSystems from './courses/Fundamental/DistributedSystems';
import MachineLearning from './courses/Fundamental/MachineLearning';
import OperatingSystems from './courses/Fundamental/OperatingSystems';
import BasicMathematics from './courses/Fundamental/BasicMathematics';
import AdvancedProgramming from './courses/Fundamental/AdvancedProgramming';
import AdvancedMathematics from './courses/Fundamental/AdvancedMathematics';
import DatabaseManagementSystems from './courses/Fundamental/DatabaseManagementSystems';
import ComputerOrganisationArchitecture from './courses/Fundamental/ComputerOrganisationArchitecture';

import ModernProgrammingToolsAndAutomation from './courses/Industry/ModernProgrammingToolsAndAutomation';
import CloudComputing from './courses/Industry/CloudComputing';
import DevOps from './courses/Industry/DevOps';
import BasicWebDevelopment from './courses/Industry/BasicWebDevelopment';
import AdvancedWebDevelopment from './courses/Industry/AdvancedWebDevelopment';
import FoundationsOfComputerSecurity from './courses/Industry/FoundationsOfComputerSecurity';
import SystemDesign from './courses/Industry/SystemDesign';
import IndiaStack from './courses/Industry/IndiaStack';
import AndroidiOSAppDevelopment from './courses/Industry/AndroidiOSAppDevelopment';
import BeingAnEffectiveEngineer from './courses/Industry/BeingAnEffectiveEngineer';
import AppliedLLMs from './courses/Industry/AppliedLLMs';
import DataEngineering from './courses/Industry/DataEngineering';

import AdvancedDatabases from './courses/Additional/AdvancedDatabases';
import WebScrapingDevelopingExtensions from './courses/Additional/WebScrapingDevelopingExtensions';
import InternetOfThings from './courses/Additional/InternetOfThings';


function App() {
  const COURSE_ID = process.env.REACT_APP_COURSE_ID;

  const getCourse = () => {
    switch (COURSE_ID?.toLowerCase()) {
      case 'ip':
        return <IntroductionToProgramming />;
      case 'cn':
        return <ComputerNetworks />;
      case 'dsa':
        return <DataStructuresAlgorithms />;
      case 'dscd':
        return <DistributedSystems />;
      case 'ml':
        return <MachineLearning />;
      case 'os':
        return <OperatingSystems />;
      case 'bm':
        return <BasicMathematics />;
      case 'am':
        return <AdvancedMathematics />;
      case 'ap':
        return <AdvancedProgramming />;
      case 'dbms':
        return <DatabaseManagementSystems />;
      case 'co':
        return <ComputerOrganisationArchitecture />;

      case 'mpta':
        return <ModernProgrammingToolsAndAutomation />;
      case 'cc':
        return <CloudComputing />;
      case 'do':
        return <DevOps />;
      case 'bwd':
        return <BasicWebDevelopment />;
      case 'awd':
        return <AdvancedWebDevelopment />;
      case 'fcs':
        return <FoundationsOfComputerSecurity />;
      case 'sd':
        return <SystemDesign />;
      case 'india':
        return <IndiaStack />;
      case 'aid':
        return <AndroidiOSAppDevelopment />;
      case 'bee':
        return <BeingAnEffectiveEngineer />;
      case 'allm':
        return <AppliedLLMs />;
      case 'de':
        return <DataEngineering />;

      case 'ad':
        return <AdvancedDatabases />;
      case 'wsde':
        return <WebScrapingDevelopingExtensions />;
      case 'iot':
        return <InternetOfThings />;

      default:
        return <IntroductionToProgramming />;
    }
  };

  return getCourse();

}

export default App;