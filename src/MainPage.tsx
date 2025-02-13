import { useEffect, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
const MainPage = () => {
  const [step, setStep] = useState(() => {
    return Number(sessionStorage.getItem("step")) || 1;
  });
  useEffect(() => {
    sessionStorage.setItem("step", step.toString());
  }, [step]);
  return (
    <>
      {step === 1 ? (
        <StepOne step={step} setStep={setStep} />
      ) : step === 2 ? (
        <StepTwo step={step} setStep={setStep} />
      ) : (
        <StepThree step={step} setStep={setStep} />
      )}
    </>
  );
};

export default MainPage;
