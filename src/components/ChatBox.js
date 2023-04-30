import React, { useState } from 'react';

function ChatBox() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container">
      <button
        className="btn btn-primary chatbtn"
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        style={{width:'15%',right:'20px',bottom:0,position:'fixed',zIndex:'1030'}}
      >
        <i className="fa-regular fa-comments"></i> Chat
      </button>
      
    </div>
  );
}

export default ChatBox;