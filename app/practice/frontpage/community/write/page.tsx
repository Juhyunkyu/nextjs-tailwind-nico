export default function Write() {
  return (
    <form className="px-4 mt-10">
      <textarea
        className="w-full rounded-lg border-gray-700 focus:border-orange-400 focus:ring-orange-400"
        rows={4}
        placeholder="Ask a question!"
      />
      <button className="w-full py-3 my-2 bg-orange-400 hover:bg-orange-600 border border-transparent shadow-md  rounded-md  text-white font-medium text-sm focus:bg-orange-600 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:outline-none">
        Submit
      </button>
    </form>
  );
}
