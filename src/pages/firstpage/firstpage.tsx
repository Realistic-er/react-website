import React from 'react';

import Header from '../../components/header';
import style from '../../style/firstpage.module.scss';
function FirstPage() {
  return (
    <div className={style.container}>
      {/* 顶部 */}
      <Header />
    </div>
  );
}

export default FirstPage;