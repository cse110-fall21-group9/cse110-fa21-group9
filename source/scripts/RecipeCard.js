class RecipeCard extends HTMLElement {
    constructor() {
      // Part 1 Expose - TODO
      // You'll want to attach the shadow DOM here
      super();
      const shadow = this.attachShadow({mode: 'open'});
    }
  
    set data(data) {
      // This is the CSS that you'll use for your recipe cards
    //   const styleElem = document.createElement('style');
    //   const styles = `
    //     * {
    //       font-family: sans-serif;
    //       margin: 0;
    //       padding: 0;
    //     }
        
    //     a {
    //       text-decoration: none;
    //     }
    //     a:hover {
    //       text-decoration: underline;
    //     }
        
    //     article {
    //       align-items: center;
    //       border: 1px solid rgb(223, 225, 229);
    //       border-radius: 8px;
    //       display: grid;
    //       grid-template-rows: 118px 56px 14px 18px 15px 36px;
    //       height: auto;
    //       row-gap: 5px;
    //       padding: 0 16px 16px 16px;
    //       width: 178px;
    //     }
    //     div.rating {
    //       align-items: center;
    //       column-gap: 5px;
    //       display: flex;
    //     }
        
    //     div.rating > img {
    //       height: auto;
    //       display: inline-block;
    //       object-fit: scale-down;
    //       width: 78px;
    //     }
    //     article > img {
    //       border-top-left-radius: 8px;
    //       border-top-right-radius: 8px;
    //       height: 118px;
    //       object-fit: cover;
    //       margin-left: -16px;
    //       width: calc(100% + 32px);
    //     }
    //     p.ingredients {
    //       height: 32px;
    //       line-height: 16px;
    //       padding-top: 4px;
    //       overflow: hidden;
    //     }
        
    //     p.organization {
    //       color: black !important;
    //     }
    //     p.title {
    //       display: -webkit-box;
    //       font-size: 16px;
    //       height: 36px;
    //       line-height: 18px;
    //       overflow: hidden;
    //       -webkit-line-clamp: 2;
    //       -webkit-box-orient: vertical;
    //     }
    //     p:not(.title), span, time {
    //       color: #70757A;
    //       font-size: 12px;
    //     }
    //   `;
    //   styleElem.innerHTML = styles;
  
      // Here's the root element that you'll want to attach all of your other elements to
      const card = document.createElement('article');
  
      let img = card.appendChild(document.createElement('img'));

      img.src = searchForKey(data,'thumbnailUrl');
      img.alt = searchForKey(data,'headline')
  
      // <p> Link and Title 
      let para = card.appendChild(document.createElement('p'));
      para.setAttribute('class', 'title');
  
      let link = para.appendChild(document.createElement('a'));
      link.setAttribute('href', searchForKey(data,'url'));
      link.textContent = searchForKey(data,'headline');
  
      // <p> Organization
      let para2 = card.appendChild(document.createElement('p'));
      para2.setAttribute('class', 'organization');
      para2.textContent = getOrganization(data);
  
      // <div> Rating & Reviews
      let div = card.appendChild(document.createElement('div'));
      div.setAttribute('class', 'rating');
      let span = div.appendChild(document.createElement('span'));
      let rating = searchForKey(data,'ratingValue');
      if (rating !== undefined) {
        span.textContent = rating;
  
        let ratingImg = div.appendChild(document.createElement('img'));
        rating = Math.round(parseFloat(rating));  
        ratingImg.src= `./assets/images/icons/${rating}-star.svg` ;
        ratingImg.alt = `${rating} stars`;
  
        let review = div.appendChild(document.createElement('span'));
        review.textContent = '(' + searchForKey(data,'ratingCount') + ')';
      } 
      else {
        span.textContent = 'No Reviews';
      }
  
      // <time> Total time
      let time = card.appendChild(document.createElement('time'));
      time.textContent = convertTime(searchForKey(data,'totalTime'));
  
      // <p> Ingredients
      let ingredient = card.appendChild(document.createElement('p'));
      ingredient.setAttribute('class', 'ingredients');
      ingredient.textContent = createIngredientList(searchForKey(data, 'recipeIngredient'));
  
      // Make sure to attach your root element and styles to the shadow DOM you
      // created in the constructor()
      this.shadowRoot.appendChild(card);
      this.shadowRoot.appendChild(styleElem);
      
      // Some functions that will be helpful here:
      //    document.createElement()
      //    document.querySelector()
      //    element.classList.add()
      //    element.setAttribute()
      //    element.appendChild()
      //    & All of the helper functions below
    }
  }
  
  