import React from 'react';
import '../../styling/boxes.scss';
import OneBox from './OneBox.js';

const ThreeBox = () => {

  const ElectricBoltIcon = <i class="bi bi-lightning-charge"></i>
  const ThumbUpAltOutlinedIcon = <i class="bi bi-hand-thumbs-up"></i>
  const ArchiveOutlinedIcon = <i class="bi bi-archive"></i>

  const easyTitle = 'Easy to use';
  const fastTitle = 'Ultra-fast';
  const mutationTitle = 'Persistent cache data';

  const easyText =
    'Set-up in seconds, without additional costs or processes, and instantly implement the caching in your web app file with just a few of lines of code.';
  const fastText =
    'Extremely low latency speeds (as shown in our demo below) from our high cache hit-rate due to lazy loading implementation and O(1) look-up.';
  const mutationText =
    'Persistent offline cache data between sessions using localForage and IndexedDB - improving performance and saving backend resources.';

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
