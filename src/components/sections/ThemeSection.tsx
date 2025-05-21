import Form from "../Form";

function ThemeSection() {
  return (
    <section>
      {/* Desktop */}
      <div className="relative hidden md:block">
        <img src="/images/desktop/UA_Theme_2_DT.jpg" alt="theme image" />
        <Form className="hidden lg:block absolute top-1/2 left-10/12 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Mobile */}
      <div className="relative md:hidden">
        <img src="/images/mobile/UA_Theme_2_MB.jpg" alt="theme image" />
        <Form className="block md:hidden pt-8" />
      </div>
    </section>
  );
}

export default ThemeSection;
