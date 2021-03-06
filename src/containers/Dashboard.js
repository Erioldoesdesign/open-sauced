import React, {Suspense} from "react";
import Repository from "../components/Repository";
import RepositoryGoals from "../components/RepositoryGoals";
import {Route} from "react-router-dom";

function Repositories({match}) {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Route exact path={match.url} component={RepositoryGoals} />
      <Route path={"/repos/:repoOwner/:repoName/:id"} component={Repository} />
    </Suspense>
  );
}

export default Repositories;
