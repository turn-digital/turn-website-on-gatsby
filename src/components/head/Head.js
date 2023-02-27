import React from "react";

const Head = (props) => {
  const { title, description } = props;
  return (
    <>
      <title>{`Turn | ${title}`}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};
export default Head;
