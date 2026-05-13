import { useState } from "react";
import PersonalForm from "../Verification/PersonalForm";
import ProfessionalForm from "../Verification/ProfessionalForm";
import DocumentsForm from "../Verification/DocumentsForm";
import ReviewForm from "../Verification/ReviewForm";

const VerificationPage = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    personal: {},
    professional: {},
    documents: {},
  });

  const updatePersonal = (data: any) => {
    setFormData((prev) => ({
      ...prev,
      personal: data,
    }));
  };

  const updateProfessional = (data: any) => {
    setFormData((prev) => ({
      ...prev,
      professional: data,
    }));
  };

  const updateDocuments = (data: any) => {
    setFormData((prev) => ({
      ...prev,
      documents: data,
    }));
  };

  return (
    <main className="verify-page">
      <nav className="stepper">
        <ol className="stepper-list">
          <li className={`milestone ${step >= 1 ? "active" : ""}`}>
            <span className="milestone-number">1</span>
            <span className="milestone-label">Personal</span>
          </li>
          <li className={`milestone ${step >= 2 ? "active" : ""}`}>
            <span className="milestone-number">2</span>
            <span className="milestone-label">Professional</span>
          </li>
          <li className={`milestone ${step >= 3 ? "active" : ""}`}>
            <span className="milestone-number">3</span>
            <span className="milestone-label">Documents</span>
          </li>
          <li className={`milestone ${step >= 4 ? "active" : ""}`}>
            <span className="milestone-number">4</span>
            <span className="milestone-label">Review</span>
          </li>
        </ol>
      </nav>

      {step === 1 && (
        <PersonalForm
          onNext={() => setStep(2)}
          onSave={updatePersonal}
        />
      )}

      {step === 2 && (
        <ProfessionalForm
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
          onSave={updateProfessional}
        />
      )}

      {step === 3 && (
        <DocumentsForm
          onNext={() => setStep(4)}
          onBack={() => setStep(2)}
          onSave={updateDocuments}
        />
      )}

      {step === 4 && (
        <ReviewForm
          onBack={() => setStep(3)}
          data={formData}
        />
      )}
    </main>
  );
};

export default VerificationPage;