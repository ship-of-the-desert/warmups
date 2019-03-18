![](/ga_cog.png)

---
Title: Intro to Media Queries<br>
Type: Morning Exercise<br>
Creator: Jerrica Bobadilla<br>
Competencies: CSS, HTML

---

# Intro to Media Queries & Responsive Design

As technology has improved rapidly over the years, allowing for varying screen sizes ranging from a wide desktop monitor all the way down to a slim smartphone screen, web developers have come across the issue of having to make their apps/sites responsive. Or, in other words, having to make things look good and be functional no matter what kind of size screen the user has. While using variable widths and utilizing things like flexbox makes that easier, sometimes it's just not enough. This is where media queries come in handy. 

## What is a Media Query? 

A media query is a CSS rule that was introduced when CSS3 came out, and its syntax is as follows: 

```css
 @media (width rule here, e.g. min-width: 500px) {
  /* any other css rules can go in here as normal, for example: */
  body {
    background: black;
  }
 }
```

#### What a media query does: 

  - It looks at the width rule and will only apply the css rules within the media query when the width of the browser meets that width rule point
  - For example, in the above media query it will only make the body's background black when the browser is at 500px width or above
  
#### Side Question: Can I create rules for other properties aside from width? 
 
 - Yes, the rule inside the parentheses can be something other than width if you'd like, but for the purposes of responsive design and making things look good on certain screen sizes, using some sort of width rule is the most important for you to know. 
 - If you'd like to see what other rules you can do, test it out yourself! Or, take a look at the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).
 
## Mobile-First Design

When designing responsively, a common philosophy amongst front-end developers is to design for mobile screens first. This is largely because designs and code for larger screens are usually more complex than they are for mobile, thus coding for mobile first starts you off with simpler code and allows you to simply add complexity as needed rather than having to remove or overwrite complexity. 

#### So... how do we code mobile-first? 

Coding with mobile design first in mind means you want your CSS default styles to be for mobile, and your styles inside media-queries to be for larger widths. Meaning, you generally want your media query rule to have a `min-width` of something, _not_ `max-width`

For example: 

```css
/* default style for mobile */
body {
 background: black;
}

/* styles for desktop when the browser is 600px or above */
@media (min-width: 600px) {
 body {
  background: thistle;
 }
}
```

* _NOTE:_ Sometimes, however, you may actually need to use a combination of min and max-width queries to keep your code DRYer. For now, though, let's just get comfortable with min-width queries!

## Quick Example 

Now that we know a little bit about media queries, let's check it out in action! I'll be going over how I'd go from the mobile view to the desktop view provided below. The sample files are provided in the `spidey_example` folder. 

<details><summary><strong>Mobile View</strong></summary>
 
![](https://imgur.com/Wyi3zf4.png)
</details>

<details><summary><strong>Desktop View</strong></summary>
 
![](https://imgur.com/pz6qMQM.png)
</details>

## Activity 

Now it's your turn to play around with media queries! Try to recreate the following simple responsive design wireframes. The images on the left represent the browser at desktop width while the images on the right represent the same browser but at mobile width. Feel free to choose whichever one you want to start with, just note you will need to make three separate html and css files for each different one! 

![](https://i.imgur.com/NZ0moP0.png)


---

*Copyright 2018, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
