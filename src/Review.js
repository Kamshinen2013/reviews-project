import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const {name, job, image, text} = people[index]


  const checkNumber = (number) =>{
    if(number > people.length -1){
      return 0 //if we are at the last item, lets go to the first item
    }
    if(number < 0){
      return people.length-1 //if we get to the first item, lets go back to the last
    }
    return number // else return number
  }
const nextPerson = () => {
  setIndex((index)=>{
    let newIndex = index +1;
    return checkNumber(newIndex)
  })
} 

const prevPerson = () => {
  setIndex((index)=>{
    let newIndex = index-1;
    return checkNumber(newIndex)
  })
} 

const randomPerson = () => {
  let randomNumber = Math.floor(Math.random() * people.length);
  if(randomNumber === index){
    setIndex(randomNumber +1)
  }
  setIndex(randomNumber);

} 

return ( <article className='review' >
    <div className='img-container' >
      <img src={image} alt={name} className='person-img'/>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'> {name}</h4>
    <p className='job'>{job}</p>
    <section className='review-text'> 
      <p className='info'>{text}</p>
    </section>
    <div className='button-container'>
      <button className='prev-btn' onClick= {prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick= {nextPerson} >
        <FaChevronRight />
      </button>
      </div>
        <button className='random-btn' onClick= {randomPerson}>
          Randomly See Reviews
        </button>
  </article>
  )
};

export default Review;
