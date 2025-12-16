import { useState } from "react";

import "./App.css";
import CryptoToCash from "./components/checkoutform/CryptoToCash";
import Button from "./components/Reuse/Button";
import RecipientDetails from "./components/checkoutform/RecipientDetails";
import RecipientEmail from "./components/checkoutform/RecipientEmail";
import PreviewCrypto from "./components/checkoutform/PreviewCrypto";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const totalSteps = 5;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final form submission
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  // const handleBack = () => {
  //   if (currentStep > 1) {
  //     setCurrentStep(currentStep - 1);
  //   }
  // };

  return (
    <main className="flex flex-col min-h-screen mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col w-[90%] sm:w-[85%] md:w-[80%] max-w-[530px] mx-auto"
      >
        <div className="flex-1">
          {/*  step content */}
          {currentStep === 1 && <CryptoToCash />}
          {currentStep === 2 && <RecipientDetails />}
          {currentStep === 3 && <RecipientEmail />}
          {currentStep === 4 && <PreviewCrypto />}
          {currentStep === 5 && (
            <div className="mt-6">{/* Step 4 content */}</div>
          )}
        </div>

        <div className="sticky bottom-0 py-4 bg-white">
          {currentStep < 5 ? (
            <Button
              onClick={handleNext}
              text={
                currentStep === 1
                  ? "Convert now"
                  : currentStep === 4
                    ? "I have sent it"
                    : "Next"
              }
              className="w-full"
            />
          ) : (
            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 py-3 px-6 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </form>
    </main>
  );
}

export default App;
