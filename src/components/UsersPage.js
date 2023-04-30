
import Sidebar from './Sidebar';
import Profile from './Profile';
import Chatbox from './ChatBox';

export default function UserPage() {

  return (
    <div className='profilepage'>
      <div className='row'>
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10">
          <Profile />
          <div className="chatbox-container">
            <Chatbox />
          </div>
        </div>
      </div>
    </div>
  );
}