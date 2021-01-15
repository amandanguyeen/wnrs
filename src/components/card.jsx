import React, { Component } from "react";
import '../App.css';
import shuffle from "lodash";

class Card extends Component {
    state = {
        card: "READY?"
    }

    generateNewCard = () => {
        var randomCard =  levelThree.sort(() => 0.5 - Math.random())[0]
        this.setState({card: randomCard});
    }

    render() {
        return (
              <button onClick={this.generateNewCard} class="MainButton">
                    {this.state.card}
              </button>
        );
    }

}

let levelThree = [
    "What can I help you with?",
    "Why do you think we met?",
    "What about me surprised you?",
    "In a word, how would you describe our conversation?",
    "What do you think my strength is?",
    "What can I teach you?",
    "Based on what you've learned about me, do you have any Netflix recommendations?",
    "Who do I remind you of?",
    "What can you be kinder towards yourself for today?",
    "What's one small thing you can do to be a better person in 2019?",
    "What can we create together?",
    "How would you describe me to a stranger?",
    "What about me most surprised you?",
    "What would be the perfect gift for me?",
    "What do you admire most about me?",
    "Based on what you learned about me, what book would you recommend I read?",
    "What about me is hardest for you to understand?",
    "What am I most qualified to give advice about?",
    "What is one thing you think I can do that would dramatically improve my life?",
    "If we were in a band, what would our name be?",
    "Based on what you learned about me, does my social media accurately reflect who I am? Why or why not?",
    "What do I need to hear right now?",
    "Based on what you know about me, do you have any netflix recommendations?",
    "What do you think my superpower is?",
    "What is a lesson you will take away from our conversation?",
    "When in this game did you feel most connected to me?",
    "How does one earn your vulnerability? Have I earned it? How can I earn more?",
    "What do you think our most important similarity is?",
    "In one word, how would you describe our conversation?",
    "What answer of mine made you light up?",
    "When this game is over, what will you remember about me?",
    "What question were you most afraid to answer?",
    "What parts of yourself do you see in me?",
    "How do our personalities complement each other?",
    "What do you think my weakness is?",
    "What would make you feel closer to me?",
    "What do you think I fear the most?",
    "What has this conversation taught you about yourself?",
    "What do you think I should know about myself that perhaps I'm unaware of?",
    "What do you think my defining characterisitic is?",
    "Do you believe everyone has a calling? If so, do you think I've found mine?",
    "What do you recommend I let go of, if anything?",
    "In one word, describe how you feel right now",
  ];

export default Card;