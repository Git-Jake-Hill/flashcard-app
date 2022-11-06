import FilterCardDisplay from "../Components/FilterCardDisplay";

function Test() {
  return (
    <div className="container pt-4">
      <h1 className="display-1 text-center">Run Test</h1>
      <br />
      <FilterCardDisplay />
      <div className="cardDisplay p-5 my-5 border">
        <h4>This is the question, it is extra long now.</h4>
      </div>
      <div className="container buttonLayout">
        <div className="row">
          <div className="col d-grid gap-2">
            <button type="button" className="btn btn-primary">
              Flip Card
            </button>
          </div>
          <div className="col d-grid gap-2">
            <button type="button" className="btn btn-primary">
              Next Card
            </button>
          </div>
        </div>
        <div class="d-grid gap-2 my-4">
          <button class="btn btn-success" type="button">
            I Know it
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
