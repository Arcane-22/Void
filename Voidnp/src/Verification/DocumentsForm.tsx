import { useRef, useState } from "react";
import "../css/ProfessionalForm.css";

type Props = {
  onNext: () => void;
  onBack: () => void;
  onSave: (data: any) => void;
};

const DocumentsForm = ({ onNext, onBack, onSave }: Props) => {
  const idRef = useRef<HTMLInputElement>(null);
  const certRef = useRef<HTMLInputElement>(null);

  const [idFiles, setIdFiles] = useState<File[]>([]);
  const [certFiles, setCertFiles] = useState<File[]>([]);

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setIdFiles(files);
  };

  const handleCertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setCertFiles(files);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSave({
      idFiles,
      certFiles,
    });

    onNext();
  };

  return (
    <section className="form-section">
      <h3 className="form-title">Upload Documents</h3>

      <form className="verification-form" onSubmit={handleSubmit}>
        <div className="files">
          {/* ID */}
          <div className="file">
            <label>Identity Proof (jpg, png or pdf) *</label>

            <input
              ref={idRef}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              multiple
              style={{ display: "none" }}
              onChange={handleIdChange}
            />

            <button type="button" onClick={() => idRef.current?.click()}>
              Upload
            </button>

            {idFiles.length > 0 && (
              <ul className="file-list">
                {idFiles.map((file, idx) => (
                  <li key={idx} className="file-name">
                    {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Certificates */}
          <div className="file">
            <label>Academic Certificates (jpg, png or pdf) *</label>

            <input
              ref={certRef}
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              multiple
              style={{ display: "none" }}
              onChange={handleCertChange}
            />

            <button type="button" onClick={() => certRef.current?.click()}>
              Upload
            </button>

            {certFiles.length > 0 && (
              <ul className="file-list">
                {certFiles.map((file, idx) => (
                  <li key={idx} className="file-name">
                    {file.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="back" onClick={onBack}>
            Previous
          </button>

          <button type="submit" className="next">
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default DocumentsForm;