function Main({children}: React.PropsWithChildren) {
  return (
    <main className="w-full mx-auto px-32 space-y-[60px]">
      {children}
    </main>
  )
}

export default Main