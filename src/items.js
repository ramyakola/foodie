import React from 'react';
import ReactDOM from 'react-dom';
import Categories from './categories';
import food from './images/foodone.jpg';
import nutri from './images/nutri.jpg';
import three from './images/foodthree.png';
import two from './images/foodtwo.jpg';

// import food from './images/foodone.jpg';


function Items(){
        return(
     <div className='items'>
     <main>
     <section id="fav">
            <h2> Your favourite items visited </h2>

            <article class="cards">
                <div class="img-holder">
                        <img src={food} alt="Food" aria-label="sofa-set"/>
                        
                </div>
                <h3> Nutrients <i class="fa fas fa-star "></i> </h3>
                <button type="button" class="">Order Now</button>
            </article>

            <article class="cards">
                <div class="img-holder">
                    <img src={nutri} alt="Sofa" aria-label="sofa-set"/>
                </div>
                <h3> Salads <i class="fa fas fa-star "></i></h3>
                <button type="button" class="">Order Now</button>
            </article>

            <article class="cards">
                <div class="img-holder">
                    <img src={three} alt="Sofa" aria-label="sofa-set"/>
                </div>
                <h3> Frankies <i class="fa far fa-heart "></i></h3>
                <button type="button" class="">Order Now</button>
            </article>

            <article class="cards">
                <div class="img-holder">
                    <img src={two} alt="Fast" aria-label="sofa-set"/>
                </div>
                <h3> Fast Food <i class="fa fas fa-heart"> </i> </h3>
                <button type="button" class="">Order Now</button>
            </article>

        </section>
      
        </main>
     </div>
        );
}

export default Items;