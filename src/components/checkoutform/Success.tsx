function Success() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img src="/novaIcon.svg" alt="Nova icon" />
      </div>

      <div className="flex items-center justify-center mt-15">
        <img src="/success.svg" alt="Success icon" />
      </div>

      <div className="text-center px-4 sm:px-0">
        <p className="font-medium text-xl sm:text-2xl text-black mt-6 sm:mt-8">
          Your transaction is processing.
        </p>
        <p className="text-lg sm:text-xl text-comingSoon mt-2 mb-8 sm:mb-10">
          The recipient will receive it shortly.
        </p>
      </div>

      <div className="rounded-xl py-3 sm:py-4 px-4 sm:px-6 flex justify-between items-center bg-selectBg mx-4 sm:mx-0">
        <p className="text-comingSoon text-xs sm:text-sm">Transaction ID</p>
        <aside className="text-sm sm:text-base text-green flex items-center gap-2">
          <span>NC123456789</span>
          <img
            src="/Copy.svg"
            alt="copy icon"
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
        </aside>
      </div>

      <div className="text-center px-4 sm:px-0">
        <button className="text-sm sm:text-base text-green font-bold mt-8 sm:mt-10 hover:underline">
          Go back to home
        </button>
      </div>
    </div>
  );
}

export default Success;
