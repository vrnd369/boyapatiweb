import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>ABOUT BOYAPATI DAIRY & FOODS</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <div className="container">
          <div className="section-grid">
            <div className="content-block">
              <h2>Our Story</h2>
              <p>
                Boyapati Dairy and Foods is a family-run company providing
                premium quality milk products and unforgettably delicious sweets
                since 2019. We pride ourselves on creating exceptional products
                lovingly crafted using traditional methods and cutting-edge
                technology. Our core mission is to deliver only the purest,
                cleanest, and finest dairy products and incredible savories to
                our discerning community of customers throughout India.
              </p>
              <p className="highlight">
                We are excited to feature our products in the U.S. 🇺🇸
              </p>
              <p>
                In 2022, we started offering our premium products across the
                U.S., delivering our one-of-a-kind, additive-free dairy products
                and savories to health and quality-focused consumers throughout
                the country.
              </p>
            </div>
            <div className="image-block">
              <img
                src="/images/kalakand.jpg"
                alt="Boyapati Dairy Premium Products"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="section-grid reverse">
            <div className="content-block">
              <h2>Humble Beginnings</h2>
              <p>
                Our ancestors consistently demonstrated that additive-free and
                nutrient-rich food is quintessential for leading a healthy
                lifestyle. This is one of the founding principles of our parent
                firm, Boyapati Dairy, which is a family-owned business that
                started in 1989 with just five cows and buffaloes.
              </p>
              <p>
                From humble beginnings, our small dairy nestled in a tiny
                community thrived into an incredible farm with 500-cattle that
                produces milk, ghee, and other dairy products across multiple
                facilities across Vijayawada, India. Over the last three
                decades, Boyapati Dairy has continued raising grass-fed cattle
                producing premium quality dairy products that have become an
                essential part of our customers' healthy lifestyle.
              </p>
            </div>
            <div className="image-block">
              <img src="/images/dairy-farm.jpg" alt="Boyapati Dairy Farm" />
            </div>
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="tradition-section">
        <div className="container">
          <div className="section-grid">
            <div className="content-block">
              <h2>OUR STORY. OUR PASSION.</h2>
              <p>
                Do you have fond memories of eating additive-free savories made
                by your grandparents?
              </p>
              <p>
                If your answer is yes, you have come to the right place. Backed
                by our motto, "Purity At Its Best," we established Boyapati
                Dairy and Foods in 2019 with a mission to bring back the sweets
                from our childhood and reimagine them without any preservatives
                or artificial colors.
              </p>
              <div className="highlight-box">
                <h3>Pure Ghee - Our Secret Ingredient</h3>
                <p>
                  We only use Pure Ghee made in Bilona Method for preparing all
                  our savories.
                </p>
                <p>
                  Unlike most refined oils, Ghee is full of healthy fats, which
                  help our body absorb some essential vitamins and minerals. We
                  are one of the very few savory makers in India who make all
                  their products with pure ghee. We are sure you will fall in
                  love with the rich flavor of our ghee in every single bite.
                </p>
              </div>
            </div>
            <div className="image-block">
              <img
                src="/images/ghee-making.jpg"
                alt="Traditional Ghee Making Process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="container">
          <div className="section-grid reverse">
            <div className="content-block">
              <h2>Our Commitment</h2>
              <p>
                At Boyapati Dairy and Foods, we select only premium quality
                ingredients and apply traditional methods of savory making to
                deliver sublime results in quality, taste, and consistency. All
                while delivering an unforgettable, welcoming customer service
                experience and a friendly atmosphere at all of our locations.
              </p>
            </div>
            <div className="image-block">
              <img
                src="/images/quality-control.jpg"
                alt="Quality Control Process"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Section */}
      <section className="global-section">
        <div className="container">
          <div className="section-grid">
            <div className="content-block">
              <h2>Global Reach</h2>
              <p>
                Are you staying in the U.S. and missing our Incredible Indian
                Savories?
              </p>
              <p>
                Along with India, we enjoy a large customer base from our fellow
                compatriots living across the globe. Many of our global
                customers treat our savories as a must-have in their check-in
                bags. Starting in 2022, we will make our savories delivered to
                your doorstep with just a few clicks. Head into our Shop Now
                page and order your favorites. We will take care of the rest.
              </p>
            </div>
            <div className="image-block">
              <img
                src="/images/global-delivery.jpg"
                alt="Global Delivery Network"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .about-page {
          padding-top: 80px;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* Hero Section */
        .about-hero {
          background: #fff5f5;
          padding: 4rem 0;
          text-align: center;
        }

        .about-hero h1 {
          font-size: 2.5rem;
          color: #333;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
          text-align: center;
          width: 100%;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #666;
        }

        /* Common Section Styles */
        .intro-section,
        .history-section,
        .tradition-section,
        .commitment-section,
        .global-section {
          padding: 6rem 0;
        }

        .history-section,
        .tradition-section,
        .global-section {
          background: #f8f8f8;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .section-grid.reverse {
          direction: rtl;
        }

        .section-grid.reverse .content-block {
          direction: ltr;
        }

        .content-block {
          max-width: 600px;
        }

        .content-block h2 {
          font-size: 2rem;
          color: #333;
          margin-bottom: 1.5rem;
          font-family: "Playfair Display", serif;
        }

        .content-block p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .highlight {
          font-size: 1.2rem;
          color: #e19898;
          font-weight: 500;
          margin: 2rem 0;
        }

        .highlight-box {
          background: #fff5f5;
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem 0;
        }

        .highlight-box h3 {
          color: #333;
          margin-bottom: 1rem;
          font-family: "Playfair Display", serif;
        }

        .highlight-box p {
          color: #666;
          line-height: 1.8;
          margin-bottom: 1rem;
        }

        .highlight-box p:last-child {
          margin-bottom: 0;
        }

        .image-block {
          width: 100%;
        }

        .image-block img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .section-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-grid.reverse {
            direction: ltr;
          }

          .image-block {
            order: -1;
          }

          .about-hero h1 {
            font-size: 2rem;
          }

          .content-block h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
