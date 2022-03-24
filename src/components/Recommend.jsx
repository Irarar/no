import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/London.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Сингапур",
      subTitle: "Сингапур, официально Республика Сингапур",
      cost: "38,800",
    },
    {
      image: Destination2,
      title: "Таиланд",
      subTitle: "Таиланд – страна Юго-Восточной Азии",
      cost: "54,200",
    },
    {
      image: Destination3,
      title: "Париж",
      subTitle: "Париж, столица Франции, является крупным европейским городом",
      cost: "45,500",
    },
    {
      image: Destination4,
      title: "Новая Зеландия",
      subTitle: "Новая Зеландия – островное государство в Тихом океане",
      cost: "24,100",
    },
    {
      image: Destination5,
      title: "Бора бора",
      subTitle: "Бора-Бора – небольшой остров Французской Полинезии в южной части Тихого океана, к северо-западу от Таити",
      cost: "95,400",
    },
    {
      image: Destination6,
      title: "Лондон",
      subTitle: "Лондон – столица Англии и Соединенного Королевства",
      cost: "38,800",
    },
  ];

  const [value, setValue] = useState('')

  const filtered = data.filter(title => {
    return title.title.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Рекомендуемые направления</h2>
      </div>
      <div className="search">
        <div className="container">
          <label htmlFor="">Где ты хочешь отдохнуть?</label>
          <input
              id="search"
              type="text"
              placeholder="Поиск вашего местоположение"
              onChange={(event => setValue(event.target.value))}
          />
        </div>
      </div>
      <div className="destinations">
        {filtered.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <h4>{destination.cost}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
    padding-bottom: 15px;
  }
  .search {
    margin-bottom: 15px;
    display: flex;
    padding: 0.5rem;
    border-radius: 0.5rem;

    .container {
      display: flex;
      align-items: center;
      background-color: #f5f0fe;
      border-radius: 0.5rem;
      justify-content: center;
      flex-direction: column;
      padding: 1rem 1.5rem;

      label {
        font-size: 1.1rem;
        color: #03045e;
      }

      input {
        background-color: transparent;
        border: none;
        text-align: center;
        color: black;

        &::placeholder {
          color: black;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .search {
      flex-direction: column;
      padding: 0.8rem;
      gap: 0.8rem;  
      /* padding: 0; */
      .container {
        padding: 1rem 0.8rem;
        input[type="date"] {
          padding-left: 1rem;
        }
      }
      button {
        padding: 1rem;
        font-size: 1rem;
      }
      /* display: none; */
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
