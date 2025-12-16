import Input from "../Reuse/Input";
import Intro from "../Reuse/Intro";

function RecipientEmail() {
  return (
    <div>
      <Intro introText="Recipient email" />

      <div className="mt-10 flex flex-col gap-6 md:gap-8">
        <Input
          type="email"
          label="Recipient email"
          placeholder="Enter recipient email"
        />

        <div className="flex flex-col gap-4">
          <label className="text-sm md:text-base font-medium text-green">
            Recipient phone number
          </label>
          <div className="flex w-full border border-formBorder rounded-[30px] overflow-hidden focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent transition-all duration-200">
            <select
              className="w-32 md:w-36 px-3 md:px-4 text-center text-green border-r border-formBorder focus:outline-none"
              aria-label="Country code"
              defaultValue="+234"
            >
              {/* ToDo: ADD Image */}
              <option value="+234">
                +234 <img src="" />
              </option>
              <option value="+1">+1 </option>
              <option value="+44">+44 </option>
            </select>
            <input
              type="tel"
              className="flex-1 px-4 py-3 md:px-6 md:py-4 text-base md:text-lg text-green focus:outline-none"
              placeholder="000 000 0000"
              pattern="[0-9]{10}"
              aria-required="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipientEmail;
