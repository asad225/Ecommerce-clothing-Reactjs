import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.component";
import { selectCategoriesIsLoading } from "../../store/category/category.selector";
import React from "react";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <React.Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="category-preview-container">
          {Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key];
            return (
              <CategoryPreview key={key} title={key} products={products} />
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default CategoriesPreview;
