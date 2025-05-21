function Main({children}: React.PropsWithChildren) {
  return (
    <main className="w-full mx-auto sm:px-8 md:px-20 lg:px-46 space-y-[60px]">
      {children}
    </main>
  )
}

export default Main