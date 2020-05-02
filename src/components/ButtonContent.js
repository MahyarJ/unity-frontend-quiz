import React from "react";

export const ButtonContent = ({ loading, toLoad }) => {
  if (loading) {
    return <span data-testid="fetching">Fetching...</span>;
  } else if (toLoad) {
    return <span data-testid="fetch-more">Fetch More ({toLoad})</span>;
  } else return <span data-testid="all-fetched">No More Data To Fetch</span>;
};

export default ButtonContent;
