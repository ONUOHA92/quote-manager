export default function Section() {
  return (
    <div className="border-b bg-[#FAFAFA] border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
      <div className="container mx-auto sm:px-2 md:px-4 lg:px-8 xl:px-20">
        <h3 className="text-base py-5 font-semibold leading-6 text-gray-900">
          Job Postings
        </h3>
      </div>

      <div className="mt-3 flex px-10 py-4 sm:ml-4 sm:mt-0">
        <button
          type="button"
          className="border border-[#F3F4F6] w-[150px] px-4 py-3  text-sm bg-[#FFFFFF] text-[#6B7280]"
        >
          Save as draft
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-md bg-indigo-600  text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Preview
        </button>
      </div>
    </div>
  );
}
