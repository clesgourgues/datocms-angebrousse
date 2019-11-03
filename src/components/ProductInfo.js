import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { createMarkup } from "@helpers/content";

const ProductInfo = ({ infos, category, title }) => (
  <div className="Product__info">
    <div className="Product__info__title">{title}</div>
    <Tabs>
      <TabList>
        {infos
          .sort((a, b) => a.position - b.position)
          .map((i, index) => {
            const categories = i.categories.map(category => category.name);
            return (
              categories.includes(category) && (
                <Tab key={`info-${index}`}>
                  <div className="Product__info__subtitle">{i.title}</div>
                </Tab>
              )
            );
          })}
      </TabList>
      {infos
        .sort((a, b) => a.position - b.position)
        .map((i, index) => {
          const categories = i.categories.map(category => category.name);
          return (
            categories.includes(category) && (
              <TabPanel key={`info-${index}`}>
                <div
                  className="Product__info__content"
                  dangerouslySetInnerHTML={createMarkup(i.content)}
                />
              </TabPanel>
            )
          );
        })}
    </Tabs>
  </div>
);

export default ProductInfo;
