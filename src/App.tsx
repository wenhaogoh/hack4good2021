import React, {useEffect, useState} from 'react';
import './App.css';
import PreLoader from './components/PreLoader/PreLoader';
import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import {IDelayedAction, executeDelayedActions} from './action/action';

function App() {
  const [isPreLoading, setIsPreLoading] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showLayout, setShowLayout] = useState(false);

  const showPreLoaderAction = () => {
    setIsPreLoading(true);
  };

  const hidePreLoaderAction = () => {
    setIsPreLoading(false);
  };

  const showTitleActionAction = () => {
    setShowTitle(true);
  };

  const showLayoutAction = () => {
    setShowLayout(true);
  };

  useEffect(() => {
    const delayedActions: IDelayedAction[] = [
      {action: showPreLoaderAction, delay: 3000},
      {action: hidePreLoaderAction, delay: 1500},
      {action: showTitleActionAction, delay: 2500},
      {action: showLayoutAction},
    ];
    executeDelayedActions(delayedActions);
  }, []);

  return (
    <div className="App">
      <PreLoader show={isPreLoading} />
      <Loader show={showTitle} />
      <NavBar />
      {showLayout ? <Layout /> : null}
    </div>
  );
}

export default App;
