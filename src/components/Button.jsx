export const Button = ({ cardInfo }) => {

  const buttonStyle = {
    backgroundColor: cardInfo.backgroundColor,
    color: cardInfo.color
  }

  return (
    <a href="#"
      className="button"
      style={buttonStyle}
      aria-label={`click here to apply for this ${cardInfo.position}`}>
      {cardInfo.button}
    </a>
  )
}