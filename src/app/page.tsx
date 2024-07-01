"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { useState } from "react";
import QuoteDrawer from "./components/QuoteDrawer";

const events = [
  {
    title: "Event 1",
    start: "2024-06-01",
    quoteNumber: "5 Quotes",
    total: "$23,045.00",
  },
  {
    title: "Event 2",
    start: "2024-06-02",
    quoteNumber: "5 Quotes",
    total: "$10,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-03",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-04",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-05",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-06",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-07",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-08",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-09",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-10",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-11",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-12",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-13",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-14",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-15",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-16",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-17",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-18",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-19",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-20",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-21",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-22",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-23",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-24",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-25",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },

  {
    title: "Event 3",
    start: "2024-06-26",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-27",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-28",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-29",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  {
    title: "Event 3",
    start: "2024-06-30",
    quoteNumber: "Quote #003",
    total: "$5,000.00",
  },
  // Add more events as needed within June 2024
];

function renderEventContent(eventInfo: any) {
  return (
    <div className="mr-3 px-3 pt-3">
      <p className="text-[#374151]">
        {eventInfo.event.extendedProps.quoteNumber}
      </p>
      <p className="bg-[#98FF9B40] mt-3 text-black p-1">
        {eventInfo.event.extendedProps.total}
      </p>
    </div>
  );
}

export default function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState<null>(null);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  // Function to handle event click
  const handleEventClick = (clickInfo: any) => {
    setSelectedEvent(clickInfo.event); // Store clicked event data
    setDrawerOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setDrawerOpen(false);
  };
  return (
    <div className="container mx-auto mt-20">
      <div>
        <h2 className="text-[#1F2937]">All Existing Quotes</h2>
        <p className="text-[#6B7280]">View all created quotes</p>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={events}
        eventContent={renderEventContent}
        eventClassNames="custom-event"
        initialView="dayGridMonth"
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
        }}
        eventClick={handleEventClick} // Handle event click
      />

      {/* QuoteDrawer component for displaying event details */}
      <QuoteDrawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        // selectedEventId={selectedEvent ? selectedEvent.id : null} // Pass selected event ID
      />
    </div>
  );
}
