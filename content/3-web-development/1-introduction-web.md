---
title: "Introduction to web apps"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---
## How do web applications work?

`youtube: https://www.youtube.com/watch?v=NeLPRDfWGRQ&t=8s`

In web development, the front end is the stuff you see on the website in your browser, including the presentation of content and user interface elements like the navigation bar. Front-end developers use HTML, CSS, JavaScript, and their relevant frameworks to ensure that content is presented effectively and that users have an excellent experience.

The back end refers to the guts of the application, which live on the server. The back end stores and serves program data to ensure that the front end has what it needs. This process can become very complicated when a website has millions of users. Back-end developers use programming languages like Java, Python, and Ruby to work with data.

## Front end technologies

### HTML

HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title suggests, this article will give you a basic understanding of HTML and its functions.

> Live Editor: try changing the code below

```html react-live=true
<div>
    <h3>Student Information</h3>
    <p>Name: Bob Marley</p>
    <p>Age: 35 years</p>

    <button>View</button>
</div>

```

### Javascript

JavaScript is a programming language that lets web developers design interactive sites. Most of the dynamic behavior you'll see on a web page is thanks to JavaScript, which augments a browser's default controls and behaviors.

For example, below JavaScript code can change the title of your web page.

```javascript
document.title = "My beautiful Page";
```

### CSS

CSS is what gives your entire website its style. Those slick colors, interesting fonts, and background images? All thanks to CSS. This language affects the entire mood and tone of a web page, making it an incredibly powerful tool -- and an important skill for web developers to learn. It's also what allows websites to adapt to different screen sizes and device types.

For example, the below CSS changes the page background color to `black`.

```css
html {background-color: black} 
```

## Back end technologies

Back-end development controls what goes on behind the scenes of a web application. A back-end often uses a database to generate the front-end.

> Here’s an example. Say you log into your Facebook account, and you are greeted with the latest updates in your News Feed. They’re not going to be the same updates that you saw yesterday.

How did the page change? Did a Facebook employee manually edit the page to update your news feed? Of course not. A script on the Facebook back-end would have received the updates and re-generated the front-end accordingly.

Back-end scripts are written in many different coding languages and frameworks such as below.

- PHP
- Ruby on Rails
- ASP .NET
- Perl
- Java
- Node.js
- Python

You will further learn about web backend development in [Web server Programming](../5-server-programming) section.
