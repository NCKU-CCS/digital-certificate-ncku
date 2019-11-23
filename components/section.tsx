import React, { PropsWithChildren } from 'react';

/**
 * @function Section()
 * @param {PropsWithChildren<{}>} props {}
 * @brief component for contain children
 */
const Section: React.FC<{}> = (props: PropsWithChildren<{}>) => {
  return (
    <section>
      {props.children}
      <style jsx>{`
        section {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default Section;
