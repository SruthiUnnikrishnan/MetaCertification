import React, { useState } from 'react';
import Swal from 'sweetalert2';


const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("Birthday");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!guests) {
            alert("Please enter the number of guests")
            return false
        }

        if (!date) {
            alert("Please give a valid date")
            return false
        }

        if (!times) {
            alert("Please give a valid time")
            return false
        }

        Swal.fire("Reservation booked!");

    }


    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <header>
            <section>
                <form
                    noValidate
                    autoComplete="off">
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} type='date' onChange={(e) => { handleChange(e.target.value) }} required></input>
                        </div>


                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor='book-occasion' >Occasion:</label>
                            <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className='btnReceive'>
                            <button onClick={onSubmit} >Make your Reservations </button>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;