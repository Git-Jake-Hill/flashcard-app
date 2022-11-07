import FilterCardDisplay from "../Components/FilterCardDisplay";

function Cards() {
  return (
    <div className="container pt-4">
      <h1 className="display-1 text-center">Cards</h1>
      <br />
      <FilterCardDisplay />
      <div className="addCards">
        <h2 className=" cardCount mt-4">Add Cards</h2>
        <form action="POST">
          <div className="row addCard">
            <div className="col-8">
              <div className="mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="formQuestion"
                  aria-describedby="new card question"
                  placeholder="question..."
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="formAnswer"
                  placeholder="answer..."
                />
      <div className="cardList">
        <h2 className=" cardCount mt-4">{cardList.length} Cards</h2>
        {cardList.map((item, index) => {
          return <Card key={index} question={item.question} />;
        })}
      </div>
    </div>
  );
}

export default Cards;
