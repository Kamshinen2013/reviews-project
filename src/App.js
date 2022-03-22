import React from 'react';
import Review from './Review';
import Footer
 from './Footer';
function App() {
  return (
  <main>
    <section>
      <div className='title'>
        <h2>Our reviews</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </section>
    < Footer />
  </main>
  )
}

export default App;
