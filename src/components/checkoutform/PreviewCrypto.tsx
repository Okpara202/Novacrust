import Intro from "../Reuse/Intro";

function PreviewCrypto() {
  return (
    <div>
      <Intro introText="Send ETH to the address below" />

      <div>
        {/* Wallet address */}
        <div>
          <p>4LiV4YjbxsL6739MKghUd</p>
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default PreviewCrypto;
