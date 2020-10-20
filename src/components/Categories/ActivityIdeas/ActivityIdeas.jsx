import React from 'react';
import styles from './ActivityIdeas.module.scss';
import VideoList from '../VideoList';
import ArticleList from '../ArticleList';

const ActivityIdeas = () => {
  return (
    //   <nav>Top Navbar</nav>
    <div>
        {/* Buttons to select whether you wish to view a video or article */}
      <button>Videos</button>
      <button>Articles</button>

      <div className="filter">
      {/* Tabbed buttons to click for filtered lists based on keywords */}
      </div>
      
      {/* <VideoList /> */}
      <ArticleList />
    </div>
  )
}

export default ActivityIdeas