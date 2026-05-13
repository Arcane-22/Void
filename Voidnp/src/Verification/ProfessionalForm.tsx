import "../css/ProfessionalForm.css";

type Props = { onNext: () => void; onBack: () => void; };

const ProfessionalForm = ({ onNext, onBack }: Props) => {
  return (
    <section className="form-section">
      <h3 className="form-title">Professional Information</h3>
      <form className="verification-form" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="form-display">

          <div className="field">
            <label>Primary Subject *</label>
            <select defaultValue="">
              <option value="" disabled>Select Option</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>English</option>
            </select>
          </div>

          <div className="field">
            <label>Secondary Subject</label>
            <select defaultValue="">
              <option value="" disabled>Select Option</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>English</option>
            </select>
          </div>

          <div className="field"> 
            <label>Highest Qualification *</label>
            <select defaultValue="">
              <option value="" disabled>Select Option</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
          </div>

          <div className="field">
            <label>Field of Study *</label>
            <input type="text" placeholder="E.g BCA" />
          </div>

          <div className="field">
            <label>Years of Experience *</label>
            <select defaultValue="">
              <option value="" disabled>Select Option</option>
              <option>0-2 years</option>
              <option>3-5 years</option>
              <option>5+ years</option>
            </select>
          </div>

          <div className="field">
            <label>Current Institution</label>
            <input type="text" placeholder="Enter institution name" />
          </div>

          <div className="field">
            <label>Previous Institution</label>
            <input type="text" placeholder="Enter institution name" />
          </div>

          <div className="last-field"> 
            <label>Short Bio</label>
            <textarea placeholder="Briefly describe your teaching experience" />
          </div>

        </div>

        <div className="form-actions">
          <button type="button" className="back" onClick={onBack}>Previous</button>
          <button type="submit" className="next">Submit for Verification</button>
        </div>
      </form>
    </section>
  );
};

export default ProfessionalForm;