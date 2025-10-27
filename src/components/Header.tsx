function Header() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="bg-amber-400 flex">
          <div className="flex  gap-2">
            <img
              className="rounded-full w-[150px]"
              src="https://placehold.co/400"
              alt=""
            />
            <div className="flex flex-col gap-2  ">
              <h1 className="text-2xl poppins ">Sabor da Massa</h1>
              <p className="text-[10px] tracking-tight poppins">
                Rua Fernando Leite Mendes, 105 - São Sebastião Ilhéus BA
                45653-778
              </p>
              <p className="text-[10px] tracking-tight poppins">
                Pedido minimo: 18,00
              </p>
            </div>
          </div>
        </div>
        <div className="bg-amber-500">2</div>
      </div>
    </div>
  );
}

export default Header;
