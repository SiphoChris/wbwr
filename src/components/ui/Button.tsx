
function Button({children}: React.PropsWithChildren) {
  return (
    <button className="text-[12px] font-plak-regular py-4 px-8 bg-black text-white">
      {children}
    </button>
  )
}

export default Button