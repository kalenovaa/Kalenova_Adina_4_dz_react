import React from "react";
import {useEffect, useState} from "react";
import './App.css'

export default function Form(){
    const [form, SetForm] = useState({
        firstName: 'Adina',
        Surname: "Kalenova",
        email: "@123gmail.com",
    });
    return(
        <>
           <label>
                First Name:
                <input value={form.firstName}
                onChange={e =>
                    {SetForm({...form, firstName: e.target.value});
                }}
                />
           </label>
            <label>
                Surname:
                <input value={form.Surname}
                onChange={e =>
                    {SetForm({...form, Surname: e.target.value});
                }}
                />
            </label>
            <label>
                Email:
                <input value={form.email}
                onChange={e =>
                    {SetForm({...form, email: e.target.value});
                }}
                />
            </label>
            <p>
                {form.firstName} {''}
                {form.Surname} {''}{form.email} {''}
            </p>
        </>
    )
}
