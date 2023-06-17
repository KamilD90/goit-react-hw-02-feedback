import css from './Section.module.css';

const Section = ({ title, className, children }) => {
  return (
    <section className={css.section}>
      <h2 className={className}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
