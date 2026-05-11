import profilePic from '../assets/profile.svg'

const UserCard = () => {
  return (
    <div className="usercard">
        <div className="usercard-info">
            <img src={profilePic} alt="User Avatar" className="usercard-avatar" />
            <div className="usercard-text">
            <p>Gaurav Kumar Shiwakoti</p>
            <p>Void ID: VT-98234XK</p>
            </div>
        </div>
        <div className="usercard-actions">
            <span>● VERIFIED</span>
            <span>
                <button>📄</button>
                <button>📩</button>
            </span>
        </div>
    </div>
  );
};

export default UserCard