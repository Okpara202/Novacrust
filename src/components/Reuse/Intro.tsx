function Intro({ introText }: { introText: string }) {
  return (
    <aside className="grid grid-cols-3">
      {/* Step 2 Header */}
      <img
        src="/public/ArrowLeft.png"
        alt="Back icon"
        className="cursor-pointer"
      />
      <p className="font-medium text-xl text-green leading-[100%]">
        {introText}
      </p>
    </aside>
  );
}

export default Intro;
