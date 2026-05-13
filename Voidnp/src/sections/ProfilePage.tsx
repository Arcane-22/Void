import profilePic from '../assets/profile.svg'
const ProfilePage = () => {
  return (
    <section className='profile'>
      <div className='profile-heading'>
        <img src={profilePic} alt="User Avatar" className="usercard-avatar" />
        <button className='change'>Change photo</button>
      </div>
      <form className='profile-form'>
          <div className='field'>
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full_name"
              value="Gaurav Kumar Shiwakoti"
              required
            />
          </div>
          <div className='row'>
            <div className='field'>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value="9861234567"
            />
            </div>

            <div className='field'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value="johndoe@gmail.com"
              required
            />
            </div>
          </div>
          <button type="submit" className='update'>Update Profile</button>
      </form>

    </section>
  );
};

export default ProfilePage;