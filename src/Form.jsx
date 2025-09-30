export default function Form() {
  return (
    <form>
      <div className="grid grid-cols-2 mb-2 rounded *:p-2 outline outline-neutral-300 -outline-offset-1 divide-x divide-neutral-300 focus-within:outline-2 focus-within:outline-sky-500">
        <input type="text" className="block w-full outline-0" placeholder="Name" name="name" autoComplete="off" />
        <input type="number" className="block w-full outline-0" placeholder="Cost" name="cost" autoComplete="off" />
      </div>
      <div className="flex justify-end gap-2">
        <button className="block px-3 py-1 bg-neutral-400 text-white font-semibold rounded cursor-pointer">Reset</button>
        <button className="block px-3 py-1 bg-sky-500 text-white font-semibold rounded cursor-pointer">Add</button>
      </div>
    </form>
  );
}