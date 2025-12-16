import Input from "../Reuse/Input";
import Intro from "../Reuse/Intro";

function RecipientDetails() {
  return (
    <div className="">
      {/* Step 2 Header */}
      <Intro introText="Recipient details" />

      <div className="mt-10 flex flex-col gap-8">
        {/* Bank Name */}
        <div className="flex flex-col gap-4 ">
          <label className="text-base font-medium text-green">Bank</label>
          <select className="border border-formBorder rounded-[30px] px-[16px] py-[24px] w-full text-green">
            <option value="">Select an option</option>
          </select>
        </div>

        {/* Account Number */}
        <Input
          type="text"
          label="Account number"
          placeholder="Enter your account number"
        />

        {/* Account Name */}
        <Input
          type="text"
          label="Account name"
          placeholder="Enter your account name"
        />
      </div>
    </div>
  );
}

export default RecipientDetails;
