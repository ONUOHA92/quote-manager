"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { useDispatch, useSelector } from "react-redux";
import { createQuoteRequest } from "@/app/redux/slices/quoteSlice";
import { toast } from "react-toastify";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { RootState } from "@/app/redux/store";

export default function CreateModal(props: any) {
  const [open, setOpen] = useState(true);
  const { openQuoteModal, setQuoteModel } = props;
  const [quoteTitle, setQuoteTitle] = useState<string>("");
  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const [sections, setSections] = useState<any[]>([]);

  const dispatch = useDispatch();
  const quoteState = useSelector((state: RootState) => state.quote);
  const router = useRouter(); // Initialize useRouter hook for navigation
  const pathname = usePathname();
  const query = useSearchParams();
  // const router = useRouter(); // Initialize useRouter hook for navigation

  // const handleSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();

  //   // Combine date and time for quote_date
  //   const todayDate = new Date().toISOString().split("T")[0]; // Gets the current date in YYYY-MM-DD format
  //   const quoteDate = new Date(`${todayDate}T00:00:00.000Z`).toISOString();

  //   const payload: any = {
  //     quote_title: quoteTitle,
  //     quote_date: quoteDate,
  //   };

  //   // dispatch(createQuoteRequest(payload));

  //   // Optionally clear form fields
  //   setQuoteTitle("");
  //   setStartTime("");
  //   setEndTime("");

  //   setQuoteModel(false);
  // };

  // useEffect(() => {
  //   if (quoteState.error) {
  //     toast.error("Failed to create quote. Please try again later.");
  //   } else if (quoteState.message) {
  //     // console.log("Response from API:", quoteState);
  //     toast.success(quoteState.message);
  //     router.push(`/add-section/${quoteState.id}`);
  //   }
  // }, [quoteState]);

  return (
    <Dialog
      className="relative z-10"
      open={openQuoteModal}
      onClose={setQuoteModel}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
              <button
                type="button"
                className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setQuoteModel(false)}
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="text-base ">
                  Create New Quote
                </DialogTitle>
                <DialogTitle
                  as="p"
                  className="text-base mt-3 font-[400]  text-[12px] leading-6 text-[#6B7280]"
                >
                  Enter quote name and time
                </DialogTitle>

                <div className="border-t border-gray-200"></div>
                <div className="mt-5">
                  <form>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Enter Quote Title
                      </label>
                      <div className="mt-2">
                        <input
                          id="quote_title"
                          name="quote_title"
                          type="text"
                          value={quoteTitle}
                          onChange={(e) => setQuoteTitle(e.target.value)}
                          placeholder="Enter quote title here"
                          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-4">
                      <div className="col-span-1">
                        <label
                          htmlFor="start_date"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Start time
                        </label>
                        <input
                          id="start_time"
                          name="start_time"
                          type="time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="col-span-1">
                        <label
                          htmlFor="end_time"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          End time
                        </label>
                        <input
                          id="end_time"
                          name="end_time"
                          type="time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="mt-20">
                      <button
                        type="submit"
                        className=" w-full justify-center rounded-md bg-[#007003] px-3 py-2 text-sm font-semibold text-white shadow-sm "
                      >
                        Create New Quote
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={() => setQuoteModel(false)}
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
