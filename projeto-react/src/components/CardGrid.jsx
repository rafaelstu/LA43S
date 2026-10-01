import Card from "./Card";
import cards from "../data/cards";
import "./Card.css";

export function CardGrid() {
  return (
    <div className="grid">
      {cards.map((c, i) => (
        <Card key={i} {...c} />
      ))}
    </div>
  );
}
