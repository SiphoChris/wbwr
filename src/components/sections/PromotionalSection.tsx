function PromotionalSection({ children }: React.PropsWithChildren) {
  return (
    <section className="mx-auto w-10/12">
      <div>{children}</div>
    </section>
  );
}

export default PromotionalSection;
