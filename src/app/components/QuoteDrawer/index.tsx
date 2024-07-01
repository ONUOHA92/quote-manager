"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import CreateModal from "../CreateModal";

const tabs = [
  { name: "All", href: "#", current: true },
  { name: "Online", href: "#", current: false },
  { name: "Offline", href: "#", current: false },
];

const datedata = [
  {
    day: "TODAY",
    date: "2/5/2024",
    whether: "55/40º",
  },
];

const quoteInfo = [
  {
    id: 1,
    amount: "$2,450.00",
    time: "4:00PM",
    heading: "Air Freight/ Ocean Freight/ CBT/ Haulage",
  },
  {
    id: 2,
    amount: "$2,450.00",
    time: "4:00PM",
    heading: "Air Freight/ Ocean Freight/ CBT/ Haulage",
  },
  {
    id: 3,
    amount: "$2,450.00",
    time: "4:00PM",
    heading: "Air Freight/ Ocean Freight/ CBT/ Haulage",
  },
  {
    id: 4,
    amount: "$2,450.00",
    time: "4:00PM",
    heading: "Air Freight/ Ocean Freight/ CBT/ Haulage",
  },
  // More people...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function QuoteDrawer(props: any) {
  const { drawerOpen, setDrawerOpen, selectedEventI } = props;
  const [openQuoteModal, setQuoteModel] = useState<boolean>(false);

  return (
    <Dialog className="relative z-10" open={drawerOpen} onClose={setDrawerOpen}>
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-sm transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full mt-[rem] flex-col overflow-y-scroll bg-[#1F2937] shadow-xl">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                        onClick={() => setDrawerOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-b border-gray-200">
                  <div className="px-6">
                    <nav className="mb-px">
                      {datedata.map((date) => (
                        <div key={date.date} className="flex justify-between">
                          <div className="flex gap-2 text-[#3B82F6]">
                            <p>{date.day}</p>
                            <p>{date.date}</p>
                          </div>
                          <div className="text-[#FFFFFFB2]">
                            <p>{date.whether}</p>
                          </div>
                        </div>
                      ))}
                    </nav>
                  </div>
                </div>
                <ul
                  role="list"
                  className="flex-1 divide-x divide-gray-200 overflow-y-auto"
                >
                  {quoteInfo.map((quote) => (
                    <li
                      key={quote.id}
                      className="hover:bg-[#D0F5FF]  text-[#D0F5FF] shadow-lg rounded-lg px-2  m-2 hover:text-[#374151]"
                    >
                      <div className="px-5 py-6">
                        <div className="flex justify-between">
                          <p className="">{quote.amount}</p>
                          <p className="">{quote.time}</p>
                        </div>
                        <div>
                          <p className="text-[#3B82F6]">{quote.heading}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setQuoteModel(true)}
                  className="bg-[#FFFFFF] mb-[5rem] m-2 rounded-md  h-[36px]"
                >
                  Add new quote
                </button>

                <CreateModal
                  openQuoteModal={openQuoteModal}
                  setQuoteModel={setQuoteModel}
                />
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
