import Input from "./Input";

function ComingSoon({
  upText,
  downText,
}: {
  upText: string;
  downText: string;
}) {
  return (
    <div className="flex flex-col gap-8">
      <aside className="mt-[81px] text-center">
        <p className="text-3xl text-center font-medium text-green mb-4">
          Coming Soon!
        </p>

        <p className="text-xl leading-[150%] text-comingSoon">{upText}</p>
        <p className="text-xl leading-[150%] text-comingSoon">{downText}</p>
      </aside>

      <Input type="email" label="Email" placeholder="Enter your email" />
    </div>
  );
}

export default ComingSoon;
