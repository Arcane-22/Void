type Props = { onBack: () => void; };

const ReviewForm = ({ onBack }: Props) => {
  return (
    <section className="form-section">
      <h3 className="form-title">Review Your Information</h3>
      {/* summary goes here */}
      <div className="form-actions">
        <button type="button" className="back" onClick={onBack}>Previous</button>
        <button type="button" className="next">Submit</button>
      </div>
    </section>
  );
};

export default ReviewForm;