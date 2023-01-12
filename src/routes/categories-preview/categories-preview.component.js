import { CategoriesContext } from "../../context/categories.context";
import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />
      })}
    </div>
  );
};

export default CategoriesPreview;
