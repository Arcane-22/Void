type Props = {
  onBack: () => void;
  data: any;
};

const ReviewForm = ({ onBack, data }: Props) => {
  return (
    <section className="form-section">
      <h3>Review Your Data</h3>

      {/* PERSONAL */}
      <h4>Personal</h4>
      <div>
        <p><b>Name:</b> {data.personal.full_name}</p>
        <p><b>Phone:</b> {data.personal.phone}</p>
        <p><b>Email:</b> {data.personal.email}</p>
        <p><b>DOB:</b> {data.personal.dob}</p>
        <p><b>Nationality:</b> {data.personal.nationality}</p>
        <p><b>Gender:</b> {data.personal.gender}</p>
      </div>

      {/* PROFESSIONAL */}
      <h4>Professional</h4>
      <div>
        <p><b>Job Title:</b> {data.professional.job_title}</p>
        <p><b>Company:</b> {data.professional.company}</p>
      </div>

      {/* DOCUMENTS */}
      <h4>Documents</h4>

      <h5>ID Files</h5>
      <ul>
        {data.documents.idFiles?.map((file: File, i: number) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>

      <h5>Certificates</h5>
      <ul>
        {data.documents.certFiles?.map((file: File, i: number) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>

      <div className="form-actions">
        <button type="button" className="back" onClick={onBack}>Previous</button>
        <button type="button" className="next">Submit for Verification</button>
      </div>
    </section>
  );
};

export default ReviewForm;