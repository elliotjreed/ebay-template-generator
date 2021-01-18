export const template = (title: string, description: string): string => {
  return `
<title>${title}</title>
<link rel="stylesheet" href="https://ebay-template.elliotjreed.com/tcs-ebay.css">
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
          For any questions or general enquiries please contact us <a href="http://contact.ebay.co.uk/ws/eBayISAPI.dll?ReturnUserEmail&amp;requested=childrenssocietylevenshulme" target="_blank">using eBay&apos;s &quot;Contact Seller&quot;</a>.
        </p>
      </section>
      <hr>
      <section id="Terms">
        <h3>Delivery, Returns &amp; Refunds</h3>
        <h4>Delivery</h4>
        <p>
          We post items via either Royal Mail 2<sup>nd</sup> Class Signed-For or an alternative courier, such as Hermes.
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
    <small>&copy; The Children&apos;s Society</small>
  </footer>
</div>
`;
};
