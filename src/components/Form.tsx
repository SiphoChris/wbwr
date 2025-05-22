import Button from "./ui/Button";

type formProps = {
  className?: string;
};

function Form({ className }: formProps) {
  return (
    <form className={className}>
      <div className="space-y-6 px-4 form-text">
        <p className="md:text-white font-plak-bold text-[14] md:text-[16px] -mb-0.5">
          Project Rock
        </p>
        <h2 className="md:text-white font-plak-condensed text-[40px] md:text-[64px] md:leading-10 lg:leading-18">
          Every Side <br />
          Of Strong
        </h2>
        <p className="md:text-white font-plak-regular text-[14px] lg:w-[46ch]">
          The Underground collection is inspired by the idea of a Project Rock
          fight club. A place where we push each other harder to make each other
          stronger. A drop dedicated to you and your crew. The neon colourways
          are a reflection of the energy we bring to every rep, every set and
          every challenge.
        </p>
        <Button classNames="max-md:w-full md:bg-transparent border-1 md:border-white hover:bg-white hover:text-black font-plak-regular md:text-[16px]">
          Shop Project Rock
        </Button>
      </div>
    </form>
  );
}

export default Form;
