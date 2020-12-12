export const template = (title: string, description: string): string => {
  return `
<!doctype html>
<html lang="en-GB" dir="ltr">
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <!--[if IE ]>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <![endif]-->
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    article, aside, details, figcaption, figure, footer, header, nav, section {
      display: block;
    }

    html {
      font-size: 100%;
      overflow-y: scroll;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    body {
      margin: 0;
      line-height: 1.231;
    }

    body, button, input, select, textarea {
      font-family: sans-serif;
      color: #222;
    }

    a {
      color: #136C91;
      text-decoration: none;
    }

    a:hover, a:visited {
      color: #136C91;
    }

    a:focus {
      outline: thin dotted;
    }

    a:active, a:hover {
      outline: 0;
    }

    abbr {
      border-bottom: 1px dotted;
    }

    strong {
      font-weight: 700;
    }

    blockquote {
      margin: 1em 40px;
      font-style: italic;
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid #ccc;
      margin: 1em 0;
      padding: 0;
    }

    code, kbd, pre, samp {
      font-family: monospace, monospace;
      _font-family: 'courier new', monospace;
      font-size: 1em;
    }

    pre {
      white-space: pre;
      word-wrap: break-word;
    }

    q {
      quotes: none;
    }

    q:after, q:before {
      content: "";
    }

    small {
      font-size: 85%;
    }

    sub, sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }

    sup {
      top: -.5em;
    }

    sub {
      bottom: -.25em;
    }

    ol, ul {
      margin: 1em 0;
      padding: 0 0 0 40px;
    }

    nav ol, nav ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    img {
      padding: 10px 0;
      border: 0;
      -ms-interpolation-mode: bicubic;
      vertical-align: middle;
      max-width: 100%;
    }

    figure {
      margin: 0;
    }

    figcaption {
      text-align: center;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    td {
      vertical-align: top;
    }

    small {
      color: #000;
      text-decoration: none;
    }

    body {
      font: 16px/24px Helvetica, Helvetica Neue, Arial, sans-serif;
    }

    .wrapper {
      width: 90%;
      margin: 0 5%;
    }

    #header-container {
      border-bottom: 20px solid #ffeb00;
    }

    #footer-container {
      border-top: 20px solid #ffeb00;
    }

    #header-container {
      background: #fff;
    }

    #footer-container {
      background: #000;
    }

    #footer-container a, small {
      color: #fff;
    }

    #title {
      margin: 0;
      color: #000;
      text-align: center;
    }

    ::-moz-selection {
      background: #ffeb00;
      color: #000;
      text-shadow: none;
    }

    ::selection {
      background: #ffeb00;
      color: #000;
      text-shadow: none;
    }

    nav a {
      display: block;
      margin-bottom: 10px;
      padding: 15px 0;
      background: #ffeb00;
      color: #000;
      text-align: center;
      text-decoration: none;
      font-weight: 700;
    }

    nav a:hover, nav a:visited {
      color: #000;
    }

    nav a:hover {
      text-decoration: underline;
    }

    #main {
      padding: 30px 0;
    }

    #main article h1 {
      font-size: 2em;
    }

    #footer-container footer {
      color: #fff;
      padding: 20px 0;
    }

    .clearfix:after, .clearfix:before {
      content: "";
      display: table;
    }

    .clearfix:after {
      clear: both;
    }

    .clearfix {
      zoom: 1;
    }

    @media only screen and (min-width: 480px) {
      nav a {
        float: left;
        width: 27%;
        margin: 0 1.7%;
        padding: 25px 2%;
      }

      nav li:first-child a {
        margin-left: 0;
      }

      nav li:last-child a {
        margin-right: 0;
      }

      nav ul li {
        display: inline;
      }
    }

    @media only screen and (min-width: 768px) {
      #header-container {
        -webkit-box-shadow: 0 5px 10px #aaa;
        -moz-box-shadow: 0 5px 10px #aaa;
        box-shadow: 0 5px 10px #aaa;
      }

      #title {
        float: left;
      }

      nav {
        float: right;
        width: 38%;
      }

      #main article {
        float: left;
      }
    }

    @media only screen and (min-width: 1140px) {
      .wrapper {
        width: 1026px;
        margin: 0 auto;
      }
    }

    @media print {
      * {
        background: transparent !important;
        color: #000 !important;
        text-shadow: none !important;
        filter: none !important;
        -ms-filter: none !important;
      }

      a, a:visited {
        text-decoration: underline;
      }

      a[href]:after {
        content: " (" attr(href) ")";
      }

      abbr[title]:after {
        content: " (" attr(title) ")";
      }

      blockquote, pre {
        border: 1px solid #999;
        page-break-inside: avoid;
      }

      thead {
        display: table-header-group;
      }

      img, tr {
        page-break-inside: avoid;
      }

      img {
        max-width: 100%;
      }

      @page {
        margin: .5cm;
      }

      h2, h3, p {
        orphans: 3;
        widows: 3;
      }

      h2, h3 {
        page-break-after: avoid;
      }
    }</style>
</head>
<body>

<div id="header-container">
  <header class="wrapper clearfix" role="banner">
    <h1 id="title"><img src="https://res.cloudinary.com/elliotjreed/image/upload/v1607730736/childrens-society/childrens-society-logo.jpg" alt="The Children&apos;s Society" width="204" height="120"></h1>
    <nav role="navigation">
      <ul>
        <li><a href="#Description">Description</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Terms">T&amp;Cs</a></li>
      </ul>
    </nav>
  </header>
</div>
<div id="main-container" itemscope itemtype="http://schema.org/Product">
  <main id="main" class="wrapper clearfix" role="main">
    <div itemprop="offers" itemtype="http://schema.org/Offer" itemscope>
      <meta itemprop="availability" content="https://schema.org/InStock">
      <meta itemprop="itemCondition" content="https://schema.org/UsedCondition">
      <div itemprop="seller" itemtype="http://schema.org/Organization" itemscope>
        <meta itemprop="name" content="The Children's Society">
      </div>
    </div>
    <article>
      <header>
        <h2 itemprop="name">${title}</h2>
      </header>
      <section id="Description" itemprop="description">
        <h3>Description</h3>
        <p>
          ${description}
        </p>
      </section>
      <hr>
      <section id="Contact">
        <h3>Contact</h3>
        <p>
          The easiest way to contact us is <a href="http://contact.ebay.co.uk/ws/eBayISAPI.dll?ReturnUserEmail&amp;requested=childrenssocietylevenshulme" target="_blank">using eBay&apos;s &quot;Contact Seller&quot;</a>.
        </p>
      </section>
      <hr>
      <section id="Terms">
        <h3>Delivery, Returns &amp; Refunds</h3>
        <h4>Delivery</h4>
        <p>
          We post items via either <a href="https://www.royalmail.com/sending/uk/signed-for-2nd-class" rel="noreferrer noopener" target="_blank">Royal Mail 2<sup>nd</sup> Class Signed-For</a> or an alternative courier, such as <a href="https://www.myhermes.co.uk/" rel="noreferrer noopener" target="_blank">Hermes</a>.
        </p>
        <p>
          All orders are dispatched within two working days of payment being received, and will normally arrive at the delivery address within two to three working days. At peak periods deliveries can take up to five working days.
        </p>
        <p>
          If your order does not arrive within five working days please contact us after checking your tracking information.
        </p>
        <h4>Returns</h4>
        <p>
          Returns are accepted within 14 days following delivery, as long as it&apos;s in the original condition.
        </p>
        <h4>Refunds</h4>
        <p>Refunds will be refunded into the same method of payment used for the original purchase (ie. PayPal).</p>
      </section>
      <hr>
      <aside id="About">
        <h3>About The Children&apos;s Society</h3>
        <p>
          We provide specialist support that empowers young people to make positive changes and rediscover their hope. They want a future they can look forward to and we&apos;re here to make sure they get it. Working alongside young people, their families and community, we will not rest until together, step-by-step, we&apos;ve created a society built for all children.
        </p>
        <p>Young people come to us when they have low self-esteem. When they&apos;re living in families who can&apos;t afford the next meal, the next size up in school uniform. Or when there&apos;s no one else to lean on.</p>
        <p>Refugee and migrant children land in this country alone and look to us for guidance to achieve the life they dreamed of. To have a settled home, a secure job and starting a family. They&apos;re not asking for too much.</p>
        <p>We see teenagers in our services who want to quit using drugs or alcohol. Who are looking after mum, dad, or their siblings more than they bargained for. Or who have been taken advantage of and find themselves carrying drugs to far away towns. Often, the hope inside them has taken a battering, it might only be hanging by a thread. But we know it&apos;s there. And we see a better future is within reach.</p>
      </aside>
    </article>
  </main>
</div>
<div id="footer-container">
  <footer class="wrapper" role="contentinfo">
    <small>&copy; <a href="https://www.childrenssociety.org.uk/" rel="noreferrer noopener" target="_blank"> The Children&apos;s Society</a></small>
  </footer>
</div>
</body>
</html>
`;
};
