// src/components/verification/PersonalForm.tsx

type Props = {
  onNext: () => void;
};

const PersonalForm = ({ onNext }: Props) => {
  return (
    <section className="form-section">
      <h3 className="form-title">Personal Information</h3>

      <form className="verification-form" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="form-fields">

          <div className="form-field">
            <label className="label" htmlFor="full-name">
              Full Name <span className="required">*</span>
            </label>
            <input className="input" type="text" id="full-name" name="full_name" required autoComplete="name" />
          </div>

          <div className="row">
            <div className="form-field">
              <label className="label" htmlFor="phone">
                Phone Number <span className="required">*</span>
              </label>
              <input className="input" type="tel" id="phone" name="phone" required autoComplete="tel" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input className="input" type="email" id="email" name="email" required autoComplete="email" />
            </div>
          </div>

          <div className="row">
            <div className="form-field">
              <label className="label" htmlFor="dob">
                Date of Birth <span className="required">*</span>
              </label>
              <input className="input" type="date" id="dob" name="dob" required autoComplete="bday" />
            </div>
            <div className="form-field">
              <label className="label" htmlFor="nationality">
                Nationality <span className="required">*</span>
              </label>
              <select className="select" id="nationality" name="nationality" required defaultValue="">
                <option value="" disabled>Select Option</option>
                <option value="np">Nepali</option>
                <option value="in">Indian</option>
                <option value="us">American</option>
              </select>
            </div>
          </div>

          <fieldset className="radio-group">
            <legend className="label">Gender <span className="required">*</span></legend>
            <label className="radio-label">
              <input className="radio" type="radio" name="gender" value="male" required /> Male
            </label>
            <label className="radio-label">
              <input className="radio" type="radio" name="gender" value="female" /> Female
            </label>
          </fieldset>

        </div>
        <button className="btn-next" type="submit">Next</button>
      </form>
    </section>
  );
};

export default PersonalForm;