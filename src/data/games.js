import cazinoCosmos from "../assets/gamesLogos/cazino-cosmos.jpg";
import cazinoZeppelin from "../assets/gamesLogos/cazino-zeppelin.jpg";
import gorillaKingdom from "../assets/gamesLogos/gorrila-kingdom.jpg";
import robinHood from "../assets/gamesLogos/robin-hood.jpg";
import dataFromJson from "./jackpots.json";

const limitedData = dataFromJson.slice(0, 4);

const amountOfMoneyFromJson = limitedData.map((element) => {
  return element.jackPotGame.money.amount;
});

const games = [
  {
    id: 1,
    photo: cazinoCosmos,
    amount: amountOfMoneyFromJson[0],
  },
  {
    id: 2,
    photo: cazinoZeppelin,
    amount: amountOfMoneyFromJson[1],
  },
  {
    id: 3,
    photo: gorillaKingdom,
    amount: amountOfMoneyFromJson[2],
  },
  {
    id: 4,
    photo: robinHood,
    amount: amountOfMoneyFromJson[3],
  },
];

export default games;
