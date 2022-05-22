# Bootcamp Project - 1

Welcome! The main theme of this bootcamp project is to create an e-magazine website that utilizes HTML and CSS concepts that we've learned on our first 3 weeks.

I decided to do a redesign of an existing web application - [Playstation Studios](https://www.playstation.com/en-us/corporate/playstation-studios/)

The purposes and goal of this webpage are:

- Introduce PlayStation Studios as a global unit
- Showcase the PSS library
- Give a glimpse of upcoming games in development by PSS

Besides practicing my HTML and CSS knowledge, I'm also taking this opportunity to turn this project into a small case study. In this study, I ask three main questions and I can honestly say that the answers I've found has helped me become a better web developer. If you're a beginner like me as well, I hope you pick up a few things from this project.

The problems :

- Is it worth it to overhaul a web application's structure if you don't have a specific theme or full web page design in place? (I.E. A web page design professionally made by a designer or a solid theme/layout you made as a design principle to be followed when structuring the web application)
- Is Sass a technology you should use even if you're just starting out your web development path?
- Should you use Javascript libraries on your smaller projects like this?

Click <a href="#conclusion">here</a> if you want to skip the contents and check out my conclusions.

## Technologies and concepts used

Technologies

- HTML
- CSS/SASS
- Javascript

Concepts

- CSS/JS Page transitions ([Code Grind](https://www.youtube.com/watch?v=jEaN8PpyezM))
- Full page scroll ([fullPageScrollPureJS](https://www.cssscript.com/cross-platform-smooth-one-page-scrolling-pure-javascript/))
- Parallax tilt on hover ([tiltJS](https://gijsroge.github.io/tilt.js/))

Others

- Git/Github for version control
- Netlify for web hosting

### Hosting

Hosted on Netflify <br>  
<a target="_blank" href="https://argelmiralles-pss.netlify.app/">https://argelmiralles-pss.netlify.app/</a>

## Wireframe

![framework](https://i.ibb.co/0t35BgB/PSS.jpg)

## Home page (Index.html)

### Landing page section

![Landing page section preview](https://i.ibb.co/PMW3fYv/argelmiralles-pss-netlify-app-6.png)

We start of with a landing page section which looks pretty simple but this probably the part that required most logic implementations. There are two main highlights in this section.

- The image (PlayStation Studios logo) is on top of the landing page and has a tilt on hover effect.
  - To achieve the first feat, I simply created a div named overlay, set it to an absolute position sitting at top:0 and left:0 and have it a height and width of 100vh and 100vw. I then applied a background image and positioned/sized it accordingly.
  - ![overlayhtml](https://i.ibb.co/GdCDQ6k/landingoverlay.png)
  - The "data-tilt" above is the attribute used for tiltJS, which give the overlay div element the nice hover effect.
  - ![overlay-css](https://i.ibb.co/3yCzXNy/overlay-css.png)
- The overlay then zooms in and initializes/builds the rest of the page including the nav bar.
  - ![overlay-logic](https://i.ibb.co/2W7nZKz/overlayjspart1.png)
  - ![enter image description here](https://i.ibb.co/dQsQR8X/overlayjspart2.png)
  - ![zoom animation](https://i.ibb.co/Jxb6gS2/zoomcss.png)

Once we get past this logic intensive part, the actual landing page section is quite simple. This section highlights the a video reel of PSS products and a call to action button to take the user to the next section. As you can see, the Nav bar on the left is already available, as well as the navigation dots from fullPageScrollPureJS.
![actual landing page](https://i.ibb.co/NygbQWT/argelmiralles-pss-netlify-app-7.png)

### Nav Bar

I chose a collapsible navbar even on bigger screens because the whole home page is fairly straight forward to navigate. This component was a navbar example from [w3schools](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_overlay) but I tweaked a few things including:

- The width of the navbar overlay \*instead of directly changing the width property of the nav div on click, I created a nav-show class so I can freely control it according to the user's viewport
  - ![nav-js](https://i.ibb.co/TvP8Lqn/navjs.png)
  - ![nav-width-css](https://i.ibb.co/q0HMSmX/navcss.png)
- Added a functionality where the Navbar collapses back when the user clicks on one of the links within it.
  - ![collapseonclick](https://i.ibb.co/fHYtXdg/navclickcollaps.png)
- For UX purposes - the nav menu icon's default color is white, so for pages/page sections with white backgrounds, I changed it to black
  - ![nav adjust color](https://i.ibb.co/WxJZ62Y/navcoloradjust.png)

### fullPageScrollPureJS

_A pure JavaScript / CSS implementation of cross-platform smooth one page scrolling effect with no 3rd dependencies._
I wanted a page scroll effect where the section transitions are snappy. I tried to use CSS scroll to snap but it didn't deliver the effect I wanted for this page so I resorted to this JS library. It's fairly simple to use and easily digestible but it definitely comes with limitations. As a result, all the page sections in this home page is exactly 100vh. The website also **breaks**( a vertical and horizontal scrollbar gets added and screws up the computation of viewports ) after inspecting it using Chrome's developer tools for some reason and I was not able to debug it. The issue gets resolved just by refreshing the page.

### About section

![aboutsectionpage](https://i.ibb.co/hYsyYNV/argelmiralles-pss-netlify-app-index-html.png)
The About section introduces PlayStation Studios as an organization. It uses a basic CSS flexbox layout that has a flex direction of column on smaller screen, and turns to row on wider screen. The card on the right hand side that houses an embedded video is then aligned through margin and paddings, and by mixing up item and content alignments and justifications. In retrospect, the CSS grid layout has a better use case here as it involves a third dimension positioning.

### News section

I was designing the page as I go and this was the "not bad" iteration I could think of. This section showcases PlayStation Studio's New and Upcoming product releases. I used CSS grid to showcase the products and the sizes of each grid area is according to my personal taste in determining their importance. In a UI/UX stand point, this section is poorly designed as the user will really have no idea what this section is about unless they click on the grid. To combat this, at least on devices with a cursor, it changes to a pointer on hover. Like a Bootstrap modal, when the grid is clicked, an invisible overlay of this section turns visible that shows a call to action to go to another page where the user can learn more about the products. An animation for page transition is executed on click on the Anchor tag.
![News section](https://i.ibb.co/5vSyLYR/argelmiralles-pss-netlify-app-index-html-1.png)

- Modal
  - ![gridclickjs](https://i.ibb.co/VMr2dxF/gridclickjs.png)
  - ![gridcliccss](https://i.ibb.co/6PQLWTT/gridclickcss.png)
- Page Transition
  - This technique uses an invisible cover div which is a sibling element to the main page sections.
  - The code below executes the following on sequence when the anchor tag redirecting to news page is clicked.
    - Prevent anchor tag in changing the URL
    - Adjust the top position to 300vh (News section in home is the 3rd section so they are now aligned on top of each other) of each cover div (5 divs with different background colors but all 100vh and 100vw)
    - Turn the navbar to white as a trick to hide it during transition
    - Apply the transition animations by adding classes slide and fade to black
    - Let the transition animation finish first (setTimeout) before allowing the anchor tag to change the URL
    - ![covertransitionjs](https://i.ibb.co/RHJCVyV/tostudiojs.png)
    - ![covertransitioncss](https://i.ibb.co/fdbc508/covertransitioncss.png)
    - ![coverkeyanimations](https://i.ibb.co/3mGfsx9/coverkeyanimations.png)

### Studios section

![studiossection](https://i.ibb.co/Ybp0TbQ/argelmiralles-pss-netlify-app-index-html-2.png)
This section introduces Herman Hulst, the head of Playstation Studios. It also contains the call to action to go to the studios page that shows the studios that make up this organization. For this section, it uses the default page flow (From top to bottom) as a layout for smaller screen and on medium to larger screen, it then uses the CSS grid to deliver the overlapping effect on the two main cards. This studios section also uses the same page transition technique used on the previous section. The only difference is that the cover style top position is adjusted to 400vh since this is the 4th section of the page.

- CSS Grid layout
  - ![studioscss](https://i.ibb.co/2ZCSnjq/studioscss.png)
  - Notice that the grid-area only uses the .hulst-image container. For the .hulst-quote container, I manually assigned the grid position through grid-column and grid-row. This is so that the overlap effect is applied.

### Games section

This section displays more of Playstation Studios product in the past. Each game card is a link to their appropriate Playstation Store pages. This is a tricky section to design because I'm limited to 100vh on mobile due to the fullPageScrollPureJS layout. To somehow make it work, I hid the game titles on smaller screens using "display:none". For all viewports, I used CSS Flexbox with flex wrap enabled so it was just a matter of resizing the images as the screen size changes.
![gamessection](https://i.ibb.co/5j2qrMF/argelmiralles-pss-netlify-app-index-html-3.png)

- Games container styling
  - ![gamescontainercss here](https://i.ibb.co/XjQzWJT/gamescontainercss.png)
- Media Queries
  - ![gamesmediaquery1](https://i.ibb.co/tK9L8TW/gamesmediaquery1.png)
  - ![gamemediaquery2](https://i.ibb.co/fQ09QTF/gamesmediaquery2.png)

### PS5 section and footer

This page section contains a hero component for the PS5 with a call to action to go to the PS5's official store page. A very basic layout that has a primary container to align items vertically and horizontally using CSS flexbox and a secondary container that uses the same layout except the flex direction of the items changes from column to row on larger viewports.
This section also contains a very simple footer for some official Playstation pages and a link to my Github page.
![lastsectionofhome](https://i.ibb.co/RQ4WcKt/argelmiralles-pss-netlify-app-index-html-4.png)

- HTML structure
  - ![ps5html](https://i.ibb.co/SVQ17yx/ps5html.png)
- Styling
  - ![ps5css](https://i.ibb.co/1n5nnXW/ps5css1.png)
  - ![footercss](https://i.ibb.co/z8zQ62S/footercss.png)

## News Page (news.html)

![newspagepreview](https://i.ibb.co/4fPDDPf/newspage.png)
This page is dedicated for showcasing information on upcoming and latest releases of PSS products. It simply shows the game title, publisher, console you can use to play the game, release date, a trailer and a direct link to the game's PS store. The page uses a nav bar with a sole purpose of taking back the user to the home page. It also has an "X" button on the bottom of the page that serves the same purpose as the nav bar.

Here are some of the design and structure principle I used on this page.

#### HTML Structure

Basically, there are 5 sections for the 5 products. Each section contains a "news-game-card" div which houses the "news-card-upper" and "news-card-lower" containers. The "news-card-upper" contains the text part of the card the "news-card-lower" is for the iframe container. I used [w3school's](https://www.w3schools.com/howto/howto_css_responsive_iframes.asp) approach for the iframe's responsiveness and tweaked it a bit when the Flexbox is in play.
![htmlnewsgame](https://i.ibb.co/GcbmKFB/news-game-card.png)
![newscss1](https://i.ibb.co/QH2wS4Z/newscss1.png)
![newscss2](https://i.ibb.co/x6ZfTZP/newscss2.png)
![newscss3](https://i.ibb.co/1MsVpdk/newscss3.png)

#### Page transition

I implemented the same page transition technique as the home page except on this one, the animation slides in from right to left when going back to the previous page.
![slideback](https://i.ibb.co/yyJBxFN/slideback.png)
This page also has a fade in animation on load.
![fadein](https://i.ibb.co/xfHQmFX/fadein.png)
![fadeinanimation](https://i.ibb.co/smZP0kF/fadeinanimation.png)

#### Parallax scrolling effect on each section

![parallaxcss](https://i.ibb.co/Jr1hvb3/parallaxcss.png)

#### Floating/fixed call to action graphic at the bottom

This pure CSS graphic of a Playstation X button is from [Emre Düğencioğlu's codepen](https://codepen.io/edugencioglu/pen/XGzNJP). I just tweaked it a bit so that it only shows the X button and its persistent on the bottom of the screen. I also added a tooltip on hover for better UX.
![ctahtml](https://i.ibb.co/DPFSDyN/ctahtml.png)
![ctacss1](https://i.ibb.co/HqGDPNm/ctacss1.png)
![ctacss2](https://i.ibb.co/yRthj5s/ctacss2.png)

## Studios page (studios.html)

This section lays out the studios that make up PSS as an organization. It contains a brief introduction of the studios and a link to their websites. This is basically the same as the previous page as it uses the same persistent call to action button at the bottom of the page and has the same nav bar, and the same page transitions for both going back to the previous page and on load fade in.

![studios container](https://i.ibb.co/VjbDZqP/argelmiralles-pss-netlify-app-studios-html.png)

HTML Structure
This page is even much simpler than the one before as you only have a primary container that contains the .studio-card divs.
![studiocardhtml](https://i.ibb.co/LSk71LF/studiocardhtml.png)
I used flex wrap on the main container so its just a matter of setting a max width on the cards and the cards will automatically fill up the container. On mobile screens for example, there would be only 1 studio card for each row.
![studiocardcss](https://i.ibb.co/GJ8SjkG/studiocardcss.png)

## Other utilities

#### Main button call to action

Basic call to action buttons that has inset box shadow on hover
![hoverbtn](https://i.ibb.co/gDcTS4W/Studios.gif)
![ctabtnhtml](https://i.ibb.co/L0KYnvJ/ctabtn.png)
![ctabtncss](https://i.ibb.co/StCM5rr/ctabtncss.png)

#### Media query fallback

This fallback mainly catches mobile phones on landscape mode. My approach is to basically hide secondary elements with low importance to prioritize the web application to not break.
For example - Hulst Image container is hidden here
![landscapeexample](https://i.ibb.co/c1q08vQ/argelmiralles-pss-netlify-app-index-html-i-Phone-SE.png)
![cssmediafallback](https://i.ibb.co/chyYrz3/mediafallback.png)

## <span id="conclusion">Conclusion</span>

#### Is it worth it to overhaul a web application's structure if you don't have a specific theme or full web page design in place?

Definitely not. Designing on the go (while coding) is very difficult if you're not confident with your web design skill. So unless your are confident, I'd say include designing or building a solid theme in your project time so you can have a detailed design structure to follow which will help you be more efficient in the long run so you don't stop every time just to think about how will you design the next page section you're building.
Here are some helpful resources you can use for these themes if you're a beginner.

- [Dribbble](https://dribbble.com/shots/popular/web-design)
- [Frontendmentor](https://www.frontendmentor.io/)
- [Frontendpractice](https://www.frontendpractice.com/)

#### Is Sass a technology you should use even if you're just starting out your web development path?

Yes! Here's what I really liked about Sass after dabbling with it lightly in this project.

- Partials
  - You can breakdown your design code to smaller pieces so that you don't end up with one giant CSS file with 1000+ line of codes where you struggle to find that one button you want to be smaller.
- Global Variables
  - With Sass, you can create a variable that you can use across all your SCSS/SASS files so it's really convenient.
- Very easy to learn

The only thing I would suggest is you learn Sass **AFTER** you're very familiar with the concept of CSS's specificity and know a bit of JS, at least some knowledge on variables and scoping. Once you're past this point, learning Sass would be a breeze.

#### Should you use Javascript libraries on your smaller projects like this?

The answer to this question is a little complicated. If you've seen how I used fullPageScrollJS in this project, I think you'd agree with me that unless you actually understand how every line of code in the library you're using works, this will become very limiting on your approach with building your web application. In this case, I'm not entirely sure how fullPageScrollJS works so I had to build my sections in the homepage within 100vh, otherwise, the page just breaks. But, in tiltJS's case, I only had to use one line to achieve the hover effect I wanted. In the end, I would say that if you're not pressed for time, try building out your web app's logic from the ground.

## Footnote

Thank you for taking the time in checking out this repository.

**Argel Miralles | Full Stack Web Developer**
**SIC PARVIS MAGNA**☝
