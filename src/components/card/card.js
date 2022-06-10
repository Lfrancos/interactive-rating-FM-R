import React, {useState} from 'react';
import { Ratings } from '../Ratings/Ratings';
import {ThankYou} from '../ThankYou/ThankYou';
import './card.css';

export const Card = () => {
    const [rating, setRating] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const getRating = (rate) => {


        setRating(rate); // this will get the rating that the user selects
        // console.log(rating);
        if(rate > 0) {
            document.querySelector('.btn').classList.remove('disabled');
            document.querySelector('.btn').removeAttribute('disabled');
        }

        const ratings = document.querySelectorAll('.card__value'); //this selects all the buttons in an array so that I can change the color easily
        ratings.forEach(button => button.classList.remove('orange'));// this is going to remove the class orange form all of the elements in the array

        // this will go trough the array and add a class of orange so you can better visualize the rating that you selected.
        for (let i = 0 ; i <= rate - 1 ; i++) {
        ratings[i].classList.add('orange');
        }
    }

    const handleSubmitted = (value) => {
        // if the user selected a rating they will be able to submit the form.
        if (rating > 0) {
            setSubmitted(value);

        } else {
            if (document.querySelector('.error')) {
                return document.querySelector('.error').remove;
            }
            const p = document.createElement('p');
            p.innerText = 'Select a rating to be able to submit';
            p.classList.add('error')
            document.querySelector('.card--rating').appendChild(p)
        }
    }

    // the code below is what is going to render
    if (submitted === true) {

        return (
            <main className='card'>
                <ThankYou rating={rating} />
            </main>
        )
    }
    return (
        <main className='card'>
            <Ratings getRating={getRating} submitted={handleSubmitted} />
            {/* <Error /> */}
        </main>
    )
}