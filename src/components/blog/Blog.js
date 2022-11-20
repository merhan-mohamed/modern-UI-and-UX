import React from 'react';
import Article from '../article/article';
import "./blog.css";
import { blog01, blog2, blog03, blog04, blog05 } from "./import.js"

const Blog = () => {
  return (
    <div  className="gpt3__blog padding_section" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className='gradient_text'>A lot is happening, 
        We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgURL={blog01} date="Sep 26, 2021"  
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgURL={blog2} date="Sep 26, 2021"  
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog03} date="Sep 26, 2021"  
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog04} date="Sep 26, 2021"  
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog05} date="Sep 26, 2021" 
           title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>          
          </div>
      </div>
    </div>
  )
}

export default Blog
