import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = ({ toDos }) => {
  const { id } = useParams();

  const toDo = toDos.find((todo) => todo.id === parseInt(id));

  console.log(toDo);

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at : {toDo?.id}</h5>
    </>
  );
};

const getStateToProps = (state) => {
  return { toDos: state };
};

export default connect(getStateToProps)(Detail);
