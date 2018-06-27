import React, { Component } from "react";

export default class MainSection extends Component {
  render() {
    return (
      <section class="food__special__offer bg--white section-padding--lg">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="section__title title__style--2 service__align--center">
                <h2 class="title__line">Our Special Offer</h2>
                <p>The process of our service </p>
              </div>
            </div>
          </div>
          <div class="row mt--40">
            <div class="col-md-6 col-sm-12 col-lg-3">
              <div class="food__offer text-center foo">
                <div class="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/1.jpg"
                    alt="offer images"
                  />
                  <div class="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div class="offer__details">
                  <h2>
                    <a href="menu-details.html">Pastry Combo Pack</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div class="offer__btn">
                    <a
                      class="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3">
              <div class="food__offer text-center foo">
                <div class="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/2.jpg"
                    alt="offer images"
                  />
                  <div class="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div class="offer__details">
                  <h2>
                    <a href="menu-details.html">Mixed Fruits Pie</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div class="offer__btn">
                    <a
                      class="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3">
              <div class="food__offer text-center foo">
                <div class="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/3.jpg"
                    alt="offer images"
                  />
                  <div class="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div class="offer__details">
                  <h2>
                    <a href="menu-details.html">Wheat Bread</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div class="offer__btn">
                    <a
                      class="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3">
              <div class="food__offer text-center foo">
                <div class="offer__thumb poss--relative">
                  <img
                    src="images/product/offer-product/4.jpg"
                    alt="offer images"
                  />
                  <div class="offer__product__prize">
                    <span>$25</span>
                  </div>
                </div>
                <div class="offer__details">
                  <h2>
                    <a href="menu-details.html">Wheat Bread</a>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor.
                  </p>
                  <div class="offer__btn">
                    <a
                      class="food__btn grey--btn mid-height"
                      href="menu-details.html"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="banner__area mt--40">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-3 col-sm-12">
                <div class="banner--2 foo">
                  <div class="banner__thumb">
                    <a href="/">
                      <img
                        src="images/banner/bann-2/1.jpg"
                        alt="banner images"
                      />
                    </a>
                  </div>
                  <div class="banner__hover__action banner__left__bottom">
                    <div class="banner__hover__inner">
                      <span>20%</span>
                      <p>off for festival</p>
                      <h2 class="coffee-text">off for festival</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 col-sm-12">
                <div class="banner--2 foo">
                  <div class="banner__thumb">
                    <a href="/">
                      <img
                        src="images/banner/bann-2/2.jpg"
                        alt="banner images"
                      />
                    </a>
                  </div>
                  <div class="banner__hover__action banner__left__top">
                    <div class="banner__hover__inner">
                      <h4>colorful</h4>
                      <h2 class="pink-text">donut’s</h2>
                      <p>get it till the stock full</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-sm-12">
                <div class="banner--2 foo">
                  <div class="banner__thumb">
                    <a href="/">
                      <img
                        src="images/banner/bann-2/3.jpg"
                        alt="banner images"
                      />
                    </a>
                  </div>
                  <div class="banner__hover__action banner__right__bottom">
                    <div class="banner__hover__inner">
                      <h4 class="vanilla">vanilla</h4>
                      <h2 class="pink-text">MAFFIN</h2>
                      <p>Lovely Food for Food lover</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
