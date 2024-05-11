import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Getting Started
          </Link>
          <Link
            className="button button--secondary button--lg button--outline"
            to="/docs/getting-started">
            Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Набор вспомогательных функций которые часто требуются в использовании">
      <HomepageHeader />

      <section className={clsx('container', styles.section__desc)}>
        DEV-UTILS - это набор вспомогательных функций которые часто требуются в использовании
        Библиотека поставляет набор функций для различных случаев использования
        От классических функций для JS/TS до вспомогательных функций scss
      </section>
    </Layout>
  );
}
