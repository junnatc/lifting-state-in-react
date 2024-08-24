
const BurgerStack = ({ stack, removeBurger }) => {
  return (
    <div className="burger-stack">
      {stack.map((ingredient, index) => (
        <div
          key={index}
          className="burger-ingredient"
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
          <button onClick={() => removeBurger(ingredient)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default BurgerStack;


