import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Záróvizsga tételsor",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        A PTI bsc záróvizsgára kászült jegyzeteimet itt megtalálhatod, néhány további referencia
        linkkel. Remélem segíteni fog.
      </>
    ),
  },
  {
    title: "Koncentrálj a fontos dolgokra",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Ezekkel a jegyzetekkel könyebben fel lehet készülni a záróvizsgára, de fontos, hogy saját
        jegyzetet is készíts. Nem minden arany ami fénylik.
      </>
    ),
  },
  {
    title: "Kezdj el tanulni időben",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Adj időt magadnak, hogy meg tudd emészteni az infókat. Lehet, hogy találsz olyan infókat is
        ami a vizsga után is jól jöhet.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
