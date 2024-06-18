export const ChildComp = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          props.greethandler("Child");
        }}
      >
        Greet Parent
      </button>
    </div>
  );
};
