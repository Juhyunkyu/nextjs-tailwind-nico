export default function Editprofile() {
  return (
    <div className="px-4 mt-10">
      <div className="flex items-center space-x-1">
        <div className="h-14 w-14 bg-slate-400 rounded-full" />
        <label className="cursor-pointer text-gray-600 border border-gray-700 rounded-md p-1 text-sm hover:border-orange-400">
          Edit
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>

      <div className="space-y-1 mt-4">
        <label htmlFor="email" className="text-gray-500 font-medium text-sm">
          email address
        </label>
        <input
          id="email"
          type="email"
          className="appearance-none w-full mt-1 p-2 border border-gray-700 rounded-md shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500  focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-1 mt-4">
        <label htmlFor="phon" className="text-gray-500 font-medium text-sm">
          phon number
        </label>
        <div className="mt-1 flex items-center">
          <span className=" border border-gray-400 text-gray-500 rounded-l-lg p-2">
            +82
          </span>
          <input
            id="phon"
            className="appearance-none w-full p-2 border border-l-0 border-gray-400 rounded-md rounded-l-none shadow-md placeholder-gray-400 focus:outline-none focus:ring-orange-500  focus:border-orange-500"
            type="number"
            required
          />
        </div>
      </div>
      <button className="mt-5 px-4 py-3 w-full bg-orange-400 hover:bg-orange-600 border border-transparent shadow-md rounded-md  text-white font-medium text-sm focus:bg-orange-600 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:outline-none">
        Update
      </button>
    </div>
  );
}
