import Form from "../Form";

function ThemeSection() {
  return (
    <section>
      <div className="relative">
        <img src="/public/images/desktop/UA_Theme_2_DT.jpg" alt="theme image" />

        {/* Desktop */}
        <Form className="hidden md:block absolute top-1/2 left-10/12 -translate-x-1/2 -translate-y-1/2"/>

        {/* Mobile */}
        <Form className="block md:hidden pt-8"/>
      </div>
    </section>
  );
}

export default ThemeSection;
