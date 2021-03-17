import React, {useEffect, useState} from 'react';
import './App.css';
import PreLoader from './components/PreLoader/PreLoader';
import NavBar from './components/NavBar/NavBar';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';
import Disclaimer from './components/Disclaimer/Disclaimer';
import axios from 'axios';
import {IQuestion} from './data/data';
import {IDelayedAction, executeDelayedActions} from './action/action';

function App() {
  const [isPreLoading, setIsPreLoading] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showLayout, setShowLayout] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [questionIds, setQuestionIds] = useState<number[]>();

  const showPreLoaderAction = () => {
    setIsPreLoading(true);
  };

  const hidePreLoaderAction = () => {
    setIsPreLoading(false);
  };

  const showTitleAction = () => {
    setShowTitle(true);
  };

  const showDisclaimerAction = () => {
    setShowDisclaimer(true);
  };

  const onDisclaimerClickHandler = () => {
    setShowDisclaimer(false);
    setShowLayout(true);
  };

  useEffect(() => {
    setIsPreLoading(true);
    if (!questionIds) {
      axios.get<IQuestion[]>('/questions').then(questions => {
        setQuestionIds(questions.data.map(question => question.id));
        const delayedActions: IDelayedAction[] = [
          {action: showPreLoaderAction, delay: 3000},
          {action: hidePreLoaderAction, delay: 1500},
          {action: showTitleAction, delay: 3000},
          {action: showDisclaimerAction},
        ];
        executeDelayedActions(delayedActions);
      });
    }
  }, []);

  return (
    <div className="App">
      <PreLoader show={isPreLoading} />
      <Loader show={showTitle} />
      <Disclaimer show={showDisclaimer} onClick={onDisclaimerClickHandler} />
      <NavBar />
      {showLayout && questionIds ? <Layout questionIds={questionIds} /> : null}
    </div>
  );
}

export default App;
