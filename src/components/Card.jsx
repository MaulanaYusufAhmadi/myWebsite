const Card = (props) => {
  const { children } = props;
  return (
    <div class="transition-all relative w-60 h-96 overflow-hidden my-16 hover:w-96 rounded-3xl bg-gray-700 shadow-xl ring-1 ring-gray-900/10">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="image"
        className="w-full h-full object-cover rounded-3xl"
      />
      <div className="absolute bottom-10 left-10">
        <button className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
          Selengkapnya
        </button>
        <p class="mt-6 text-base/7 text-gray-300">{children}</p>
      </div>
    </div>
  );
};

export default Card;
