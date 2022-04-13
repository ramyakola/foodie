import React from 'react';
import vegg from './images/vegg.jfif';
import two from './images/foodtwo.jpg';
import photo from './images/photo.jfif';
import nutri from './images/nutri.jpg';
import veg from './images/veg.jpg';
import food from './images/food.jfif';
import thali from './images/thali.jpg';
import ppp from './images/ppp.jpg';
import halwa from './images/halwa.jpg';
import rice from './images/rice.jpg';


function Categories(){
        return(
<main>
         <div className='categories'>

             <section id="categories">
            <h2>Categories </h2>
            <div class="grid-container">
                <div class="images">
                    <figure class="grid-image grid-one">
                        <img src={vegg} alt="food" />
                    </figure>
                    <figure class="grid-image grid-eleven">
                        <img src={two} alt="food" />
                    </figure>
                    <figure class="grid-image grid-three" alt="food" >
                        <img src={photo} />
                    </figure>
                    <figure class="grid-image grid-four">
                        <img src={nutri} alt="food" />
                    </figure>
                    <figure class="grid-image grid-five">
                        <img src={veg} alt="food" />
                    </figure>
                    <figure class="grid-image grid-six">
                        <img src={food} alt="food" />
                    </figure>
                    <figure class="grid-image grid-eight">
                        <img src={thali} alt="food" />
                    </figure>
                    <figure class="grid-image grid-nine">
                        <img src={ppp} alt="food" />
                    </figure>
                    <figure class="grid-image grid-two">
                        <img src={halwa} alt="food" />
                    </figure>
                    <figure class="grid-image grid-ten">
                        <img src={rice} alt="food" />
                    </figure>
                </div>
            </div>
            
        </section>
       
  </div>
  </main> 

        );

}

export default Categories;