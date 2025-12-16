function Intro({ introText }: { introText: string }) {
  return (
    <aside className="flex justify-between items-center">
      {/* Header */}
      <div className="max-w-[130px]">
        <img src="/ArrowLeft.png" alt="Back icon" className="cursor-pointer" />
      </div>
      <p className="font-medium text-xl text-green leading-[100%] w-full text-center">
        {introText}
      </p>
    </aside>
  );
}

export default Intro;
