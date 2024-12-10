import paintBrush from "../assets/images/paintbrush-icon.png";
import code from "../assets/images/code-icon.png";
import settings from "../assets/images/settings-icon.png";
import people from "../assets/images/people-icon.png";
import clipboard from "../assets/images/clipboard-icon.png";
import graduation from "../assets/images/graduation-icon.png";


export const cardInfo = [
  {
    id: 1,
    image: paintBrush,
    position: "Design",
    button: "4 open positions",
    gradient: "linear-gradient( hsl(225 88% 86%), hsl(281 100% 92%))",
  },
  {
    id: 2,
    position: "Engineering",
    image: code,
    button: "8 open positions",
    gradient: "linear-gradient(hsl(331 89% 86%), hsl(0 100% 92%))",
    backgroundColor: "hsl(234 40% 20%)",
    color: "hsl(0 0% 100%)"
  },
  {
    id: 3,
    position: "Operations",
    image: settings,
    button: "2 open positions",
    gradient: "linear-gradient(hsl(197 88% 87%), hsl(277 100% 92%))"
  },
  {
    id: 4,
    position: "People",
    image: people,
    button: "6 open positions",
    gradient: "linear-gradient(hsl(158 88% 86%), hsl(223 100% 92%))"
  },
  {
    id: 5,
    position: "Sales",
    image: clipboard,
    button: "7 open positions",
    gradient: "linear-gradient(hsl(225 88% 87%), hsl(277 100% 92%))"
  },
  {
    id: 6,
    position: "University",
    image: graduation,
    button: "8 open positions",
    gradient: "linear-gradient(hsl(25 100% 89%), hsl(234 100% 92%))"
  }

]

export const disclaimer = {
  paragraph: "We are proud to be an equal opportunity employer that values diversity. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.",
}
