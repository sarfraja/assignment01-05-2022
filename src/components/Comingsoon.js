
import Sidebar from './Sidebar';

export default function Comingsoon() {

  return (
    <div className='profilepage'>
      <div className='row'>
        <div className="col-lg-2">
          <Sidebar />
        </div>
        <div className="col-lg-10" style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
         <h1>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}