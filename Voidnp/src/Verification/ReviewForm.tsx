type Props = {
  onBack: () => void;
  data: any;
};

const ReviewForm = ({ onBack, data }: Props) => {
  return (
    <main className="form-section">
      <h3>Review Your Data</h3>

      <section>
      <h4>Personal Information</h4>
      <div>
        <p><b>Name:</b> {data.personal.full_name}</p>
        <p><b>Phone:</b> {data.personal.phone}</p>
        <p><b>Email:</b> {data.personal.email}</p>
        <p><b>DOB:</b> {data.personal.dob}</p>
        <p><b>Nationality:</b> {data.personal.nationality}</p>
        <p><b>Gender:</b> {data.personal.gender}</p>
      </div>
      </section>

      {/* PROFESSIONAL */}
      <section>
      <h4>Professional Information</h4>
      <div>
        <p><b>Job Title:</b> {data.professional.job_title}</p>
        <p><b>Company:</b> {data.professional.company}</p>
      </div>
      </section>

      {/* DOCUMENTS */}
      <section>
      <h4>Upload Documents</h4>

      <ul>
        {data.documents.idFiles?.map((file: File, i: number) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>

      <ul>
        {data.documents.certFiles?.map((file: File, i: number) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>
      </section>
      <div className="form-actions">
        <button type="button" className="back" onClick={onBack}>Previous</button>
        <button type="button" className="next">Submit for Verification</button>
      </div>
    </main>
  );
};

export default ReviewForm;