import React from 'react';
//import { Helmet } from 'react-helmet';
import '../style/main.scss';

export default () => {

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet> */}
      <section id="hero" className="">
            <h1 className="">
              Sorry, this path does not exist{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
      </section>
    </>
  );
};
