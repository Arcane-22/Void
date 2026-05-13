import { useRef } from "react";
import "../css/ProfessionalForm.css";

type Props = { onNext: () => void; onBack: () => void };

const DocumentsForm = ({ onNext, onBack }: Props) => {
  const idRef = useRef<HTMLInputElement>(null);
  const certRef = useRef<HTMLInputElement>(null);

  return (
    <section className="form-section">
      <h3 className="form-title">Upload Documents</h3>
      <form className="verification-form" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <div className="files">
            <div className="file">
            <label>Identity Proof (jpg, png or pdf) *</label>
            <input ref={idRef} type="file" accept=".jpg,.jpeg,.png,.pdf" style={{ display: "none" }} />
            <button type="button" onClick={() => idRef.current?.click()}>Upload</button>
            </div>

            <div className="file">
            <label>Academic Certificates (jpg, png or pdf) *</label>
            <input ref={certRef} type="file" accept=".jpg,.jpeg,.png,.pdf" multiple style={{ display: "none" }} />
            <button type="button" onClick={() => certRef.current?.click()}>Upload</button>
            </div>
        </div>
        <div className="form-actions">
          <button type="button" className="back" onClick={onBack}>Previous</button>
          <button type="submit" className="next">Next</button>
        </div>
      </form>
    </section>
  );
};

export default DocumentsForm;