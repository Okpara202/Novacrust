import { useState } from "react";

import "./App.css";
import CryptoToCash from "./components/checkoutform/CryptoToCash";
import Button from "./components/Button";
import RecipientDetails from "./components/checkoutform/RecipientDetails";

function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const totalSteps = 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle final form submission
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <main className="mt-4 sm:mt-6 md:mt-10 w-[90%] sm:w-[85%] md:w-[80%] mx-auto max-w-[512px]">
      <form onSubmit={handleSubmit}>
        {/* Step 1 */}
        {currentStep === 1 && (
          <div>
            <CryptoToCash />

            <Button onClick={handleNext} text="Convert now" />
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div>
            <RecipientDetails />

            <Button onClick={handleNext} text="Next" />
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div>
            {/* Step 3 header goes here */}
            <div className="mt-6">{/* Your step 3 form fields go here */}</div>

            <div className="flex gap-4">
              <button type="button" onClick={handleBack}>
                Back
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        )}
      </form>
    </main>
  );
}

export default App;
