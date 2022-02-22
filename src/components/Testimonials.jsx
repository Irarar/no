import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.svg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Отзывы</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Отличное расположение, действительно приятные
            и чистые номера, но то, что делает это место
            таким хорошим, - это персонал. Все люди невероятно
            полезны и щедры со своим временем и советом.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Анна Иванова</h4>
              <span>&#127482;&#127462; Ukraine</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            I've been in this hostel for a month and here is
            the best hostel of all Excellent management of
            excellent and ethical staff and bedrooms Bathrooms are
            always clean and excellent Most importantly, those who
            work here are kind and good-natured.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Adam Smith</h4>
              <span>🇺🇸 USA</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Efficient, friendly, professional, and appropriately attentive.
            Great hotel in a great location. Easy access to all the surrounding
            historical sites. Staff is fantastic. Will definitely stay at this
            location during my next stay in Marocco.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Anika Messer</h4>
              <span>🇩🇪 Germany</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
