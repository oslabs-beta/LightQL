import React from 'react';
import '../../styling/boxes.scss';
import OneBox from './OneBox';

const ThreeBox: React.FC = () => {

  const ElectricBoltIcon = <i className="bi bi-lightning-charge" style={{fontSize: '2rem', color: '#323949'}}></i>
  const ThumbUpAltOutlinedIcon = <i className="bi bi-hand-thumbs-up" style={{fontSize: '2rem', color: '#323949'}}></i>
  const ArchiveOutlinedIcon = <i className="bi bi-archive" style={{fontSize: '2rem', color: '#323949'}}></i>

  const easyTitle = 'Easy to use';
  const fastTitle = 'Ultra-fast';
  const mutationTitle = 'Persistent cache';

  const easyText =
    'Set-up in seconds, without additional costs or processes, and instantly implement the caching in your web app file with just a few of lines of code.';
  const fastText =
    'Extremely low latency speeds (as shown in our demo below) from our high cache hit-rate due to lazy loading implementation and O(1) look-up.';
  const mutationText =
    'Persistently cache data offline between sessions using localForage and IndexedDB - improving performance and saving backend resources.';

  return (
    <div id="three-box-layout">
      <OneBox icon={ThumbUpAltOutlinedIcon} title={easyTitle} text={easyText} />
      <OneBox icon={ElectricBoltIcon} title={fastTitle} text={fastText} />
      <OneBox
        icon={ArchiveOutlinedIcon}
        title={mutationTitle}
        text={mutationText}
      />
    </div>
  );
};

export default ThreeBox;

// changes made during ts transition
    // added React.FC type
