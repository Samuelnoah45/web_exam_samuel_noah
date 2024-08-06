import { render, screen } from "@testing-library/react";
import JokeCard from "../components/Joke";
import "@testing-library/jest-dom";

describe("JokeCard", () => {
  const joke = {
    setup: "Why did the chicken cross the road?",
    delivery: "To get to the other side",
  };

  it("renders the setup and delivery of the joke", () => {
    render(<JokeCard joke={joke} />);

    const setup = screen.getByText(joke.setup);
    expect(setup).toBeInTheDocument();
    expect(screen.getByText(joke.delivery)).toBeInTheDocument();
  });
});
