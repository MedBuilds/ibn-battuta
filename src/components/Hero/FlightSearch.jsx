import { useState } from "react";

function FlightSearch() {
    const [tripType, setTripType] = useState("round-trip");
    const [passengers, setPassengers] = useState("1-passenger");
    const [flightClass, setFlightClass] = useState("economy");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    function saveTripType(event) {
        setTripType(event.target.value);
    }

    function savePassengers(event) {
        setPassengers(event.target.value);
    }

    function saveFlightClass(event) {
        setFlightClass(event.target.value);
    }

    function saveOrigin(event) {
        setOrigin(event.target.value);
    }

    function saveDestination(event) {
        setDestination(event.target.value);
    }

    function saveDepartureDate(event) {
        setDepartureDate(event.target.value);
    }

    function saveReturnDate(event) {
        setReturnDate(event.target.value);
    }

    return (
        <form className="flex flex-col justify-between w-full md:w-4/5 bg-white/50 rounded-xl p-3 caret-primary gap-5">
            <div className="flex justify-between items-center gap-2">
                {/* Trip Type */}
                <div className="flex items-center gap-2">
                    <select
                        name="trip-type"
                        id="tripType"
                        onChange={saveTripType}
                        value={tripType}
                        className="sm:hidden px-2 py-1 rounded-lg bg-blue-50 text-sm"
                    >
                        <option value="round-trip">Round Trip</option>
                        <option value="one-way">One Way</option>
                    </select>
                    <button
                        type="button"
                        className={`${
                            tripType === "round-trip"
                                ? "bg-blue-50 text-primary"
                                : "hover:bg-blue-50/50 text-gray-700"
                        } hidden sm:block px-2 py-1 rounded-lg cursor-pointer transition duration-200`}
                        onClick={() => setTripType("round-trip")}
                    >
                        Round Trip
                    </button>
                    <button
                        type="button"
                        className={`${
                            tripType === "one-way"
                                ? "bg-blue-50 text-primary"
                                : "hover:bg-blue-50/50 text-gray-700"
                        } hidden sm:block px-2 py-1 rounded-lg cursor-pointer transition duration-200`}
                        onClick={() => setTripType("one-way")}
                    >
                        One Way
                    </button>
                </div>

                {/* Passengers & class */}
                <div className="flex items-center gap-2">
                    <div
                        className={`flex items-center text-sm sm:text-md ${
                            passengers === "more" && "gap-1"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                        {passengers !== "more" ? (
                            <select
                                name="passengers"
                                id="passengers"
                                className="px-2 py-1 rounded-lg appearance-none cursor-pointer"
                                onChange={savePassengers}
                                value={passengers}
                            >
                                <option value="1-passenger">1 Passenger</option>
                                <option value="2-passengers">
                                    2 Passengers
                                </option>
                                <option value="more">More</option>
                            </select>
                        ) : (
                            <input
                                type="number"
                                min="1"
                                name="passengers"
                                placeholder="Passengers.."
                                className="outline-none bg-blue-50 p-1 rounded-lg w-30"
                            />
                        )}
                    </div>
                    <div className="flex items-center text-sm sm:text-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-armchair preview-icon size-4"
                        >
                            <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                            <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
                            <path d="M5 18v2" />
                            <path d="M19 18v2" />
                        </svg>
                        <select
                            name="flight-class"
                            id="flightClass"
                            className="px-2 py-1 rounded-lg appearance-none cursor-pointer"
                            onChange={saveFlightClass}
                            value={flightClass}
                        >
                            <option value="economy">Economy</option>
                            <option value="premium-economy">Premium</option>
                            <option value="business-class">Business</option>
                            <option value="first-class">First Class</option>
                        </select>
                    </div>
                </div>
            </div>

            <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                    tripType === "round-trip"
                        ? "lg:grid-cols-4"
                        : "lg:grid-cols-3"
                } gap-2`}
            >
                {/* Origin */}
                <label className="flex flex-col gap-2 cursor-pointer bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-1 text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plane-takeoff preview-icon size-4 text-primary/60"
                        >
                            <path d="M2 22h20" />
                            <path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" />
                        </svg>
                        Origin
                    </div>
                    <input
                        type="text"
                        value={origin}
                        onChange={saveOrigin}
                        placeholder="City or airport"
                        className="w-full outline-none p-1 bg-primary/5 rounded focus:border-b focus:border-primary"
                    />
                </label>

                {/* Destination */}
                <label className="flex flex-col gap-2 cursor-pointer bg-white p-3 rounded-lg">
                    <div className="flex items-center gap-1 text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-plane-landing preview-icon size-4 text-primary/60"
                        >
                            <path d="M2 22h20" />
                            <path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" />
                        </svg>
                        Destination
                    </div>
                    <input
                        type="text"
                        value={destination}
                        onChange={saveDestination}
                        placeholder="City or airport"
                        className="w-full outline-none p-1 bg-primary/5 rounded focus:border-b focus:border-primary"
                    />
                </label>

                {/* Departure Date */}
                <label
                    className={`flex flex-col gap-2 cursor-pointer bg-white p-3 rounded-lg ${
                        tripType === "one-way" && "sm:col-span-2 lg:col-span-1"
                    }`}
                >
                    <div className="flex items-center gap-1 text-gray-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-calendar preview-icon size-4 text-primary/60"
                        >
                            <path d="M8 2v3" />
                            <path d="M16 2v3" />
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M3 9h18" />
                        </svg>
                        Departure Date
                    </div>
                    <input
                        type="date"
                        value={departureDate}
                        onChange={saveDepartureDate}
                        className="w-full outline-none p-1 bg-primary/5 rounded focus:border-b focus:border-primary"
                    />
                </label>

                {/* Return Date */}
                {tripType === "round-trip" && (
                    <label className="flex flex-col gap-2 cursor-pointer bg-white p-3 rounded-lg">
                        <div className="flex items-center gap-1 text-gray-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-calendar preview-icon size-4 text-primary/60"
                            >
                                <path d="M8 2v3" />
                                <path d="M16 2v3" />
                                <rect
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="2"
                                />
                                <path d="M3 9h18" />
                            </svg>
                            Return Date
                        </div>
                        <input
                            type="date"
                            value={returnDate}
                            onChange={saveReturnDate}
                            className="w-full outline-none p-1 bg-primary/5 rounded focus:border-b focus:border-primary"
                        />
                    </label>
                )}
            </div>

            <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 text-primary"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-700 font-light">
                        Best Price · Secure Booking
                    </span>
                </div>

                <button
                    type="submit"
                    className="flex items-center gap-2 text-white bg-primary px-4 py-2 rounded-lg cursor-pointer transition duration-300 hover:scale-98 text-nowrap"
                >
                    Search Flights
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
}

export default FlightSearch;
