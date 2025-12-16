import Intro from "../Reuse/Intro";

function PreviewCrypto() {
  return (
    <div>
      <Intro introText="Send ETH to the address below" />

      <section>
        {/* Wallet address */}
        <div className=" bg-lightBlue flex items-center gap-2 py-2 px-4 mx-auto  rounded-[30px] font-medium text-green max-w-[250px] mt-10 mb-16">
          <span>4LiV4YjbxsL6739MKghUd</span>
          <button>
            <img src="/Copy.svg" alt="copy icon" />
          </button>
        </div>
      </section>

      {/* Preview Details */}
      <div className="rounded-xl py-4 px-6 bg-selectBg flex flex-col gap-6">
        <aside className="flex items-center justify-between">
          {/* Amount to send */}
          <p className="text-sm text-comingSoon">Amount to send</p>
          <button className="flex items-center gap-0.5">
            <span className="text-green">100 ETH</span>
            <img src="/Copy.svg" alt="copy icon" />
          </button>
        </aside>

        <aside className="flex items-center justify-between">
          {/* Network */}
          <p className="text-sm text-comingSoon">Network</p>
          <button className="flex items-center gap-0.5">
            <span className="text-green">ETH</span>
          </button>
        </aside>

        <aside className="flex items-center justify-between">
          {/* Wallet */}
          <p className="text-sm text-comingSoon">Wallet</p>
          <button className="flex items-center gap-0.5">
            <span className="text-green">Other</span>
          </button>
        </aside>
      </div>

      <div className="mt-6 flex items-center gap-2 ">
        {/* Warning */}
        <img src={"/infoIcon.svg"} alt="infoIcon" />
        <span className="text-comingSoon text-sm leading-5">
          Only send &#123;USDT&#125; to this address. Ensure the sender is on
          the &#123;CELO&#125; network otherwise you might lose your deposit
        </span>
      </div>
    </div>
  );
}

export default PreviewCrypto;
